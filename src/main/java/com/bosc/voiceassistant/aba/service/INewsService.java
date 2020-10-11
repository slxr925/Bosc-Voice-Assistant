package com.bosc.voiceassistant.aba.service;

import com.bosc.voiceassistant.aba.entity.NewsInfo;

import java.util.Date;
import java.util.List;

/**
 * @author Xu Ran
 * @since 2020/10/11 4:26 下午
 */
public interface INewsService {

    /**
     *
     * @param newsId
     * @return
     */
    NewsInfo getNewsByNewsId(Integer newsId);

    /**
     *
     * @param newsDate
     * @return
     */
    NewsInfo getNewsByNewsDate(Date newsDate);

    /**
     *
     * @param newsDate
     * @return
     */
    List<NewsInfo> getNewsListByNewsDate(Date newsDate);

    /**
     *
     * @param newsTitle
     * @return
     */
    NewsInfo getNewsByNewsTitle(String newsTitle);

    /**
     *
     * @param newsContent
     * @return
     */
    NewsInfo getNewsByNewsContent(String newsContent);

    /**
     *
     * @param newsCategory
     * @return
     */
    NewsInfo getNewsByNewsCategory(String newsCategory);

    /**
     *
     * @param newsCategory
     * @return
     */
    List<NewsInfo> getNewsListByNewsCategory(String newsCategory);

}
