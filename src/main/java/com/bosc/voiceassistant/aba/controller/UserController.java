package com.bosc.voiceassistant.aba.controller;

import com.bosc.voiceassistant.aba.entity.UserInfo;
import com.bosc.voiceassistant.aba.service.i.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
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

    @RequestMapping(value = "/getUserByEmail/{email}", method = RequestMethod.GET)
    @ResponseBody
    public UserInfo getUserByEmail(@RequestParam(value = "email") String email) {
        return userService.getUserByEmail(email);
    }

    @RequestMapping(value = "/getUserByUserId/{userId}", method = RequestMethod.GET)
    @ResponseBody
    public UserInfo getUserByUserId(@RequestParam(value = "userId") Integer userId) {
        return userService.getUserById(userId);
    }

    @RequestMapping(value = "/getUserByUserName/{userName}", method = RequestMethod.GET)
    @ResponseBody
    public UserInfo getUserByUserName(@RequestParam(value = "userName") String userName) {
        return userService.getUserByUserName(userName);
    }

    @RequestMapping(value = "/getAllUsers", method = RequestMethod.GET)
    @ResponseBody
    public List<UserInfo> getAllUsers() {
        return userService.getAllUsers();
    }

    @RequestMapping(value = "/addUser", method = RequestMethod.PUT)
    @ResponseBody
    public void addUser() {

    }
}

