package com.bosc.voiceassistant.aba.entity;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Date;

/**
 * @author Xu Ran
 * @since 2020/9/23 7:49 下午
 */
@Data
@DynamicUpdate
@DynamicInsert
@Entity(name = "log")
public class LogInfo {

    @Id
    @GeneratedValue
    private Integer logId;

    @Column
    private Integer userId;

    @Column
    private String question;

//    @ManyToOne
//    @JoinColumn(name = "uid")
//    private UserInfo userInfo;
}
