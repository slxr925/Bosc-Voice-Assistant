package com.bosc.voiceassistant.aba.entity;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

/**
 * @author Xu Ran
 * @since 2020/10/9 8:48 下午
 */
@Data
@Entity(name = "DailyFoodRecord")
public class DailyFoodRecordInfo {

    @Id
    @GeneratedValue
    private Integer recordId;

    @Column
    private Double dailyCalorie;

    @Column
    private Date date;

    @JoinColumn
    @ManyToOne
    private UserInfo userInfo;

}
