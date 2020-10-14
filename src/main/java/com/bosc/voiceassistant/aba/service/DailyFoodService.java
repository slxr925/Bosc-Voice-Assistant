package com.bosc.voiceassistant.aba.service;

import com.bosc.voiceassistant.aba.entity.FoodMenuInfo;
import com.bosc.voiceassistant.aba.service.i.IFoodMenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.sql.Date;
import java.util.*;

/**
 * @author Xu Ran
 * @since 2020/10/12 3:40 下午
 */
@Service
public class DailyFoodService {

    @Autowired
    private IFoodMenuService foodMenuService;

    public List<Map<String, String>> getFoodRes() {
        List<FoodMenuInfo> foodList = new ArrayList<>();
        switch (getWeekOfDate(new java.util.Date())) {
            case "星期一":
                foodList.addAll(foodMenuService.getFoodListByDate(convertSqlDate(new java.util.Date())));
                foodList.addAll(foodMenuService.getFoodListByDate(convertSqlDate(getDateplus(1))));
                foodList.addAll(foodMenuService.getFoodListByDate(convertSqlDate(getDateplus(2))));
                foodList.addAll(foodMenuService.getFoodListByDate(convertSqlDate(getDateplus(3))));
                foodList.addAll(foodMenuService.getFoodListByDate(convertSqlDate(getDateplus(4))));
                break;
            case "星期二":
                foodList.addAll(foodMenuService.getFoodListByDate(convertSqlDate(new java.util.Date())));
                foodList.addAll(foodMenuService.getFoodListByDate(convertSqlDate(getDateplus(1))));
                foodList.addAll(foodMenuService.getFoodListByDate(convertSqlDate(getDateplus(2))));
                foodList.addAll(foodMenuService.getFoodListByDate(convertSqlDate(getDateplus(3))));
                break;
            case "星期三":
                foodList.addAll(foodMenuService.getFoodListByDate(convertSqlDate(new java.util.Date())));
                foodList.addAll(foodMenuService.getFoodListByDate(convertSqlDate(getDateplus(1))));
                foodList.addAll(foodMenuService.getFoodListByDate(convertSqlDate(getDateplus(2))));
                break;
            case "星期四":
                foodList.addAll(foodMenuService.getFoodListByDate(convertSqlDate(new java.util.Date())));
                foodList.addAll(foodMenuService.getFoodListByDate(convertSqlDate(getDateplus(1))));
                break;
            case "星期五":
                foodList.addAll(foodMenuService.getFoodListByDate(convertSqlDate(new java.util.Date())));
                break;
        }
        List<Map<String, String>> list = new LinkedList<>();
        for (FoodMenuInfo fmi : foodList) {
            Map<String, String> map = new LinkedHashMap<>();
            map.put("name", fmi.getFoodName());
            map.put("cal", (Math.random() * 300 + ""));
            //map.add("cal", fmi.getCalorie().toString());
            map.put("category", fmi.getCategory());
            map.put("date", getWeekOfDate(fmi.getDate()));
            list.add(map);
        }
        return list;
    }

    //获取当前日期加n天
    private static java.util.Date getDateplus(int n) {
        java.util.Date date = new java.util.Date(); //取时间
        Calendar calendar = new GregorianCalendar();
        calendar.setTime(date);
        calendar.add(Calendar.DATE, n); //把日期往后增加n天,整数  往后推,负数往前移动
        return calendar.getTime(); //这个时间就是日期往后推n天的结果
    }

    //sql date转 util date
    private static java.util.Date convertUtilDate(Date date) {

        java.sql.Date sqlDate1 = new java.sql.Date(new java.util.Date().getTime());
        java.util.Date utilDate1 = new java.util.Date(sqlDate1.getTime());
        return utilDate1;
    }

    //util date 转 sql date
    private static Date convertSqlDate(java.util.Date date) {
        java.sql.Date sqlDate = new java.sql.Date(date.getTime());
        return sqlDate;
    }

    //通过日期判断周几
    public static String getWeekOfDate(java.util.Date date) {
        String[] weekDays = {"星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"};
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        int w = cal.get(Calendar.DAY_OF_WEEK) - 1;
        if (w < 0)
            w = 0;
        return weekDays[w];
    }

}
