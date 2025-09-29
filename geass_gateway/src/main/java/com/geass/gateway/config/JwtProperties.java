package com.geass.gateway.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * JwtProperties
 * --------------------------------
 * 用于绑定 application.yml 中的 jwt 配置项。
 *
 * 作用：
 * - 统一管理 JWT 的秘钥与过期时间配置。
 * - 提供毫秒级别的过期时间计算方法。
 *
 * yml 配置示例：
 * jwt:
 *   secret: "ttttttttttttttttttttttttt"
 *   expiration: 7
 */
@Data
@Component
@ConfigurationProperties(prefix = "jwt")
public class JwtProperties {

    /** JWT 签名秘钥（必须 >= 32 字符，建议通过环境变量设置） */
    private String secret;

    /** Token 过期时间（单位：天） */
    private long expiration;

    /**
     * 获取毫秒级的过期时间（用于计算 exp）
     * @return 毫秒单位的有效期时间
     */
    public long getExpirationInMillis() {
        return expiration * 24 * 60 * 60 * 1000;
    }
}
