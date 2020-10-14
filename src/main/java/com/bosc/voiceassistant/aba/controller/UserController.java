package com.bosc.voiceassistant.aba.controller;

import com.bosc.voiceassistant.aba.entity.Result;
import com.bosc.voiceassistant.aba.entity.UserInfo;
import com.bosc.voiceassistant.aba.service.i.IUserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Xu Ran
 * @since 2020/9/2 下午8:14
 */
@Api
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private IUserService userService;

    @RequestMapping(value = "/getUserByEmail/{email}", method = RequestMethod.GET)
    public UserInfo getUserByEmail(@PathVariable(value = "email") String email) {
        return userService.getUserByEmail(email);
    }

    @RequestMapping(path = "/getUserByUserId/{userId}", method = RequestMethod.GET)
    @ApiOperation("/根据id找用户")
    //@ApiImplicitParam(name = "userId",value = "userId",required = true,paramType = "path",dataType = "int")
    public UserInfo getUserByUserId(@PathVariable(value = "userId") Integer userId) {
        return userService.getUserById(userId);
    }

    @RequestMapping(value = "/getUserByUserName/{userName}", method = RequestMethod.GET)
    public UserInfo getUserByUserName(@PathVariable(value = "userName") String userName) {
        return userService.getUserByUserName(userName);
    }

    @RequestMapping(value = "/addUser", method = RequestMethod.POST)
    public Result addUser(UserInfo userInfo) {
        if (userService.addUser(userInfo) == null) {
            return new Result("400", "该用户已存在！");
        }
        return new Result(userService.addUser(userInfo));
    }

    @RequestMapping(value = "/updateUser", method = RequestMethod.PUT)
    public UserInfo updateUser(UserInfo userInfo) {
        return userService.updateUser(userInfo);
    }

    @RequestMapping(value = "/deleteUser", method = RequestMethod.DELETE)
    public void deleteUser(UserInfo userInfo) {
        userService.deleteUser(userInfo);
    }

    @RequestMapping(value = "/getAllUsers", method = RequestMethod.GET)
    public List<UserInfo> getAllUsers() {
        return userService.getAllUsers();
    }

    @RequestMapping(value = "/login/{email}/{password}", method = RequestMethod.POST)
    public Result loginUser(@PathVariable String email, @PathVariable String password) {
        if (userService.login(email, password).equals("notexist")) return new Result("400", "用户不存在！");
        else if (userService.login(email, password).equals("wrong")) return new Result("400", "密码错误！");
        else return new Result(userService.getUserByEmail(email), "用户名密码正确！");
    }
}
