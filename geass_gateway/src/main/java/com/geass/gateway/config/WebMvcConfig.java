package com.geass.gateway.config;

import javax.servlet.Filter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.geass.gateway.filter.JwtAuthFilter;

/**
 * WebMvcConfig
 * --------------------------------
 * Spring Boot 过滤器注册配置
 *
 * 作用：
 * - 将 JwtAuthFilter 注册为全局 Filter
 * - 可以设置拦截路径、优先级
 */
@Configuration
public class WebMvcConfig {

    @Autowired
    private JwtAuthFilter jwtAuthFilter;

    /**
     * 注册 JWT 认证过滤器
     *
     * @return FilterRegistrationBean 对象
     */
    @Bean
    public FilterRegistrationBean<Filter> jwtFilter() {
        FilterRegistrationBean<Filter> registrationBean = new FilterRegistrationBean<>();
        registrationBean.setFilter(jwtAuthFilter);        // 指定过滤器
        registrationBean.addUrlPatterns("/api/*");        // 设置拦截路径（根据需要修改）
        registrationBean.setOrder(1);                     // 优先级（值越小越先执行）
        return registrationBean;
    }
}
