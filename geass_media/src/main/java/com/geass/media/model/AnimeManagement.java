package com.geass.media.model;

import java.util.Date;

import lombok.Data;

/**
 * AnimeManagement 动漫管理实体类，对应表 AnimeManagement
 */
@Data
public class AnimeManagement {

    private Integer animeID;         // 视频ID，主键，自增
    private String animeType;        // 动漫类型，如冒险、奇幻等
    private String cnName;           // 中文名称
    private String jpName;           // 日文名称
    private String description;      // 介绍，动漫的详细描述
    private String folderURL;        // 视频文件夹地址，存储视频文件的位置
    private String imageURL;         // 图片地址，存储封面图等
    private Integer episodes;        // 集数，动漫的总集数
    private Integer favoriteCount;   // 收藏数，用户收藏此动漫的总数
    private Integer viewCount;       // 观看数，此动漫被观看的总次数
    private Date releaseDate;        // 上映日期，动漫的首次上映日期
}