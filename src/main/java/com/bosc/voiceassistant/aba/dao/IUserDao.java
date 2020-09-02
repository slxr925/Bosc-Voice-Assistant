package com.bosc.voiceassistant.aba.dao;

import com.bosc.voiceassistant.aba.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * @author Xu Ran
 * @since 2020/9/1 下午8:57
 */
@Repository
public interface IUserDao extends JpaRepository<UserInfo, Long> {

    /**
     * 根据用户名找用户
     *
     * @param userName
     * @return
     */
    UserInfo findByUserName(String userName);

    /**
     * 根据用户名与邮箱找用户
     *
     * @param userName
     * @param email
     * @return
     */
    UserInfo findByUserNameAndEmail(String userName, String email);

    /**
     * 通过用户名找用户
     *
     * @param userName
     * @return
     */
    @Query("from User u where u.userName = : name")
    UserInfo findUser(@Param("userName") String userName);



}
