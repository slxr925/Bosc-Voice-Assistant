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
import java.util.stream.Collectors;

/**
 * @author Xu Ran
 * @since 2020/9/14 3:13 下午
 */
@Service
public class FoodVoiceAnsService {

    @Autowired
    private LocalContainerEntityManagerFactoryBean entityManagerFactory;

    //菜品问题返回结果
    public String getFoodVoiceResult(JSONObject jsonObject) throws ParseException {
        StringBuilder sb = new StringBuilder();
        String startDate = jsonObject.get("start_date").toString();
        String endDate = jsonObject.get("end_date").toString();
        List<?> tempList1 = List.class.cast(jsonObject.get("menu"));
        List<String> menuList = tempList1.stream().map(e -> (String) e).collect(Collectors.toList());
        String brunch = jsonObject.get("brunch").toString();
        List<?> tempList2 = List.class.cast(jsonObject.get("category"));
        List<String> categoryList = tempList2.stream().map(e -> (String) e).collect(Collectors.toList());
        Double price = (Double) jsonObject.get("price");
        if (jsonObject.get("type").equals("1")) {
            //问菜单问题
            List<FoodMenuInfo> list1 = getFoodMenuResult(stringToDate(startDate), stringToDate(endDate), brunch, categoryList);
            if (list1.size() > 0) {
                if (list1.size() > 1) {
                    sb.append("您所询问日期的菜品有：");
                    for (int i = 0; i < list1.size() - 1; i++) {
                        sb.append(list1.get(i).getFoodName() + ", ");
                    }
                    sb.append(list1.get(list1.size() - 1).getFoodName());
                } else {
                    sb.append("有：" + list1.get(0).getFoodName());
                }
            } else {
                return "对不起，您查询的日期没有任何菜，请核对日期！";
            }
        } else if (jsonObject.get("type").equals("2")) {
            //价格类问题
            List<FoodMenuInfo> list2 = getFoodPriceResult(menuList, categoryList);
            if (list2.size() > 0) {
                double resPrice = 0.0;
                for (FoodMenuInfo fmi : list2) {
                    resPrice += fmi.getFoodPrice();
                }
                sb.append("价格为：" + resPrice);
                return sb.toString();
            } else {
                return "无法查询价格，请核对您询问的菜名或类别！";
            }
        } else if (jsonObject.get("type").equals("3")) {
            //是否类问题
            List<FoodMenuInfo> list3 = getFoodTrueFalseResult(stringToDate(startDate), stringToDate(endDate), menuList,
                    brunch,
                    categoryList, price);
            if (price.equals(list3.get(0).getFoodPrice())) {
                return "是的";
            } else if (!price.equals(list3.get(0).getFoodPrice())) {
                return "不是, 价格应该是" + price + "元";
            } else {
                if (list3.size() > 0) return "有";
                else return "没有";
            }
        } else if (jsonObject.get("type").equals("4")) {
            //时间问题
            List<FoodMenuInfo> list4 = getFoodTimeResult(menuList);
            List<Date> dateList = new ArrayList<>();
            for (FoodMenuInfo food : list4) {
                dateList.add(food.getDate());
            }
            dateList.sort(Date::compareTo);
            for (Date date : dateList) {
                if (date.after(convertToDate())) {
                    sb.append("在" + date.toString() + "有您询问的菜！");
                    break;
                }
            }
        }
        return sb.toString();
    }

