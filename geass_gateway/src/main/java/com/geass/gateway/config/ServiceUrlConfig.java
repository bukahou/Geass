package com.geass.gateway.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
@ConfigurationProperties(prefix = "services")
public class ServiceUrlConfig {
    private String user;
    private String media;
    private String favorites;
    private String history;

    // 拼接 User 服务完整地址
    public String user(String path) {
        return user + path;
    }

    // 拼接 Media 服务完整地址
    public String media(String path) {
        return media + path;
    }

    // 拼接 Favorites 服务完整地址
    public String favorites(String path) {
        return favorites + path;
    }

    // 拼接 History 服务完整地址
    public String history(String path) {
        return history + path;
    }
}
