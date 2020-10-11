package com.bosc.voiceassistant.aba.controller;

import com.bosc.voiceassistant.aba.entity.UserInfo;
import com.bosc.voiceassistant.aba.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Xu Ran
 * @since 2020/9/2 下午8:14
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private IUserService userService;

    @RequestMapping(value = "/getUserByEmail/{email}", method = RequestMethod.GET)
    @ResponseBody
    public UserInfo getUserByEmail(@PathVariable(value = "email") String email) {
        return userService.getUserByEmail(email);
    }

    @RequestMapping(value = "/getUserByUserId/{userId}", method = RequestMethod.GET)
    @ResponseBody
    public UserInfo getUserByUserId(@PathVariable(value = "userId") Integer userId) {
        return userService.getUserById(userId);
    }

    @RequestMapping(value = "/getUserByUserName/{userName}", method = RequestMethod.GET)
    @ResponseBody
    public UserInfo getUserByUserName(@PathVariable(value = "userName") String userName) {
        return userService.getUserByUserName(userName);
    }

    @RequestMapping(value = "/addUser", method = RequestMethod.POST)
    @ResponseBody
    public UserInfo addUser(UserInfo userInfo) {
        return userService.addUser(userInfo);
    }

    @RequestMapping(value = "/updateUser", method = RequestMethod.PUT)
    @ResponseBody
    public UserInfo updateUser(UserInfo userInfo) {
        return userService.updateUser(userInfo);
    }

    @RequestMapping(value = "/deleteUser", method = RequestMethod.DELETE)
    @ResponseBody
    public void deleteUser(UserInfo userInfo) {
        userService.deleteUser(userInfo);
    }

    @RequestMapping(value = "/getAllUsers", method = RequestMethod.GET)
    @ResponseBody
    public List<UserInfo> getAllUsers() {
        return userService.getAllUsers();
    }
}

