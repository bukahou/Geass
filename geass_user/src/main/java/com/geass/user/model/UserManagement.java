package com.geass.user.model;

import java.util.Date;

import lombok.Data;

/**
 * UserManagement 用户管理实体类，对应表 UserManagement
 */
@Data
public class UserManagement {

    private Integer userID;          // 用户ID，主键，自增
    private String name;             // 用户名，真实姓名或昵称
    private String username;         // 用户账号（唯一）
    private String password;         // 用户密码（加密存储）
    private Integer role;            // 权限（1: 普通用户, 其它可扩展）
    private String avatar;           // 用户头像URL
    private String email;            // 用户邮箱
    private Boolean emailVerified;   // 邮箱是否已验证
    private Date registrationDate;   // 注册时间
}
