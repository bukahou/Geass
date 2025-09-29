package com.geass.user.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.geass.user.common.BaseResponse;
import com.geass.user.common.BizException;
import com.geass.user.mapper.UserManagementMapper;
import com.geass.user.model.UserManagement;
import com.geass.user.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserManagementMapper userMapper;

    @Override
    public BaseResponse<?> getUserInfo(int userId) {
        UserManagement user = userMapper.selectByUserID(userId);
        if (user == null) {
            throw new BizException("用户不存在");
        }

        // 返回用户信息（不带密码）
        return BaseResponse.success("查询成功", user);
    }
    
    @Override
    public BaseResponse<?> updateUserRole(int userId, int role) {
        // 先检查用户是否存在
        UserManagement user = userMapper.selectByUserID(userId);
        if (user == null) {
            throw new BizException("用户不存在");
        }

        // 更新角色
        int rows = userMapper.updateUserRole(userId, role);
        if (rows <= 0) {
            throw new BizException("更新失败");
        }

        return BaseResponse.success("权限更新成功", null);
    }
}
