package com.bosc.voiceassistant.aba.service.i;

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
     * 通过姓名找用户
     *
     * @param userName
     * @return
     */
    UserInfo getUserByUserName(String userName);

    /**
     * 添加用户
     *
     * @param userInfo
     * @return
     */
    UserInfo addUser(UserInfo userInfo);

    /**
     * 修改用户
     *
     * @param userInfo
     */
    UserInfo updateUser(UserInfo userInfo);

    /**
     * 删除用户
     *
     * @param userInfo
     */
    void deleteUser(UserInfo userInfo);

    /**
     * 查询所有用户
     *
     * @return
     */
    List<UserInfo> getAllUsers();

    /**
     *
     * @param age
     * @return
     */
    UserInfo getUserByAge(Integer age);

    /**
     *
     * @param height
     * @return
     */
    UserInfo getUserByHeight(Double height);

    /**
     *
     * @param weight
     * @return
     */
    UserInfo getUserByWeight(Double weight);

    /**
     *
     * @param sex
     * @return
     */
    UserInfo getUserBySex(Integer sex);

    /**
     *
     * @param sex
     * @return
     */
    List<UserInfo> getUserListBySex(Integer sex);

    /**
     *
     * @param email
     * @param password
     * @return
     */
    String login(String email, String password);

}
