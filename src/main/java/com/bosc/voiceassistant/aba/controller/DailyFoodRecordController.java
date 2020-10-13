package com.bosc.voiceassistant.aba.controller;

import com.bosc.voiceassistant.aba.service.i.IDailyFoodRecordService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;


/**
 * @author Xu Ran
 * @since 2020/10/12 10:58 上午
 */
@Api
@RestController
public class DailyFoodRecordController {

    @Autowired
    private IDailyFoodRecordService dfrService;


}
