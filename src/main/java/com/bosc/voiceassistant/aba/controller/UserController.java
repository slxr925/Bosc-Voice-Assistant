package com.bosc.voiceassistant.aba.controller;

import com.bosc.voiceassistant.aba.entity.UserInfo;
import com.bosc.voiceassistant.aba.service.i.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * @author Xu Ran
 * @since 2020/9/2 下午8:14
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @RequestMapping(value = "/getUserByEmail", method = RequestMethod.GET)
    @ResponseBody
    public Integer getUserByEmail(@RequestParam(value = "email") String email) {
        return userService.getUserByEmail("xuran@bosc.cn").getUserId();
    }

//    @RequestMapping(value = "/getUserByUserId", method =  = RequestMethod.GET)
//    @ResponseBody
//    public UserInfo getUserByUserId(@RequestParam(value = ""))
}

