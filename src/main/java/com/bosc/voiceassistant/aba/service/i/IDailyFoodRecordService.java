package com.bosc.voiceassistant.aba.service.i;

import com.bosc.voiceassistant.aba.entity.DailyFoodRecordInfo;
import com.bosc.voiceassistant.aba.entity.UserInfo;

import java.util.Date;
import java.util.List;

/**
 * @author Xu Ran
 * @since 2020/10/12 10:49 上午
 */
public interface IDailyFoodRecordService {

    /**
     *
     * @param recordId
     * @return
     */
    DailyFoodRecordInfo getRecordByRecordId(Integer recordId);

    /**
     *
     * @param date
     * @return
     */
    DailyFoodRecordInfo getRecordByDate(Date date);

    /**
     *
     * @param date
     * @return
     */
    List<DailyFoodRecordInfo> getRecordListByDate(Date date);

    /**
     *
     * @param userInfo
     * @return
     */
    DailyFoodRecordInfo getRecordByUserInfo(UserInfo userInfo);

    /**
     *
     * @param calorie
     * @return
     */
    DailyFoodRecordInfo getRecordByCalorie(Double calorie);

    Double addCalorieRecord(Double calorie);

    Double deleteCalorie(Double calorie);

}
