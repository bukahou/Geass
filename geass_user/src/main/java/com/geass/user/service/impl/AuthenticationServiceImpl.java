package com.geass.user.service.impl;

import java.util.Date;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.geass.user.common.BaseResponse;
import com.geass.user.common.BizException;
import com.geass.user.config.JwtProperties;
import com.geass.user.mapper.UserLoginManagementMapper;
import com.geass.user.mapper.UserManagementMapper;
import com.geass.user.model.UserLoginManagement;
import com.geass.user.model.UserManagement;
import com.geass.user.service.AuthService;
import com.geass.user.util.JwtUtil;
import com.geass.user.util.PasswordUtil;   

@Service
public class AuthenticationServiceImpl implements AuthService {

    @Autowired
    private UserManagementMapper userMapper;

    @Autowired
    private UserLoginManagementMapper loginMapper;

    @Autowired
    private JwtProperties jwtProperties;

    private JwtUtil getJwtUtil() {
    	return new JwtUtil(jwtProperties.getSecret(), jwtProperties.getExpirationInMillis());
    }

    @Override
    public BaseResponse<?> login(String username, String password, String ip, String deviceInfo) {
        UserManagement user = userMapper.selectByUsername(username);
        if (user == null) {
            saveLoginLog(null, ip, deviceInfo, "失败", "用户不存在");
            throw new BizException("用户不存在");
        }

        // ✅ 使用 PasswordUtil 进行哈希校验
        if (!PasswordUtil.verifyPassword(password, user.getPassword())) {
            saveLoginLog(user.getUserID(), ip, deviceInfo, "失败", "密码错误");
            throw new BizException("密码错误");
        }

        if (user.getEmailVerified() != null && !user.getEmailVerified()) {
            saveLoginLog(user.getUserID(), ip, deviceInfo, "失败", "邮箱未验证");
            throw new BizException("邮箱未验证");
        }

        // 登录成功
        saveLoginLog(user.getUserID(), ip, deviceInfo, "成功", null);

        // 生成 JWT Token（只放 userId, username, role）
        JwtUtil jwtUtil = getJwtUtil();
        String token = jwtUtil.generateToken(Map.of(
                "userId", user.getUserID(),
                "username", user.getUsername(),
                "role", user.getRole()
        ));

        // 返回前端的字段（比 token 更详细）
        return BaseResponse.success("登录成功", Map.of(
                "userId", user.getUserID(),
                "name", user.getName(),
                "username", user.getUsername(),
                "role", user.getRole(),
                "avatar", user.getAvatar(),
                "email", user.getEmail(),
                "token", token
        ));
    }

    private void saveLoginLog(Integer userID, String ip, String deviceInfo, String status, String reason) {
        UserLoginManagement log = new UserLoginManagement();
        log.setUserID(userID);
        log.setLoginTime(new Date());
        log.setIpAddress(ip);
        log.setDeviceInfo(deviceInfo);
        log.setLoginStatus(status);
        log.setFailureReason(reason);
        loginMapper.insertLoginRecord(log);
    }
}
