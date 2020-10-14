package com.bosc.voiceassistant.aba.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.bosc.voiceassistant.aba.service.DailyFoodService;
import com.bosc.voiceassistant.aba.service.i.IUserService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Map;

/**
 * @author Xu Ran
 * @since 2020/10/12 4:00 下午
 */
@Api
@RestController
@RequestMapping(value = "/dailyfood")
public class DailyFoodController {

    @Autowired
    private DailyFoodService dcService;

    @Autowired
    private IUserService userService;

    @RequestMapping(value = "/recommand/{userId}", method = RequestMethod.GET)
    public void recommandResult(@PathVariable(value = "userId") Integer userId) {
        try {
            RestTemplate restTemplate = new RestTemplate();
            URI uri = new URI("http://192.168.43.83:8081/foodrecom");
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            MultiValueMap<String, Object> map = new LinkedMultiValueMap<>();
            List<Map<String, String>> foodlist = dcService.getFoodRes();
            map.add("user", userService.getUserById(userId));
            map.add("res", foodlist);
            HttpEntity<Object> requestEntity = new HttpEntity<>(map, headers);
            ResponseEntity<String> exchange = restTemplate.exchange(uri, HttpMethod.POST, requestEntity, String.class);
            JSONObject tempJson = JSON.parseObject(exchange.getBody());
            Object obj = tempJson.get("obj");
            JSONObject jsonObject = JSON.parseObject(obj.toString());
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }
        //return Result.error();
    }

}