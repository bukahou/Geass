package com.geass.gateway.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.geass.gateway.common.BaseResponse;
import com.geass.gateway.service.UserService;
import com.geass.gateway.util.RoleChecker;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;
    
    @Autowired
    private RoleChecker roleChecker;


    /** 获取用户信息（从 Filter 注入的 userId 获取） */
    @PostMapping("/info")
    public BaseResponse<?> getUserInfo() {
    	roleChecker.checkRole(1); 
        return userService.getUserInfo();
    }

    @PostMapping("/update-role")
    public BaseResponse<?> updateUserRole(@RequestBody Map<String, Integer> request) {
    	roleChecker.checkRole(3);
        return userService.updateUserRole(request);
    }
}
