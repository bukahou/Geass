package com.geass.favorites.model;

import java.util.Date;

import lombok.Data;

/**
 * UserManagement 用户管理实体类，对应表 UserManagement
 */
@Data
public class UserManagement {

    private Integer userID;           // 用户ID，主键
    private String name;              // 用户真实姓名或昵称
    private String username;          // 用户账号（唯一）
    private String password;          // 登录密码（加密存储）
    private Integer role;             // 权限，1表示普通用户
    private String avatar;            // 用户头像URL
    private String email;             // 邮箱地址
    private Boolean emailVerified;    // 邮箱是否验证
    private Date registrationDate;    // 注册时间
}