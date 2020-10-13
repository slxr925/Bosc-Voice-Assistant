package com.bosc.voiceassistant.aba.service.impl;

import com.bosc.voiceassistant.aba.entity.DailyFoodRecordInfo;
import com.bosc.voiceassistant.aba.entity.UserInfo;
import com.bosc.voiceassistant.aba.repository.IDailyFoodRecordDao;
import com.bosc.voiceassistant.aba.service.i.IDailyFoodRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.Date;
import java.util.List;

/**
 * @author Xu Ran
 * @since 2020/10/12 10:56 上午
 */
@Service
public class DailyFoodRecordServiceImpl implements IDailyFoodRecordService {

    @Autowired
    private IDailyFoodRecordDao dfrDao;

    @Autowired
    private LocalContainerEntityManagerFactoryBean entityManagerFactory;

    @Override
    public DailyFoodRecordInfo getRecordByRecordId(Integer recordId) {
        return dfrDao.findByRecordId(recordId);
    }

    @Override
    public DailyFoodRecordInfo getRecordByDate(Date date) {
        return dfrDao.findByDate(date);
    }

    @Override
    public List<DailyFoodRecordInfo> getRecordListByDate(Date date) {
        return dfrDao.findAllByDate(date);
    }

    @Override
    public DailyFoodRecordInfo getRecordByUserInfo(UserInfo userInfo) {
        return dfrDao.findByUserInfo(userInfo);
    }

    @Override
    public DailyFoodRecordInfo getRecordByCalorie(Double calorie) {
        return dfrDao.findByDailyCalorie(calorie);
    }

    @Override
    public DailyFoodRecordInfo addRecord(DailyFoodRecordInfo dailyFoodRecordInfo) {
        return dfrDao.save(dailyFoodRecordInfo);
    }

    @Override
    public void deleteRecord(DailyFoodRecordInfo dailyFoodRecordInfo) {
        dfrDao.delete(dailyFoodRecordInfo);
    }

}
