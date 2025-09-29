package com.geass.favorites.model;

import lombok.Data;

/**
 * VideoManagement 视频管理表
 */
@Data
public class VideoManagement {

    private Integer videoID;        // 视频ID
    private String videoType;       // 视频类型
    private String leadingActors;   // 主演
    private String videoName;       // 视频名称
    private String folderURL;       // 文件夹地址
    private String imageURL;        // 图片地址
    private Integer viewCount;      // 观看数
    private Integer favoriteCount;  // 收藏数
}
