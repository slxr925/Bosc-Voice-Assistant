package com.bosc.voiceassistant.aba.controller.api;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.annotation.JsonAlias;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestBody;
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
    public void send(@RequestBody String question) {
        try {
            RestTemplate restTemplate = new RestTemplate();
            URI uri = new URI("http://49.235.152.129:8888/search");
            //如果发送的参数数据是json数据的话，需要添加特殊的请求头
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            //添加参数,因为HttpEntity里面的参数是MultiValueMap类型的，所以使用这个map集合
            MultiValueMap<String, String> map = new LinkedMultiValueMap<>();
            System.out.println(question);
            map.add("question", question);
            //添加请求的实体类，第一个参数是要发送的参数，第二个参数是请求头里的数据
            HttpEntity<Object> requestEntity = new HttpEntity<>(map, headers);
            ResponseEntity<String> exchange = restTemplate.exchange(uri, HttpMethod.POST, requestEntity, String.class);
            //把字符串转换为json
            JSONObject tempJson = JSON.parseObject(exchange.getBody());
            //把obj对应的json拿出来
            Object obj = tempJson.get("obj");
            JSONObject jsonObject = JSON.parseObject(obj.toString());
            //首先解析问题类型
            if (jsonObject.get("type").equals(Integer.parseInt("1"))) {
                //问菜单问题

            } else if (jsonObject.get("type").equals(Integer.parseInt("2"))) {
                //问价格问题

            } else {
                //是否类问题

            }
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }
    }
}

