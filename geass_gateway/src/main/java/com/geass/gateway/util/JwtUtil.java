package com.geass.gateway.util;

import java.security.Key;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

/**
 * JwtUtil
 * --------------------------------
 * JWT 工具类（网关专用）
 *
 * 主要功能：
 * - 使用 HS256 签名算法验证 Token 的合法性。
 * - 解析 Token 并提取 Claims（负载数据）
 *
 * 注意：
 * - 只做验证与解析，不负责生成 Token。
 * - 请确保 secret 长度 ≥ 32 字节，否则会抛异常。
 */
public class JwtUtil {

    /** JWT 秘钥对象 */
    private final Key key;

    /**
     * 构造函数 - 用字符串秘钥生成加密 key
     *
     * @param secret JWT 秘钥（必须 >= 32 字符）
     */
    public JwtUtil(String secret) {
        this.key = Keys.hmacShaKeyFor(secret.getBytes());
    }

    /**
     * 解析 JWT Token
     *
     * @param token 带解析的 Token 字符串（不含 "Bearer " 前缀）
     * @return 解析后的 Jws<Claims> 对象，包含 userId, username 等字段
     * @throws JwtException 如果 token 非法或过期
     */
    public Jws<Claims> parseToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(key)       // 设置签名秘钥
                .build()
                .parseClaimsJws(token);   // 自动校验签名 + 解析负载
    }
}
