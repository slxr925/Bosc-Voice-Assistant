package com.bosc.voiceassistant.aba.controller.user;

import com.bosc.voiceassistant.aba.entity.user.UserInfo;
import com.bosc.voiceassistant.aba.service.user.i.UserServiceImpl;
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

    @RequestMapping(value = "/", method = RequestMethod.POST)
    @ResponseBody
    public UserInfo addUser(UserInfo userInfo) {
        return userService.addUser(userInfo);
    }

    @RequestMapping(value = "/", method = RequestMethod.PUT)
    @ResponseBody
    public UserInfo updateUser(UserInfo userInfo) {
        return userService.updateUser(userInfo);
    }
    @RequestMapping(value = "/", method = RequestMethod.DELETE)
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

