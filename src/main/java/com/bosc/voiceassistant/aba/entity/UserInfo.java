package com.bosc.voiceassistant.aba.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

/**
 * @author Xu Ran
 * @since 2020/9/1 下午6:26
 */
@Data
@Entity(name = "user")
public class UserInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    @Column(nullable = false)
    private String userName;

    @Column(nullable = false)
    private String email;

    @Column
    private String userImg;

    @Column(nullable = false)
    private String password;

    @OneToMany(mappedBy = "logInfo")
    private List<LogInfo> logInfoList;
}
