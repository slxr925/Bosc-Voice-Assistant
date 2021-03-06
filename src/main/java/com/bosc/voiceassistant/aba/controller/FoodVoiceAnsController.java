package com.bosc.voiceassistant.aba.controller;

import com.bosc.voiceassistant.aba.entity.FoodMenuInfo;

import com.bosc.voiceassistant.aba.service.FoodVoiceAnsService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @author Xu Ran
 * @since 2020/9/17 3:04 下午
 */
@Api
@RestController
@RequestMapping("/foodvoice")
public class FoodVoiceAnsController {

    @Autowired
    private FoodVoiceAnsService fvaService;

//    @RequestMapping(value = "/getFoodPriceResult")
//    public String getFoodPriceResult() {
//        StringBuilder sb = new StringBuilder();
//        List<FoodMenuInfo> list = fvaService.getFoodPriceResult("绿豆汤", "None");
//        if (list.size() > 0) {
//            sb.append(list.get(0).getFoodPrice());
//        } else {
//            return "0";
//        }
//        return sb.toString();
//    }

//    @RequestMapping(value = "/getFoodTimeResult")
//    public String getFoodTimeResult() throws ParseException {
//        StringBuilder sb = new StringBuilder();
//        List<FoodMenuInfo> list = fvaService.getFoodTimeResult("面条");
//        List<Date> dateList = new ArrayList<>();
//        for (FoodMenuInfo food : list) {
//            dateList.add(food.getDate());
//        }
//        dateList.sort(Date::compareTo);
//        long msec = System.currentTimeMillis();
//        for (Date date : dateList) {
//            if (date.after(fvaService.convertToDate())) {
//                sb.append(date.toString());
//                break;
//            }
//        }
//        return sb.toString();
//    }

//    @RequestMapping(value = "/getFoodTrueFalseResult")
//    public String getFoodTFResult() throws ParseException {
//        Date resultDate = fvaService.stringToDate("2020-09-17");
//        List<FoodMenuInfo> list3 = fvaService.getFoodTrueFalseResult(resultDate, resultDate, "", "brunch",
//                "category", 3.5);
//        if (3.5 > 0 && price.equals(list3.get(0).getFoodPrice())) {
//            return "是的";
//        } else if (price > 0 && !price.equals(list3.get(0).getFoodPrice())) {
//            return "不是";
//        } else {
//            if (list3.size() > 0) return "有";
//            else return "没有";
//        }
//    }

//    @RequestMapping(value = "/getFoodMenuResult")
//    public String getFoodMenuResult() throws ParseException {
//        Date resultDate = fvaService.stringToDate("2020-10-15");
//        List<FoodMenuInfo> list1 = fvaService.getFoodMenuResult(resultDate, resultDate, "午餐", "None");
//        StringBuilder sb = new StringBuilder();
//        if (list1.size() > 0) {
//            if (list1.size() > 1) {
//                for (int i = 0; i < list1.size() - 1; i++) {
//                    sb.append(list1.get(i).getFoodName() + ", ");
//                }
//                sb.append(list1.get(list1.size() - 1).getFoodName());
//            } else {
//                sb.append(list1.get(0));
//            }
//        } else {
//            return null;
//        }
//        return sb.toString();
//    }
}
