package com.bosc.voiceassistant.aba.dao;

import com.bosc.voiceassistant.aba.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Xu Ran
 * @since 2020/9/1 下午8:57
 */
@Repository
public interface IUserDao extends JpaRepository<UserInfo, Integer> {

    /**
     * 根据用户名找用户
     *
     * @param userName
     * @return
     */
    UserInfo findByUserName(String userName);

//    /**
//     * 根据用户名与邮箱找用户
//     *
//     * @param userName
//     * @param email
//     * @return
//     */
//    UserInfo findByUserNameAndEmail(String userName, String email);

    /**
     * 根据email找用户
     *
     * @param email
     * @return
     */
    UserInfo findByEmail(String email);
    /**
     * 根据用户名找多个用户
     *
     * @param userName
     * @return
     */
    List<UserInfo> findAllByUserName(String userName);

}
