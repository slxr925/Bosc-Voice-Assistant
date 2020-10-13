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

    UserInfo getUserByAge(Integer age);

    UserInfo getUserByHeight(Double height);

    UserInfo getUserByWeight(Double weight);

    UserInfo getUserBySex(Integer sex);

    List<UserInfo> getUserListBySex(Integer sex);

}
