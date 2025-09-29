package com.geass.user.service;

import com.geass.user.common.BaseResponse;

public interface AuthService {

    /**
     * 用户登录
     * @param username 用户名
     * @param password 密码
     * @param ip 登录 IP 地址
     * @param deviceInfo 设备信息
     * @return 统一响应结果（可包含用户信息或 Token）
     */
    BaseResponse<?> login(String username, String password, String ip, String deviceInfo);
}
