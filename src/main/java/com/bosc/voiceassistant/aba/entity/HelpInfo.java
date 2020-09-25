package com.bosc.voiceassistant.aba.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * @author Xu Ran
 * @since 2020/9/24 6:09 下午
 */
@Data
@Entity(name = "help")
public class HelpInfo {

    @Id
    @GeneratedValue
    private Integer helpId;

    @Column(nullable = false)
    private String fbInfo;

    @Column(nullable = false)
    private String question;

    @Column(nullable = false)
    private String answer;


}
