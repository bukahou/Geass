package com.geass.gateway.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

    @Autowired
    private CorsProperties corsProperties;

    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();

        config.setAllowCredentials(corsProperties.getAllowCredentials());

        if (corsProperties.getAllowedOrigins() != null) {
            corsProperties.getAllowedOrigins().forEach(config::addAllowedOrigin);
        }
        if (corsProperties.getAllowedMethods() != null) {
            corsProperties.getAllowedMethods().forEach(config::addAllowedMethod);
        }
        if (corsProperties.getAllowedHeaders() != null) {
            corsProperties.getAllowedHeaders().forEach(config::addAllowedHeader);
        }
        if (corsProperties.getExposedHeaders() != null) {
            corsProperties.getExposedHeaders().forEach(config::addExposedHeader);
        }

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
