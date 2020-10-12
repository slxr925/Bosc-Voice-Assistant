package com.bosc.voiceassistant.aba.entity;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Xu Ran
 * @since 2020/9/1 下午6:26
 */
@Data
@DynamicUpdate
@DynamicInsert
@Entity(name = "user")
public class UserInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Integer userId;

    @Column(nullable = false, columnDefinition = " varchar(255) default'[]'")
    private String userName;

    @Column(nullable = false)
    private String email;

    @Column
    private String userImg;

    @Column(nullable = false)
    private String password;

    @Column
    //单位kg
    private Double weight;

    @Column
    //单位cm
    private Double height;

    @Column
    //男1 女2
    private Integer sex;

    @Column
    private Integer age;

    @Column
    //单位kg
    private Double targetWeight;

    @Column
    //增重1 减重2 维持体重3
    private Integer phase;

    @OneToMany(mappedBy = "userInfo", fetch = FetchType.EAGER, cascade = {CascadeType.ALL})
    private List<DailyFoodRecordInfo> userDailyFoodRecords = new ArrayList<>();

}
