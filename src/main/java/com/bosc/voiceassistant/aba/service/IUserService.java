package com.bosc.voiceassistant.aba.service;

import com.bosc.voiceassistant.aba.entity.UserInfo;

import java.util.List;

/**
 * @author Xu Ran
 * @since 2020/9/1 下午7:31
 */
public interface IUserService {

    /**
     * 通过用户id找用户
     *
     * @param userId
     * @return
     */
    UserInfo getUserById(Integer userId);

    /**
     * 通过邮箱找用户
     *
     * @param email
     * @return
     */
    UserInfo getUserByEmail(String email);

    /**
     * 增加用户
     *
     * @param userInfo
     */
    void addUser(UserInfo userInfo);

    /**
     * 通过用户id删除用户
     *
     * @param userInfo
     */
    void deleteUserByUserId(UserInfo userInfo);

    /**
     * 查询所有用户
     *
     * @return
     */
    List<UserInfo> getAllUsers();
}
