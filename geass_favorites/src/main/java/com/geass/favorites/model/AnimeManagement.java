package com.geass.favorites.model;

import java.util.Date;

import lombok.Data;

/**
 * AnimeManagement 动漫管理表
 */
@Data
public class AnimeManagement {

    private Integer animeID;        // 视频ID
    private String animeType;       // 动漫类型
    private String cnName;          // 中文名称
    private String jpName;          // 日文名称
    private String description;     // 介绍
    private String folderURL;       // 文件夹地址
    private String imageURL;        // 图片地址
    private Integer episodes;       // 集数
    private Integer favoriteCount;  // 收藏数
    private Integer viewCount;      // 观看数
    private Date releaseDate;       // 上映日期
}
