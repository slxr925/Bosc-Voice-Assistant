package com.bosc.voiceassistant.aba.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.server.standard.ServerEndpointExporter;

/**
 * @author Xu Ran
 * @since 2020/8/27 下午3:31
 * 配置websocket并开启
 */
@Configuration
public class WebConfig {
    @Bean
    public ServerEndpointExporter serverEndpointExporter() {
        return new ServerEndpointExporter();
    }
}
