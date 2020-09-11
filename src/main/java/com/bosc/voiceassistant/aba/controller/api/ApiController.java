package com.bosc.voiceassistant.aba.controller.api;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.annotation.JsonAlias;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;

@RestController
@RequestMapping(value = "send")
public class ApiController {
    @RequestMapping(value = "/send")
    @ResponseBody
    public void send() {
        try {
            RestTemplate restTemplate = new RestTemplate();
            URI uri = new URI("http://49.235.152.129:8888/search");

            //如果发送的参数数据是json数据的话，需要添加特殊的请求头
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

//            Long curtime = System.currentTimeMillis();
//            String base64 = Base64.getEncoder().encodeToString();
            //为请求头添加参数
//            headers.add("X-Appid", "ASP.NET_SessionId=vr2d21dftdzblg5edxlp1ytn");
//            headers.add("X-CurTime" , curtime.toString());

            //添加参数,因为HttpEntity里面的参数是MultiValueMap类型的，所以使用这个map集合
            MultiValueMap<String, String> map = new LinkedMultiValueMap<>();
            map.add("question", "今天中午有哪些菜");

            //添加请求的实体类，第一个参数是要发送的参数，第二个参数是请求头里的数据
            HttpEntity<Object> requestEntity = new HttpEntity<>(map, headers);
            System.out.println(requestEntity);

            ResponseEntity<String> exchange = restTemplate.exchange(uri, HttpMethod.POST, requestEntity, String.class);
            //把字符串转换为json
            JSONObject jsonObject2 = JSON.parseObject(exchange.getBody());

//            List<Map<String, String>> resultList = (List<Map<String, String>>) jsonObject.get("msg");
//            for (Map<String, String> obj : resultList) {
//                System.out.println(obj);
//                // ......
//            }
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }
    }
}

