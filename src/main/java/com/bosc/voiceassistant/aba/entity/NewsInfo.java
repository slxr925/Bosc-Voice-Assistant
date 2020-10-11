package com.bosc.voiceassistant.aba.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

/**
 * @author Xu Ran
 * @since 2020/10/10 4:00 下午
 */
@Data
@Entity(name = "news")
public class NewsInfo {

    @Id
    @GeneratedValue
    private Integer newsId;

    @Column
    private String newsContent;

    @Column
    private String newsTitle;

    @Column
    private Date newsDate;

    @Column
    private String newsCategory;
}
