package com.bosc.voiceassistant.aba.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

/**
 * @author Xu Ran
 * @since 2020/9/23 7:49 下午
 */
@Data
@Entity(name = "logs")
public class LogInfo {

    @Id
    @GeneratedValue
    private Integer logId;

    @Column
    private Integer userId;

    @Column
    private String question;

    @ManyToOne
    @JoinColumn(name = "uid")
    private UserInfo userInfo;
}
