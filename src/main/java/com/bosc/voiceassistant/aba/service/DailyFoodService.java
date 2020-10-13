package com.bosc.voiceassistant.aba.service;

import com.bosc.voiceassistant.aba.entity.FoodMenuInfo;
import com.bosc.voiceassistant.aba.service.i.IFoodMenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.util.*;

/**
 * @author Xu Ran
 * @since 2020/10/12 3:40 下午
 */
@Service
public class DailyFoodService {

    @Autowired
    private static IFoodMenuService foodMenuService;

    public List<MultiValueMap<String, String>> getFoodRes() {
        List<FoodMenuInfo> foodList = new ArrayList<>();
        switch (getWeekOfDate(new Date())) {
            case "星期一":
                foodList.addAll(foodMenuService.getFoodListByDate(new Date()));
                foodList.addAll(foodMenuService.getFoodListByDate(getDateplus(1)));
                foodList.addAll(foodMenuService.getFoodListByDate(getDateplus(2)));
                foodList.addAll(foodMenuService.getFoodListByDate(getDateplus(3)));
                foodList.addAll(foodMenuService.getFoodListByDate(getDateplus(4)));
                break;
            case "星期二":
                foodList.addAll(foodMenuService.getFoodListByDate(new Date()));
                foodList.addAll(foodMenuService.getFoodListByDate(getDateplus(1)));
                foodList.addAll(foodMenuService.getFoodListByDate(getDateplus(2)));
                foodList.addAll(foodMenuService.getFoodListByDate(getDateplus(3)));
                break;
            case "星期三":
                foodList.addAll(foodMenuService.getFoodListByDate(new Date()));
                foodList.addAll(foodMenuService.getFoodListByDate(getDateplus(1)));
                foodList.addAll(foodMenuService.getFoodListByDate(getDateplus(2)));
                break;
            case "星期四":
                foodList.addAll(foodMenuService.getFoodListByDate(new Date()));
                foodList.addAll(foodMenuService.getFoodListByDate(getDateplus(1)));
                break;
            case "星期五":
                foodList.addAll(foodMenuService.getFoodListByDate(new Date()));
                break;
        }
        List<MultiValueMap<String, String>> list = new LinkedList<>();
        for (FoodMenuInfo fmi : foodList) {
            MultiValueMap<String, String> map = new LinkedMultiValueMap<>();
            map.add("name", fmi.getFoodName());
            map.add("cal", fmi.getCalorie().toString());
            map.add("category", fmi.getCategory());
            map.add("date", getWeekOfDate(fmi.getDate()));
            list.add(map);
        }
        return list;
    }

    //获取当前日期加n天
    private static Date getDateplus(int n) {
        Date date = new Date(); //取时间
        Calendar calendar = new GregorianCalendar();
        calendar.setTime(date);
        calendar.add(Calendar.DATE, n); //把日期往后增加n天,整数  往后推,负数往前移动
        return calendar.getTime(); //这个时间就是日期往后推n天的结果
    }

    //通过日期判断周几
    public static String getWeekOfDate(Date date) {
        String[] weekDays = { "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" };
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        int w = cal.get(Calendar.DAY_OF_WEEK) - 1;
        if (w < 0)
            w = 0;
        return weekDays[w];
    }

}
