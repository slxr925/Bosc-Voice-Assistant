package com.bosc.voiceassistant.aba.repository;

import com.bosc.voiceassistant.aba.entity.DailyFoodRecordInfo;
import com.bosc.voiceassistant.aba.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

/**
 * @author Xu Ran
 * @since 2020/10/12 10:31 上午
 */
@Repository
public interface IDailyFoodRecordDao extends JpaRepository<DailyFoodRecordInfo, Integer> {

    /**
     * 根据id找
     *
     * @param recordId
     * @return
     */
    DailyFoodRecordInfo findByRecordId(Integer recordId);

    /**
     * 根据卡路里找
     *
     * @param dailyCalorie
     * @return
     */
    DailyFoodRecordInfo findByDailyCalorie(Double dailyCalorie);

    /**
     * 根据日期查
     *
     * @param date
     * @return
     */
    DailyFoodRecordInfo findByDate(Date date);

    /**
     * 根据日期查多个
     * @param date
     * @return
     */
    List<DailyFoodRecordInfo> findAllByDate(Date date);

    /**
     * 根据user查
     *
     * @param userInfo
     * @return
     */
    DailyFoodRecordInfo findByUserInfo(UserInfo userInfo);
}
