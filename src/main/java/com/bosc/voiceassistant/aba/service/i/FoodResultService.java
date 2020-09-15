package com.bosc.voiceassistant.aba.service.i;

import com.alibaba.fastjson.JSONObject;
import com.bosc.voiceassistant.aba.entity.FoodMenuInfo;
import com.bosc.voiceassistant.aba.service.IFoodMenuService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @author Xu Ran
 * @since 2020/9/14 3:13 下午
 */
public class FoodResultService {

    @Autowired
    private IFoodMenuService foodMenuService;

    //菜品问题返回结果
    public String getResult(JSONObject jsonObject) {
        StringBuilder sb = new StringBuilder();
        String startDate = jsonObject.get("start_date").toString();
        String endDate = jsonObject.get("end_date").toString();
        String menu = jsonObject.get("menu").toString();
        String brunch = jsonObject.get("brunch").toString();
        String category = jsonObject.get("category").toString();
        if (jsonObject.get("type").equals(Integer.parseInt("1"))) {
            //问菜单问题

        } else if (jsonObject.get("type").equals(Integer.parseInt("2"))) {
            //价格类问题

        } else if (jsonObject.get("type").equals(Integer.parseInt("3"))) {
            //是否类问题

        } else {
            //时间问题

        }
        return sb.toString();
    }

    //问菜单问题
    public List<FoodMenuInfo> getFoodMenuAnswer(String startDate, String endDate, String menu, String brunch,
                                                String category) {
        List<FoodMenuInfo> list = new ArrayList<>();
        StringBuilder sql = new StringBuilder("select * from foodmenu as fm where");
        if (!brunch.equals("None")) {
            sql.append(" fm.brunch = '" + brunch + "' and");
        }
        if (!category.equals("None")) {
            sql.append(" fm.category = '" + category + "' and");
        }
        if (!startDate.equals(endDate)) {
            sql.append(" (fm.date between '" + startDate + "' and '" + endDate +"')");
        }
        else {
            sql.append(" fm.date = '" + startDate + "'");
        }

        return list;
    }
}
