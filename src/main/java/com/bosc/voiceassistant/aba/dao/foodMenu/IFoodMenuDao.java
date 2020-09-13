package com.bosc.voiceassistant.aba.dao.foodMenu;

import com.bosc.voiceassistant.aba.entity.foodMenu.FoodMenuInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;

/**
 * @author Xu Ran
 * @since 2020/9/11 9:56 上午
 */
@Repository
public interface IFoodMenuDao extends JpaRepository<FoodMenuInfo, Integer> {

    /**
     * 通过foodId查菜
     *
     * @param foodId
     * @return
     */
    FoodMenuInfo findByFoodId(Integer foodId);

    /**
     * 通过菜名找菜
     *
     * @param foodName
     * @return
     */
    FoodMenuInfo findByFoodName(String foodName);

    /**
     * 通过是否为早午餐找菜
     *
     * @param brunch
     * @return
     */
    FoodMenuInfo findByBrunch(String brunch);

    /**
     * 通过日期找菜
     *
     * @param date
     * @return
     */
    FoodMenuInfo findByDate(Date date);

    /**
     * 通过菜类型找菜
     *
     * @param Dish
     * @return
     */
    FoodMenuInfo findByDish(String Dish);

    /**
     * 通过价格找菜
     *
     * @param foodPrice
     * @return
     */
    FoodMenuInfo findByFoodPrice(Double foodPrice);
}
