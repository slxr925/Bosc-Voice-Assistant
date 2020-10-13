package com.bosc.voiceassistant.aba.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.bosc.voiceassistant.aba.service.DailyCalorieService;
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

/**
 * @author Xu Ran
 * @since 2020/10/12 4:00 下午
 */
@Api
@RestController
@RequestMapping(value = "/dailycalorie")
public class DailyCalorieController {

    @Autowired
    private DailyCalorieService dcService;

    @Autowired
    private IUserService userService;

    @RequestMapping(value = "/recommand/{userId}", method = RequestMethod.GET)
    @ResponseBody
    public void recommandResult(@PathVariable(value = "userId") Integer userId) {
        try {
            RestTemplate restTemplate = new RestTemplate();
            URI uri = new URI("http://49.235.152.129:8888/search");
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            MultiValueMap<String, Object> map = new LinkedMultiValueMap<>();
            List<MultiValueMap<String, String>> foodlist = dcService.getFoodRes();
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