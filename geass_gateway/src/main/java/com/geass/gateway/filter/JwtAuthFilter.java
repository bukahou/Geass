package com.geass.gateway.filter;

import java.io.IOException;

import javax.annotation.PostConstruct;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.geass.gateway.config.JwtProperties;
import com.geass.gateway.util.JwtUtil;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;

/**
 * JwtAuthFilter
 * --------------------------------
 * 统一拦截请求，校验 JWT 是否合法。
 *
 * 功能：
 * - 拦截所有请求（可配置路径）
 * - 提取 Authorization Header 中的 Bearer Token
 * - 使用 JwtUtil 验证 Token 合法性
 * - 验证通过后，将 userId, username 等信息设置到请求属性中
 */
@Component
public class JwtAuthFilter implements Filter {

    @Autowired
    private JwtProperties jwtProperties;

    /** 工具类（从配置中初始化） */
    private JwtUtil jwtUtil;

    /** 初始化时构建 JwtUtil */
    @PostConstruct
    public void init() {
        this.jwtUtil = new JwtUtil(jwtProperties.getSecret());
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest httpReq = (HttpServletRequest) request;
        HttpServletResponse httpResp = (HttpServletResponse) response;

        // 放行预检请求（CORS）
        if ("OPTIONS".equalsIgnoreCase(httpReq.getMethod())) {
            chain.doFilter(request, response);
            return;
        }

        // 获取 Authorization 头部
        String token = httpReq.getHeader("Authorization");

        if (token == null || !token.startsWith("Bearer ")) {
            httpResp.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            httpResp.getWriter().write("缺少或无效的 Authorization 头部");
            return;
        }

        token = token.substring(7); // 移除 Bearer 前缀

        try {
            Jws<Claims> claims = jwtUtil.parseToken(token);

            // 将用户信息设置进请求作用域，供后续服务使用
            httpReq.setAttribute("userId", claims.getBody().get("userId"));
            httpReq.setAttribute("username", claims.getBody().get("username"));
            httpReq.setAttribute("role", claims.getBody().get("role"));

            // 验证通过，继续执行请求链
            chain.doFilter(request, response);
        } catch (JwtException e) {
            httpResp.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            httpResp.getWriter().write("Token 非法或已过期");
        }
    }
}
