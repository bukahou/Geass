package com.geass.history.model;

import lombok.Data;

/**
 * VideoManagement 视频管理实体类
 * 对应表：VideoManagement
 */
@Data
public class VideoManagement {

    private Integer videoID;       // 视频ID
    private String videoType;      // 视频类型
    private String leadingActors;  // 主演
    private String videoName;      // 视频名称
    private String folderURL;      // 视频文件夹地址
    private String imageURL;       // 封面
    private Integer viewCount;     // 观看次数
    private Integer favoriteCount; // 收藏次数
}
