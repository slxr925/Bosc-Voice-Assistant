package com.bosc.voiceassistant.aba.service.impl;

import com.bosc.voiceassistant.aba.entity.FoodMenuInfo;
import com.bosc.voiceassistant.aba.repository.IFoodMenuDao;
import com.bosc.voiceassistant.aba.service.i.IFoodMenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * @author Xu Ran
 * @since 2020/9/13 11:12 上午
 */
@Service
public class FoodMenuServiceImpl implements IFoodMenuService {

    @Autowired
    private IFoodMenuDao foodMenuDao;

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
        return foodMenuDao.findAllByFoodName(foodName);
    }

    @Override
    public FoodMenuInfo getFoodByBrunch(String brunch) {
        return foodMenuDao.findByBrunch(brunch);
    }

    @Override
    public List<FoodMenuInfo> getFoodListByBrunch(String brunch) {
        return foodMenuDao.findAllByBrunch(brunch);
    }

    @Override
    public FoodMenuInfo getFoodByDate(Date date) {
        return foodMenuDao.findByDate(date);
    }

    @Override
    public List<FoodMenuInfo> getFoodListByDate(Date date) {
        return foodMenuDao.findAllByDate(date);
    }

    @Override
    public FoodMenuInfo getFoodByFoodPrice(Double foodPrice) {
        return foodMenuDao.findByFoodPrice(foodPrice);
    }

    @Override
    public List<FoodMenuInfo> getFoodListByFoodPrice(Double foodPrice) {
        return foodMenuDao.findAllByFoodPrice(foodPrice);
    }

    @Override
    public FoodMenuInfo getFoodByCategory(String category) {
        return foodMenuDao.findByCategory(category);
    }

    @Override
    public List<FoodMenuInfo> getFoodListByCategory(String category) {
        return foodMenuDao.findAllByCategory(category);
    }

    @Override
    public List<FoodMenuInfo> getAllFoods() {
        return foodMenuDao.findAll();
    }
}