    //问菜单问题
    public List<FoodMenuInfo> getFoodMenuResult(Date startDate, Date endDate, String brunch,
                                                List<String> category) {
        List<FoodMenuInfo> res = new ArrayList<>();
        if (category.size() == 0) {
            StringBuilder sb = new StringBuilder("select * from foodmenu as fm where 1 = 1");
            if (!brunch.equals("None")) {
                sb.append(" and fm.brunch = '" + brunch + "'");
            }
            if (!startDate.equals(endDate)) {
                sb.append(" and (fm.date between '" + startDate + "' and '" + endDate + "')");
            } else {
                sb.append(" and fm.date = '" + startDate + "'");
            }
            sb.append(" and 2 = 2");
            System.out.println(sb.toString());
            EntityManager em = entityManagerFactory.getNativeEntityManagerFactory().createEntityManager();
            em.getTransaction().begin();
            Query query = em.createNativeQuery(sb.toString(), FoodMenuInfo.class);
            res.addAll(query.getResultList());
        } else {
            for (String s : category) {
                StringBuilder sb = new StringBuilder("select * from foodmenu as fm where 1 = 1");
                if (!brunch.equals("None")) {
                    sb.append(" and fm.brunch = '" + brunch + "'");
                }
                if (!(category.size() == 0)) {
                    sb.append(" and fm.category = '" + s + "'");
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
                res.addAll(query.getResultList());
            }
        }
        return res;
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
    public List<FoodMenuInfo> getFoodPriceResult(List<String> menu, List<String> category) {
        List<FoodMenuInfo> resList = new ArrayList<>();
        if (category.size() == 0) {
            for (String m : menu) {
                StringBuilder sb = new StringBuilder("select * from foodmenu as fm where 1 = 1");
                sb.append(" and fm.food_name = '" + m + "'");
                sb.append(" and 2 = 2 LIMIT 1");
                EntityManager em = entityManagerFactory.getNativeEntityManagerFactory().createEntityManager();
                em.getTransaction().begin();
                Query query = em.createNativeQuery(sb.toString(), FoodMenuInfo.class);
                resList.addAll(query.getResultList());
            }
        } else {
            StringBuilder sb = new StringBuilder("select * from foodmenu as fm where 1 = 1");
            sb.append(" and fm.category = '" + category.get(0) + "'");
            sb.append(" and 2 = 2 LIMIT 1");
            EntityManager em = entityManagerFactory.getNativeEntityManagerFactory().createEntityManager();
            em.getTransaction().begin();
            Query query = em.createNativeQuery(sb.toString(), FoodMenuInfo.class);
            resList.addAll(query.getResultList());
        }
        return resList;
    }

    //是否类问题
    public List<FoodMenuInfo> getFoodTrueFalseResult(Date startDate, Date endDate, List<String> menuList, String brunch,
                                                     List<String> category, Double price) {
        StringBuilder sb = new StringBuilder("select * from foodmenu as fm where 1 = 1");
        if (price > 0) {
            if (menuList.size() > 0) {
                sb.append(" and fm.food_name = '" + menuList.get(0) + "'");
            } else {
                sb.append(" and fm.cagetory = '" + category.get(0) + "'");
            }
        } else {
            if (menuList.size() != 0) {
                sb.append(" and fm.food_name = '" + menuList.get(0) + "'");
            }
            if (!brunch.equals("None")) {
                sb.append(" and fm.brunch = '" + brunch + "'");
            }
            if (!startDate.equals(endDate)) {
                sb.append(" and (fm.date between '" + startDate + "' and '" + endDate + "')");
            } else {
                sb.append(" and fm.date = '" + startDate + "'");
            }
        }
        sb.append(" and 2 = 2");
        EntityManager em = entityManagerFactory.getNativeEntityManagerFactory().createEntityManager();
        em.getTransaction().begin();
        Query query = em.createNativeQuery(sb.toString(), FoodMenuInfo.class);
        return query.getResultList();
    }

    //时间问题
    public List getFoodTimeResult(List<String> menuList) {
        StringBuilder sb = new StringBuilder("select * from foodmenu as fm where 1 = 1");
        if (menuList.size() == 1) {
            sb.append(" and fm.food_name = '" + menuList.get(0) + "'");
        }
        sb.append(" and 2 = 2");
        EntityManager em = entityManagerFactory.getNativeEntityManagerFactory().createEntityManager();
        em.getTransaction().begin();
        Query query = em.createNativeQuery(sb.toString(), FoodMenuInfo.class);
        return query.getResultList();

    }
}
