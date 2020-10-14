package com.bosc.voiceassistant.aba.repository;

import com.bosc.voiceassistant.aba.entity.FoodMenuInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import java.sql.Date;
import java.util.List;

/**
 * @author Xu Ran
 * @since 2020/9/11 9:56 上午
 */
@Repository
public interface IFoodMenuDao extends JpaRepository<FoodMenuInfo, Integer>, JpaSpecificationExecutor<FoodMenuInfo> {

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
    //@Query(value = "select * from foodmenu where foodmenu.food_name = ?1", nativeQuery = true)
    List<FoodMenuInfo> findAllByFoodName(String foodName);

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
    List<FoodMenuInfo> findAllByBrunch(String brunch);

    /**
     * 通过菜类型找菜
     *
     * @param category
     * @return
     */
    FoodMenuInfo findByCategory(String category);

    List<FoodMenuInfo> findAllByDate(Date date);

    /**
     * 通过菜类型找多个菜
     *
     * @param category
     * @return
     */
    List<FoodMenuInfo> findAllByCategory(String category);

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

    List<FoodMenuInfo> findAllByFoodPrice(Double foodPrice);

    /**
     * 找所有的菜
     *
     * @return
     */
    List<FoodMenuInfo> findAll();


}
