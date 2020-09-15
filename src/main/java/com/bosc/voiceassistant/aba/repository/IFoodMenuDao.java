package com.bosc.voiceassistant.aba.repository;

import com.bosc.voiceassistant.aba.entity.FoodMenuInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

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
     * 通过菜名找多个菜
     *
     * @param foodName
     * @return
     */
    @Query(value = "select * from foodmenu where foodmenu.foodName = ?1", nativeQuery = true)
    List<FoodMenuInfo> findListByFoodName(String foodName);

    /**
     * 通过是否为早午餐找菜
     *
     * @param brunch
     * @return
     */
    FoodMenuInfo findByBrunch(String brunch);

    /**
     * 通过早午餐找多个菜
     *
     * @param brunch
     * @return
     */
    @Query(value = "select * from foodmenu where foodmenu.brunch = ?1", nativeQuery = true)
    List<FoodMenuInfo> findListByBrunch(String brunch);

    /**
     * 通过日期找菜
     *
     * @param date
     * @return
     */
    FoodMenuInfo findByDate(Date date);

    /**
     * 通过日期找多个菜
     *
     * @param date
     * @return
     */
    @Query(value = "select * from foodmenu where foodmenu.date = ?1", nativeQuery = true)
    List<FoodMenuInfo> findListByDate(Date date);

    /**
     * 通过菜类型找菜
     *
     * @param category
     * @return
     */
    FoodMenuInfo findByCategory(String category);

    /**
     * 通过菜类型找多个菜
     *
     * @param category
     * @return
     */
    @Query(value = "select * from foodmenu where category = ?1", nativeQuery = true)
    List<FoodMenuInfo> findListByCategory(String category);

    /**
     * 通过价格找菜
     *
     * @param foodPrice
     * @return
     */
    FoodMenuInfo findByFoodPrice(Double foodPrice);

    /**
     * 通过价格找多个菜
     *
     * @param foodPrice
     * @return
     */
    @Query(value = "select * from foodmenu where food_price = ?1", nativeQuery = true)
    List<FoodMenuInfo> findListByFoodPrice(Double foodPrice);

    /**
     * 找所有的菜
     *
     * @return
     */
    List<FoodMenuInfo> findAll();

    /**
     * 查菜单sql
     */
    @Query(value = "select * from foodmenu where date = ?1 and (brunch = ?2 or food_name = ?3 " +
            "or category = ?4)", nativeQuery = true)
    List<FoodMenuInfo> findListOrderByFoodMenu(Date date, String brunch, String menu, String category);

}
