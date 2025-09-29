package com.geass.user.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.geass.user.common.BaseResponse;
import com.geass.user.service.AuthService;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    /**
     * 用户登录（JSON 请求）
     * @param request 包含 username、password、clientIp、deviceInfo
     */
    @PostMapping("/login")
    public BaseResponse<?> login(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String password = request.get("password");
        String clientIp = request.get("clientIp");
        String deviceInfo = request.get("deviceInfo");

        return authService.login(username, password, clientIp, deviceInfo);
    }
}
