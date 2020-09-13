package com.bosc.voiceassistant.aba.service;

import com.bosc.voiceassistant.aba.entity.FoodMenuInfo;
import com.bosc.voiceassistant.aba.repository.IFoodMenuDao;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;
import java.util.List;

/**
 * @author Xu Ran
 * @since 2020/9/13 10:44 上午
 */
public interface IDiningService {

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
     * 通过date找food
     * @param date
     * @return
     */
    FoodMenuInfo getFoodByDate(Date date);

    /**
     * 通过date找多个food
     *
     * @param date
     * @return
     */
    List<FoodMenuInfo> getFoodListByDate(Date date);

    /**
     * 通过价格找food
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

    FoodMenuInfo getFoodByCategory(String Category);

    List<FoodMenuInfo> getFoodListByCategory(String Category);


    /**
     * 找所有的food记录
     *
     * @return
     */
    List<FoodMenuInfo> getAllFoods();


}
