package com.geass.gateway.service;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.geass.gateway.common.BaseResponse;
import com.geass.gateway.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private HttpServletRequest request;
    

//    public BaseResponse<?> login(Map<String, String> request) {
//        return userRepository.login(request);
//    }
    
    public BaseResponse<?> login(Map<String, String> req) {
        // 提取客户端信息
        String ip = getClientIp(request);
        String userAgent = request.getHeader("User-Agent");

        // 重新组装请求体
        Map<String, String> payload = Map.of(
            "username", req.get("username"),
            "password", req.get("password"),
            "clientIp", ip,
            "deviceInfo", userAgent
        );

        return userRepository.login(payload);
    }

    private String getClientIp(HttpServletRequest request) {
        String ip = request.getHeader("X-Forwarded-For");
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("Proxy-Client-IP");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }
        return ip;
    }

    public BaseResponse<?> getUserInfo() {
        Integer userId = (Integer) this.request.getAttribute("userId");
        return userRepository.getUserInfo(userId);
    }

    public BaseResponse<?> updateUserRole(Map<String, Integer> request) {
        return userRepository.updateUserRole(request);
    }
    
}
