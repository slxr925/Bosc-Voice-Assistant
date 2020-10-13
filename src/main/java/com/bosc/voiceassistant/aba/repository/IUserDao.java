package com.bosc.voiceassistant.aba.repository;

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
     * 根据用户id找用户
     *
     * @param userId
     * @return
     */
    UserInfo findByUserId(Integer userId);

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
     * 根据email找用户
     *
     * @param email
     * @return
     */
    UserInfo findByEmail(String email);

    /**
     * 查询所有用户
     *
     * @return
     */
    List<UserInfo> findAll();

    /**
     * 根据用户名找多个用户
     *
     * @param userName
     * @return
     */
    List<UserInfo> findAllByUserName(String userName);

    UserInfo findByAge(Integer age);

    UserInfo findByHeight(Double height);

    UserInfo findByWeight(Double weight);

    UserInfo findBySex(Integer sex);

    List<UserInfo> findAllBySex(Integer sex);

    UserInfo findByTargetWeight(Double targetWeight);

    @Modifying
    @Query("update user set age = :age where userId = :userId")
    void updateAgeByUserId(@Param("age") Integer age, @Param("userId") Integer userId);

    @Modifying
    @Query("update user set height = :height where userId = :userId")
    void updateHeightByUserId(@Param("height") Double height, @Param("userId") Integer userId);

    @Modifying
    @Query("update user set weight = :weight where userId = :userId")
    void updateWeightByUserId(@Param("weight") Double weight, @Param("userId") Integer userId);

    @Modifying
    @Query("update user set targetWeight = :targetWeight where userId = :userId")
    void updateTargetByUserId(@Param("targetWeight") Double targetWeight, @Param("userId") Integer userId);


}
