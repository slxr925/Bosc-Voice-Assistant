package com.bosc.voiceassistant.aba.entity.user;

import lombok.Data;

import javax.persistence.*;

/**
 * @author Xu Ran
 * @since 2020/9/1 下午6:26
 */
@Data
@Entity(name = "User")
public class UserInfo {

    @Id
    @GeneratedValue
    private Integer userId;

    @Column(nullable = false)
    private String userName;

    @Column(nullable = false)
    private String email;

    @Column
    private String userImg;

    @Column(nullable = false)
    private String password;
}