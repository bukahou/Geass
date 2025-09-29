package com.geass.history.model;

import java.util.Date;

import lombok.Data;

/**
 * AnimeManagement 动漫管理实体类
 * 对应表：AnimeManagement
 */
@Data
public class AnimeManagement {

    private Integer animeID;       // 动漫ID
    private String animeType;      // 类型
    private String cnName;         // 中文名
    private String jpName;         // 日文名
    private String description;    // 描述
    private String folderURL;      // 视频文件夹地址
    private String imageURL;       // 封面
    private Integer episodes;      // 集数
    private Integer favoriteCount; // 收藏数
    private Integer viewCount;     // 观看数
    private Date releaseDate;      // 上映日期
}
