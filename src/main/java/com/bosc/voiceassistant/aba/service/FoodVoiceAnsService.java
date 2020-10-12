package com.bosc.voiceassistant.aba.service;

import com.alibaba.fastjson.JSONObject;
import com.bosc.voiceassistant.aba.entity.FoodMenuInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @author Xu Ran
 * @since 2020/9/14 3:13 下午
 */
@Service
public class FoodVoiceAnsService {

    @Autowired
    private LocalContainerEntityManagerFactoryBean entityManagerFactory;

    //菜品问题返回结果
    public String getResult(JSONObject jsonObject) throws ParseException {
        StringBuilder sb = new StringBuilder();
        String startDate = jsonObject.get("start_date").toString();
        String endDate = jsonObject.get("end_date").toString();
        String menu = jsonObject.get("menu").toString();
        String brunch = jsonObject.get("brunch").toString();
        String category = jsonObject.get("category").toString();
        Date startDateSql = stringToDate(startDate);
        Date endDateSql = stringToDate(endDate);
        Double price = (Double) jsonObject.get("price");
        if (jsonObject.get("type").equals(Integer.parseInt("1"))) {
            //问菜单问题
            List<FoodMenuInfo> list1 = getFoodMenuResult(startDateSql, endDateSql, brunch, category);
            if (list1.size() > 0) {
                if (list1.size() > 1) {
                    for (int i = 0; i < list1.size() - 1; i++) {
                        sb.append(list1.get(i).getFoodName() + ", ");
                    }
                    sb.append(list1.get(list1.size() - 1));
                } else {
                    sb.append(list1.get(0));
                }
            } else {
                return null;
            }
        } else if (jsonObject.get("type").equals(Integer.parseInt("2"))) {
            //价格类问题
            List<FoodMenuInfo> list2 = getFoodPriceResult(menu, category);
            if (list2.size() > 0) {
                sb.append(list2.get(0).getFoodPrice());
            } else {
                return "0";
            }
        } else if (jsonObject.get("type").equals(Integer.parseInt("3"))) {
            //是否类问题
            List<FoodMenuInfo> list3 = getFoodTrueFalseResult(startDateSql, endDateSql, menu, brunch, category, price);
            if (price > 0 && price.equals(list3.get(0).getFoodPrice())) {
                return "是的";
            } else if (price > 0 && !price.equals(list3.get(0).getFoodPrice())) {
                return "不是";
            } else {
                if (list3.size() > 0) return "有";
                else return "没有";
            }
        } else if (jsonObject.get("type").equals(Integer.parseInt("4"))) {
            //时间问题
            List<FoodMenuInfo> list4 = getFoodTimeResult(menu);
            List<Date> dateList = new ArrayList<>();
            for (FoodMenuInfo food : list4) {
                dateList.add(food.getDate());
            }
            dateList.sort(Date::compareTo);
            for (Date date : dateList) {
                if (date.after(convertToDate())) {
                    sb.append(date.toString());
                    break;
                }
            }
        }
        return sb.toString();
    }

    //问菜单问题
    public List<FoodMenuInfo> getFoodMenuResult(Date startDate, Date endDate, String brunch,
                                                String category) {
        StringBuilder sb = new StringBuilder("select * from foodmenu as fm where 1 = 1");
        if (!brunch.equals("None")) {
            sb.append(" and fm.brunch = '" + brunch + "'");
        }
        if (!category.equals("None")) {
            sb.append(" and fm.category = '" + category + "'");
        }
        if (!startDate.equals(endDate)) {
            sb.append(" and (fm.date between '" + startDate + "' and '" + endDate + "')");
        } else {
            sb.append(" and fm.date = '" + startDate + "'");
        }
        sb.append(" and 2 = 2");
        EntityManager em = entityManagerFactory.getNativeEntityManagerFactory().createEntityManager();
        em.getTransaction().begin();
        Query query = em.createNativeQuery(sb.toString(), FoodMenuInfo.class);
        List<FoodMenuInfo> list = query.getResultList();
        return list;
    }

    //String转Date
    public Date stringToDate(String str) throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date date = sdf.parse(str);
        String strDate = sdf.format(date);
        Date date2 = sdf.parse(strDate);
        return new java.sql.Date(date2.getTime());
    }

    //时间戳转Date
    public Date convertToDate() throws ParseException {
        SimpleDateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd");
        String dateStr = dateformat.format(System.currentTimeMillis());
        return stringToDate(dateStr);
    }

    //价格类问题
    public List<FoodMenuInfo> getFoodPriceResult(String menu, String category) {
        StringBuilder sb = new StringBuilder("select * from foodmenu as fm where 1 = 1");
        if (!menu.equals("None")) {
            sb.append(" and fm.food_name = '" + menu + "'");
        }
        if (!category.equals("None")) {
            sb.append(" and fm.category = '" + category + "'");
        }
        sb.append(" and 2 = 2");
        EntityManager em = entityManagerFactory.getNativeEntityManagerFactory().createEntityManager();
        em.getTransaction().begin();
        Query query = em.createNativeQuery(sb.toString(), FoodMenuInfo.class);
        List<FoodMenuInfo> list = query.getResultList();
        return list;
    }

    //是否类问题
    public List<FoodMenuInfo> getFoodTrueFalseResult(Date startDate, Date endDate, String menu, String brunch,
                                                     String category, Double price) {
        StringBuilder sb = new StringBuilder("select * from foodmenu as fm where 1 = 1");
        if (price > 0) {
            sb.append(" and food_name = '" + menu + "'");
        } else {
            if (!menu.equals("None")) {
                sb.append(" and food_name = '" + menu + "'");
            }
            if (!brunch.equals("None")) {
                sb.append(" and brunch = '" + brunch + "'");
            }
            if (!category.equals("None")) {
                sb.append(" and category = '" + category + "'");
            }
            if (!startDate.equals(endDate)) {
                sb.append(" and (fm.date between '" + startDate + "' and '" + endDate + "')");
            } else {
                sb.append(" and fm.date = '" + startDate + "'");
            }
            sb.append(" and 2 = 2");
        }
        EntityManager em = entityManagerFactory.getNativeEntityManagerFactory().createEntityManager();
        em.getTransaction().begin();
        Query query = em.createNativeQuery(sb.toString(), FoodMenuInfo.class);
        List<FoodMenuInfo> list = query.getResultList();
        return list;
    }

    //时间问题
    public List<FoodMenuInfo> getFoodTimeResult(String menu) {
        StringBuilder sb = new StringBuilder("select * from foodmenu as fm where 1 = 1");
        if (!menu.equals("None")) {
            sb.append(" and fm.food_name = '" + menu + "'");
        }
        sb.append(" and 2 = 2");
        EntityManager em = entityManagerFactory.getNativeEntityManagerFactory().createEntityManager();
        em.getTransaction().begin();
        Query query = em.createNativeQuery(sb.toString(), FoodMenuInfo.class);
        List<FoodMenuInfo> list = query.getResultList();
        return list;
    }
}
