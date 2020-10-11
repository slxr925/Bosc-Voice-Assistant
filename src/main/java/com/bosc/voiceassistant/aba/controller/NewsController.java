package com.bosc.voiceassistant.aba.controller;

import com.bosc.voiceassistant.aba.service.INewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Xu Ran
 * @since 2020/10/11 5:21 下午
 */
@RestController
@RequestMapping("/news")
public class NewsController {

    @Autowired
    private INewsService newsService;

    //@RequestMapping(value = "/get")
}
