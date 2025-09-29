package com.geass.user.model;

import java.util.Date;

import lombok.Data;

/**
 * UserLoginManagement 用户登录管理实体类，对应表 UserLoginManagement
 */
@Data
public class UserLoginManagement {

    private Integer loginID;        // 登录记录ID，主键，自增
    private Integer userID;         // 用户ID（外键）
    private Date loginTime;         // 登录时间
    private Date logoutTime;        // 登出时间
    private String ipAddress;       // 登录IP地址
    private String deviceInfo;      // 设备信息（操作系统/浏览器等）
    private String loginStatus;     // 登录状态（成功/失败）
    private String failureReason;   // 登录失败原因
}
