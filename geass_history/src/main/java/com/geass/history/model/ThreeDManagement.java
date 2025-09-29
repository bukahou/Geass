package com.geass.history.model;

import java.util.Date;

import lombok.Data;

/**
 * ThreeDManagement 3D视频管理实体类
 * 对应表：ThreeDManagement
 */
@Data
public class ThreeDManagement {

    private Integer threeDID;      // 3D视频ID
    private String videoURL;       // 视频路径
    private String imageURL;       // 封面
    private Date releaseDate;      // 发行日期
    private String cnTitle;        // 中文标题
    private String jpTitle;        // 日文标题
    private Integer views;         // 观看次数
    private Integer favoriteCount; // 收藏次数
    private String remarks;        // 备注
}
