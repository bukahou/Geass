package com.geass.user.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.geass.user.common.BaseResponse;
import com.geass.user.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * 根据 userId 获取用户信息
     * @param userId 用户 ID
     */
    @PostMapping("/info")
    public BaseResponse<?> getUserInfo(@RequestBody Map<String, Integer> request) {
        int userId = request.get("userId");
        return userService.getUserInfo(userId);
    }
    
    /** 更新用户权限 */
    @PostMapping("/update-role")
    public BaseResponse<?> updateUserRole(@RequestBody Map<String, Integer> request) {
        int userId = request.get("userId");
        int role = request.get("role");
        return userService.updateUserRole(userId, role);
    }

}
