package com.geass.user.service;

import com.geass.user.common.BaseResponse;

public interface UserService {

    /**
     * 根据用户 ID 获取个人信息
     * @param userId 用户 ID
     * @return 用户信息（不包含敏感数据，如密码）
     */
    BaseResponse<?> getUserInfo(int userId);
    
    /**
     * 更新用户权限
     * @param userId 用户 ID
     * @param role 新的角色值
     * @return 操作结果
     */
    BaseResponse<?> updateUserRole(int userId, int role);
}
