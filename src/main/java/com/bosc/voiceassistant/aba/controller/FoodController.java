package com.bosc.voiceassistant.aba.controller;

import com.bosc.voiceassistant.aba.entity.FoodMenuInfo;
import com.bosc.voiceassistant.aba.service.i.FoodResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Xu Ran
 * @since 2020/9/17 3:04 下午
 */
@RestController
@RequestMapping("/food")
public class FoodController {

    @Autowired
    private FoodResultService foodResultService;

    @RequestMapping(value = "/getFoodPriceResult")
    @ResponseBody
    public String getFoodPriceResult(String menu, String category) {
        StringBuilder sb = new StringBuilder();
        List<FoodMenuInfo> list = foodResultService.getFoodPriceResult("绿豆汤", "None");
        if (list.size() > 0) {
            sb.append(list.get(0).getFoodPrice());
        } else {
            return "0";
        }
        return sb.toString();
    }
}
