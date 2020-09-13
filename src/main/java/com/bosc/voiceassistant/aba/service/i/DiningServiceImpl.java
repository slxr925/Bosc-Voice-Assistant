package com.bosc.voiceassistant.aba.service.i;

import com.bosc.voiceassistant.aba.entity.FoodMenuInfo;
import com.bosc.voiceassistant.aba.repository.IFoodMenuDao;
import com.bosc.voiceassistant.aba.service.IDiningService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;
import java.util.LinkedList;
import java.util.List;

/**
 * @author Xu Ran
 * @since 2020/9/13 11:12 上午
 */
public class DiningServiceImpl implements IDiningService {

    @Autowired
    IFoodMenuDao foodMenuDao;

    @Override
    public FoodMenuInfo getFoodByFoodId(Integer foodId) {
        return foodMenuDao.findByFoodId(foodId);
    }

    @Override
    public FoodMenuInfo getFoodByFoodName(String foodName) {
        return foodMenuDao.findByFoodName(foodName);
    }

    @Override
    public List<FoodMenuInfo> getFoodListByFoodName(String foodName) {
        return foodMenuDao.findListByFoodName(foodName);
    }

    @Override
    public FoodMenuInfo getFoodByBrunch(String brunch) {
        return null;
    }

    @Override
    public List<FoodMenuInfo> getFoodListByBrunch(String brunch) {
        return null;
    }

    @Override
    public FoodMenuInfo getFoodByDate(Date date) {
        return null;
    }

    @Override
    public List<FoodMenuInfo> getFoodListByDate(Date date) {
        return null;
    }

    @Override
    public List<FoodMenuInfo> getAllFoods() {
        return null;
    }
}
