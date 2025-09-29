package com.geass.history.model;

import java.util.Date;

import lombok.Data;

/**
 * UserManagement 用户管理实体类
 * 对应表：UserManagement
 */
@Data
public class UserManagement {

    private Integer userID;          // 用户ID
    private String name;             // 姓名/昵称
    private String username;         // 登录账号
    private String password;         // 登录密码
    private Integer role;            // 角色（1=普通用户）
    private String avatar;           // 头像URL
    private String email;            // 邮箱
    private Boolean emailVerified;   // 邮箱是否验证
    private Date registrationDate;   // 注册时间
}
