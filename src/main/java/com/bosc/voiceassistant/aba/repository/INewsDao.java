package com.bosc.voiceassistant.aba.repository;

import com.bosc.voiceassistant.aba.entity.NewsInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

/**
 * @author Xu Ran
 * @since 2020/10/11 2:30 下午
 */
@Repository
public interface INewsDao extends JpaRepository<NewsInfo, Integer> {

    /**
     * 根据newsid找新闻
     *
     * @param newsId
     * @return
     */
    NewsInfo findByNewsId(Integer newsId);

    /**
     * 根据题目找新闻
     *
     * @param newsTitle
     * @return
     */
    NewsInfo findByNewsTitle(String newsTitle);

    /**
     * 根据内容找新闻 （不会真有人用这个接口吧
     *
     * @param newsContent
     * @return
     */
    NewsInfo findByNewsContent(String newsContent);

    /**
     * 根据日期查新闻
     *
     * @param newsDate
     * @return
     */
    NewsInfo findByNewsDate(Date newsDate);

    /**
     * 根据日期查多个新闻
     *
     * @param newsDate
     * @return
     */
    List<NewsInfo> findAllByNewsDate(Date newsDate);

    /**
     * 根据类别查新闻
     *
     * @param newsCategory
     * @return
     */
    NewsInfo findByNewsCategory(String newsCategory);

    /**
     *根据类别找多个新闻
     *
     * @param newsCategory
     * @return
     */
    List<NewsInfo> findAllByNewsCategory(String newsCategory);
}
