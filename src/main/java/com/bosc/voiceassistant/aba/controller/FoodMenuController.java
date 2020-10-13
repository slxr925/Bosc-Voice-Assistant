package com.bosc.voiceassistant.aba.controller;

import com.bosc.voiceassistant.aba.service.i.IFoodMenuService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

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


}
