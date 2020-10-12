package com.bosc.voiceassistant.aba.controller;

import com.bosc.voiceassistant.aba.entity.NewsInfo;
import com.bosc.voiceassistant.aba.service.i.INewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

/**
 * @author Xu Ran
 * @since 2020/10/11 5:21 下午
 */
@RestController
@RequestMapping("/news")
public class NewsController {

    @Autowired
    private INewsService newsService;

    @RequestMapping(value = "/getNewsByNewsId/{newsId}", method = RequestMethod.GET)
    @ResponseBody
    public NewsInfo getNewsByNewsId(@PathVariable(value = "newsId") Integer newsId) {
        return newsService.getNewsByNewsId(newsId);
    }

    @RequestMapping(value = "/getNewsByNewsTitle/{newsTitle}", method = RequestMethod.GET)
    @ResponseBody
    public NewsInfo getNewsByNewsTitle(@PathVariable(value = "newsTitle") String newsTitle) {
        return newsService.getNewsByNewsTitle(newsTitle);
    }

    @RequestMapping(value = "/getNewsByNewsContent/{newsContent}", method = RequestMethod.GET)
    @ResponseBody
    public NewsInfo getNewsByNewsContent(@PathVariable(value = "newContent") String newsContent) {
        return newsService.getNewsByNewsContent(newsContent);
    }

    @RequestMapping(value = "/getNewsByNewsDate/{newsDate}", method = RequestMethod.GET)
    @ResponseBody
    public NewsInfo getNewsByNewsDate(@PathVariable(value = "newsDate") Date newsDate) {
        return newsService.getNewsByNewsDate(newsDate);
    }

    @RequestMapping(value = "/getNewsListByNewsDate/{newsDate}", method = RequestMethod.GET)
    @ResponseBody
    public List<NewsInfo> getNewsListByNewsDate(@PathVariable(value = "newsDate") Date newsDate) {
        return newsService.getNewsListByNewsDate(newsDate);
    }

    @RequestMapping(value = "/getNewsByNewsCategory/{newsCategory}", method = RequestMethod.GET)
    @ResponseBody
    public NewsInfo getNewsByNewsCategory(@PathVariable(value = "newsCategory") String newsCategory) {
        return newsService.getNewsByNewsCategory(newsCategory);
    }

    @RequestMapping(value = "/getNewsListByNewsCategory/{newsCategory}", method = RequestMethod.GET)
    @ResponseBody
    public List<NewsInfo> getNewsListByNewsCategory(@PathVariable(value = "newsCategory") String newsCategory) {
        return newsService.getNewsListByNewsCategory(newsCategory);
    }

}
