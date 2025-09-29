package com.geass.user.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * JwtProperties
 * -------------------------
 * 用于绑定 application.yml 中的 jwt 配置项。
 *
 * application.yml 示例:
 * jwt:
 *   secret: "asfsadgdrgfewrgdgsdfgtesrtgf"
 *   expiration: 7   # Token 有效期，单位：天
 */
@Data
@Component
@ConfigurationProperties(prefix = "jwt")
public class JwtProperties {

    /** JWT 签名秘钥（必须 >= 32 位，建议通过环境变量管理） */
    private String secret;

    /** JWT 过期时间（单位：天），例：7 = 7 天 */
    private long expiration;

    /**
     * 获取过期时间（毫秒）
     * @return 过期时间 (ms)
     */
    public long getExpirationInMillis() {
        return expiration * 24 * 60 * 60 * 1000;
    }
}
