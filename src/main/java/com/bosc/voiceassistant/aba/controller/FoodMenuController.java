package com.bosc.voiceassistant.aba.controller;

import com.bosc.voiceassistant.aba.entity.FoodMenuInfo;
import com.bosc.voiceassistant.aba.entity.Result;
import com.bosc.voiceassistant.aba.entity.UserInfo;
import com.bosc.voiceassistant.aba.service.i.IFoodMenuService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

/**
 * @author Xu Ran
 * @since 2020/10/13 2:56 下午
 */
@Api
@RestController
@RequestMapping("/foodmenu")
public class FoodMenuController {

    @Autowired
    private IFoodMenuService fmService;

    @RequestMapping(value = "/getFoodByFoodId/{foodId}", method = RequestMethod.GET)
    public Result<FoodMenuInfo> getFoodByFoodId(@PathVariable(value = "foodId") Integer foodId) {
        return new Result<>(fmService.getFoodByFoodId(foodId));
    }

    @RequestMapping(value = "/getFoodByFoodName/{foodName}", method = RequestMethod.GET)
    public Result<FoodMenuInfo> getFoodByFoodName(@PathVariable(value = "foodName") String foodName) {
        return new Result<>(fmService.getFoodByFoodName(foodName));
    }

    @RequestMapping(value = "/getFoodListByFoodName/{foodName}", method = RequestMethod.GET)
    public Result<List> getFoodListByFoodName(@PathVariable(value = "foodName") String foodName) {
        return new Result<>(fmService.getFoodListByFoodName(foodName));
    }

    @RequestMapping(value = "/getFoodByBrunch/{brunch}", method = RequestMethod.GET)
    public Result<FoodMenuInfo> getFoodByBrunch(@PathVariable(value = "brunch") String brunch) {
        return new Result<>(fmService.getFoodByBrunch(brunch));
    }

    @RequestMapping(value = "/getFoodListByBrunch/{brunch}", method = RequestMethod.GET)
    public Result<List> getFoodListByBrunch(@PathVariable(value = "brunch") String brunch) {
        return new Result<>(fmService.getFoodListByBrunch(brunch));
    }

    @RequestMapping(value = "/getFoodListByDate/{date}", method = RequestMethod.GET)
    public Result<List> getFoodListByDate(@PathVariable(value = "date") Date date) {
        return new Result<>(fmService.getFoodListByDate(date));
    }

    @RequestMapping(value = "/getFoodByFoodPrice/{foodPrice}", method = RequestMethod.GET)
    public FoodMenuInfo getFoodByFoodPrice(@PathVariable(value = "foodPrice") Double foodPrice) {
        return fmService.getFoodByFoodPrice(foodPrice);
    }

    @RequestMapping(value = "/getFoodListByFoodPrice/{foodPrice}", method = RequestMethod.GET)
    public List<FoodMenuInfo> getFoodListByFoodPrice(@PathVariable(value = "foodPrice") Double foodPrice) {
        return fmService.getFoodListByFoodPrice(foodPrice);
    }

    @RequestMapping(value = "/getFoodByCategory/{category}", method = RequestMethod.GET)
    public FoodMenuInfo getFoodByCategory(@PathVariable(value = "category") String category) {
        return fmService.getFoodByCategory(category);
    }

    @RequestMapping(value = "/getFoodListByCategory/{category}", method = RequestMethod.GET)
    public List<FoodMenuInfo> getFoodListByCategory(@PathVariable(value = "category") String category) {
        return fmService.getFoodListByCategory(category);
    }

    @RequestMapping(value = "/getAllFoods", method = RequestMethod.GET)
    public List<FoodMenuInfo> getAllFoods() {
        return fmService.getAllFoods();
    }

}
