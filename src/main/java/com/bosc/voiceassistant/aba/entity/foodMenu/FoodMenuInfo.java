package com.bosc.voiceassistant.aba.entity.foodMenu;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

/**
 * @author Xu Ran
 * @since 2020/9/11 2:41 下午
 */
@Data
@Entity(name = "foodmenu")
public class FoodMenuInfo {

    @Id
    @GeneratedValue
    private Integer foodId;

    @Column(nullable = false)
    private Date date;

    @Column(nullable = false)
    private String brunch;

    @Column(nullable = false)
    private String foodName;

    @Column(nullable = false)
    private String dish;

    @Column(nullable = false)
    private Double foodPrice;

    @Column
    private String foodImg;
}
