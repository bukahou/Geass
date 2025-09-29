package com.geass.user.util;

import java.security.Key;
import java.util.Date;
import java.util.Map;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

/**
 * JwtUtil
 * -------------------------
 * JWT 工具类，用于生成和解析 JWT Token。
 *
 * 使用场景:
 * 1. 登录成功后生成 Token 返回给前端
 * 2. 在拦截器 / 网关 / 业务逻辑中解析并校验 Token
 *
 * 注意:
 * - 本工具类使用 HS256 对称加密算法，秘钥需 >= 32 字节
 * - 过期时间由外部传入（毫秒），推荐从 JwtProperties 获取
 */
public class JwtUtil {

    /** 签名秘钥对象（由字符串秘钥转换而来） */
    private final Key key;

    /** Token 过期时间（单位：毫秒） */
    private final long expiration;

    /**
     * 构造函数
     *
     * @param secret     JWT 签名秘钥（必须 >= 32 字符）
     * @param expiration Token 过期时间（毫秒）
     */
    public JwtUtil(String secret, long expiration) {
        this.key = Keys.hmacShaKeyFor(secret.getBytes());
        this.expiration = expiration;
    }

    /**
     * 生成 JWT Token
     *
     * @param claims 自定义的声明信息 (如 userId, username, role 等)
     * @return 生成的 JWT 字符串
     *
     * 实际效果:
     * - iat: 签发时间
     * - exp: 过期时间
     * - claims: 用户自定义负载
     * - alg: HS256
     *
     * 示例:
     * Map<String, Object> claims = Map.of(
     *     "userId", 1,
     *     "username", "testUser",
     *     "role", "admin"
     * );
     * String token = jwtUtil.generateToken(claims);
     */
    public String generateToken(Map<String, Object> claims) {
        return Jwts.builder()
                .setClaims(claims) // 设置负载数据
                .setIssuedAt(new Date()) // 签发时间
                .setExpiration(new Date(System.currentTimeMillis() + expiration)) // 过期时间
                .signWith(key, SignatureAlgorithm.HS256) // 签名算法 + 秘钥
                .compact(); // 生成最终字符串
    }

    /**
     * 校验并解析 JWT Token
     *
     * @param token 待解析的 JWT 字符串
     * @return 解析后的 Jws<Claims> 对象，包含负载信息
     *
     * 使用示例:
     * Jws<Claims> jws = jwtUtil.parseToken(token);
     * Integer userId = jws.getBody().get("userId", Integer.class);
     * String username = jws.getBody().get("username", String.class);
     */
    public Jws<Claims> parseToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(key) // 使用相同秘钥验证签名
                .build()
                .parseClaimsJws(token);
    }
}
