package com.bosc.voiceassistant.aba.entity;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Date;

/**
 * @author Xu Ran
 * @since 2020/9/11 2:41 下午
 */
@Data
@DynamicUpdate
@DynamicInsert
@Entity(name = "foodmenu")
public class FoodMenuInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer foodId;

    @Column(nullable = false)
    private Date date;

    @Column(nullable = false)
    private String brunch;

    @Column(nullable = false)
    private String foodName;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private Double foodPrice;

    @Column
    private String foodImg;

    @Column(nullable = false)
    private Double avgMark;

    @Column(nullable = false)
    private Double calorie;
}
