package com.geass.favorites.model;

import java.util.Date;

import lombok.Data;

/**
 * ThreeDManagement 3D视频管理表
 */
@Data
public class ThreeDManagement {

    private Integer threeDID;       // 3D视频ID
    private String videoURL;        // 视频路径
    private String imageURL;        // 图片路径
    private Date releaseDate;       // 上映日期
    private String cnTitle;         // 中文标题
    private String jpTitle;         // 日文标题
    private Integer views;          // 观看数
    private Integer favoriteCount;  // 收藏数
    private String remarks;         // 备注
}
