package com.bosc.voiceassistant.aba.service.i;

import com.bosc.voiceassistant.aba.entity.NewsInfo;
import com.bosc.voiceassistant.aba.repository.INewsDao;
import com.bosc.voiceassistant.aba.service.INewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * @author Xu Ran
 * @since 2020/10/11 5:15 下午
 */
@Service
public class NewsServiceImpl implements INewsService {

    @Autowired
    private INewsDao newsDao;

    @Override
    public NewsInfo getNewsByNewsId(Integer newsId) {
        return newsDao.findByNewsId(newsId);
    }

    @Override
    public NewsInfo getNewsByNewsDate(Date newsDate) {
        return newsDao.findByNewsDate(newsDate);
    }

    @Override
    public List<NewsInfo> getNewsListByNewsDate(Date newsDate) {
        return newsDao.findAllByNewsDate(newsDate);
    }

    @Override
    public NewsInfo getNewsByNewsTitle(String newsTitle) {
        return newsDao.findByNewsTitle(newsTitle);
    }

    @Override
    public NewsInfo getNewsByNewsContent(String newsContent) {
        return newsDao.findByNewsContent(newsContent);
    }

    @Override
    public NewsInfo getNewsByNewsCategory(String newsCategory) {
        return newsDao.findByNewsCategory(newsCategory);
    }

    @Override
    public List<NewsInfo> getNewsListByNewsCategory(String newsCategory) {
        return newsDao.findAllByNewsCategory(newsCategory);
    }
}
