package com.geass.gateway.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.geass.gateway.common.BaseResponse;
import com.geass.gateway.service.UserService;

@RestController
@RequestMapping("/public/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public BaseResponse<?> login(@RequestBody Map<String, String> request) {
        return userService.login(request);
    }
}
