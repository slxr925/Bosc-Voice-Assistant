package com.bosc.voiceassistant.aba.repository;

import com.bosc.voiceassistant.aba.entity.NewsInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

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
     * @param newsInfo
     * @return
     */
    NewsInfo findByNewsId(NewsInfo newsInfo);

    /**
     * 根据题目找新闻
     *
     * @param newsInfo
     * @return
     */
    NewsInfo findByNewsTitle(NewsInfo newsInfo);

    /**
     * 根据内容找新闻
     *
     * @param newsInfo
     * @return
     */
    NewsInfo findByNewsContent(NewsInfo newsInfo);

    /**
     * 
     *
     * @param newsInfo
     * @return
     */
    NewsInfo findByNewsDate(NewsInfo newsInfo);

    NewsInfo findByNewsCategory(NewsInfo newsInfo);

    List<NewsInfo>
}
