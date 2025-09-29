package com.geass.media.model;

import lombok.Data;

/**
 * VideoManagement 视频管理实体类，对应表 VideoManagement
 */
@Data
public class VideoManagement {

    private Integer videoID;        // 视频ID，主键，自增
    private String videoType;       // 视频类型，如电影、电视剧、纪录片等
    private String leadingActors;   // 主演
    private String videoName;       // 视频名称
    private String folderURL;       // 视频文件夹地址
    private String imageURL;        // 图片地址
    private Integer viewCount;      // 观看次数
    private Integer favoriteCount;  // 收藏次数
}
