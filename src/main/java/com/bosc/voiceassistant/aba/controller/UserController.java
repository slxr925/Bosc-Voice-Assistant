package com.bosc.voiceassistant.aba.controller;

import com.bosc.voiceassistant.aba.entity.UserInfo;
import com.bosc.voiceassistant.aba.service.i.UserServiceImpl;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.*;

/**
 * @author Xu Ran
 * @since 2020/9/2 下午8:14
 */
@RestController
@RequestMapping("/user")
@EnableAutoConfiguration
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @RequestMapping(value = "/getUserByEmail", method = RequestMethod.GET)
    @ResponseBody
    public UserInfo getUserByEmail(@RequestParam(value = "email") String email) {
        return userService.getUserByEmail(email);
    }

    @RequestMapping("/get")
    @ResponseBody
    public Integer get() {
        String email = "xuran@bosc.cn";
        UserInfo user = userService.getUserByEmail(email);
        return user.getUserId();
    }
}
