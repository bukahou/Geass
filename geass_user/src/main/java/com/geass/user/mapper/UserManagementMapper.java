package com.geass.user.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.geass.user.model.UserManagement;

@Mapper
public interface UserManagementMapper {

    /** 检查用户名是否存在 */
    boolean existsByUsername(@Param("username") String username);

    /** 检查邮箱是否已验证 */
    boolean isEmailVerified(@Param("email") String email);

    /** 插入新用户 */
    int insertUser(UserManagement user);

    /** 登录：根据用户名查用户 */
    UserManagement selectByUsername(@Param("username") String username);

    /** 根据用户ID查用户 */
    UserManagement selectByUserID(@Param("userID") int userID);

    /** 更新权限 */
    int updateUserRole(@Param("userID") int userID, @Param("role") int role);

    /** 更新头像 */
    int updateUserAvatar(@Param("userID") int userID, @Param("avatar") String avatar);

    /** 修改密码 */
    int updateUserPassword(@Param("userID") int userID, @Param("password") String password);

    /** 根据邮箱查用户 */
    UserManagement selectByEmail(@Param("email") String email);
}
