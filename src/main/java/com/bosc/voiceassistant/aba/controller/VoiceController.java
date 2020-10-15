package com.bosc.voiceassistant.aba.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.bosc.voiceassistant.aba.entity.Result;
import com.bosc.voiceassistant.aba.service.FoodVoiceAnsService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;
import java.text.ParseException;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * @author Xu Ran
 * @since 2020/9/2 下午8:14
 */
@Api
@RestController
@RequestMapping(value = "/voice")
public class VoiceController {

    @Autowired
    private FoodVoiceAnsService fvaService;

    @RequestMapping(value = "/voiceResult/{question}", method = RequestMethod.GET)
    public Result voiceResult(@PathVariable(value = "question") String question) {
        try {
            RestTemplate restTemplate = new RestTemplate();
            URI uri = new URI("http://49.235.152.129:18085/search");
            //如果发送的参数数据是json数据的话，需要添加特殊的请求头
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            //添加参数,因为HttpEntity里面的参数是MultiValueMap类型的，所以使用这个map集合
            MultiValueMap<String, String> map = new LinkedMultiValueMap<>();
            map.add("question", "今天荤菜有哪些");
            //添加请求的实体类，第一个参数是要发送的参数，第二个参数是请求头里的数据
            HttpEntity<Object> requestEntity = new HttpEntity<>(map, headers);
            ResponseEntity<String> exchange = restTemplate.exchange(uri, HttpMethod.POST, requestEntity, String.class);
            //把字符串转换为json
            JSONObject tempJson = JSON.parseObject(exchange.getBody());
            //把obj对应的json拿出来
            Object obj = tempJson.get("obj");
            JSONObject jsonObject = JSON.parseObject(obj.toString());
            System.out.println(jsonObject);
            //首先解析问题类型
            if (jsonObject.get("intent").equals("qa_dining")) {
                //食堂问题
                String str = fvaService.getFoodVoiceResult(jsonObject);
                Map<String, String> resFoodMap = new LinkedHashMap<>();
                resFoodMap.put("text", str);
                resFoodMap.put("url", "");
                return new Result(resFoodMap,"食堂问题");
            } else if (jsonObject.get("intent").equals("qa_bus")) {
                //班车问题
                Map<String, String> resBusMap = new LinkedHashMap<>();
                resBusMap.put("text", "班车时刻表");
                resBusMap.put("url", "/pages/car/car");
                return new Result(resBusMap,"班车问题");
            } else {
                //识别不出来的
                Map<String, String> errorMap = new LinkedHashMap<>();
                errorMap.put("text", "我好像听不懂您说的话～反馈链接：pages/uni-feedback/uni-feedback");
                errorMap.put("url", "");
                return new Result(errorMap,"识别不出来");
            }
        } catch (URISyntaxException | ParseException e) {
            e.printStackTrace();
        }
        return new Result("500", "语音解析失败！");
    }
}

