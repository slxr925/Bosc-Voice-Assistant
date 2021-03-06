package com.bosc.voiceassistant.aba.service.i;

import com.bosc.voiceassistant.aba.entity.FoodMenuInfo;

import java.sql.Date;
import java.util.List;

/**
 * @author Xu Ran
 * @since 2020/9/13 10:44 上午
 */
public interface IFoodMenuService {

    /**
     * 通过foodID找food
     *
     * @param foodId
     * @return
     */
    FoodMenuInfo getFoodByFoodId(Integer foodId);

    /**
     * 通过foodName找food
     *
     * @param foodName
     * @return
     */
    FoodMenuInfo getFoodByFoodName(String foodName);

    /**
     * 通过foodName找多个food
     *
     * @param foodName
     * @return
     */
    List<FoodMenuInfo> getFoodListByFoodName(String foodName);

    /**
     * 通过brunch找food
     *
     * @param brunch
     * @return
     */
    FoodMenuInfo getFoodByBrunch(String brunch);

    /**
     * 通过brunch找多个food
     *
     * @param brunch
     * @return
     */
    List<FoodMenuInfo> getFoodListByBrunch(String brunch);


    /**
     * 通过date找多个food
     *
     * @param date
     * @return
     */
    List<FoodMenuInfo> getFoodListByDate(Date date);

    /**
     * 通过价格找food
     *
     * @param foodPrice
     * @return
     */
    FoodMenuInfo getFoodByFoodPrice(Double foodPrice);

    /**
     * 通过价格找多个food
     *
     * @param foodPrice
     * @return
     */
    List<FoodMenuInfo> getFoodListByFoodPrice(Double foodPrice);

    /**
     * 通过类别找food
     *
     * @param category
     * @return
     */
    FoodMenuInfo getFoodByCategory(String category);

    /**
     * 通过类别找多个food
     *
     * @param category
     * @return
     */
    List<FoodMenuInfo> getFoodListByCategory(String category);

    /**
     * 找所有的food记录
     *
     * @return
     */
    List<FoodMenuInfo> getAllFoods();

}
