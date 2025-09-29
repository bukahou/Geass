package com.geass.media.model;

import java.util.Date;

import lombok.Data;

/**
 * UraAnimeManagement 里番管理实体类，对应表 UraAnimeManagement
 */
@Data
public class UraAnimeManagement {

    private Integer uraAnimeID;     // 里番视频ID，自增主键
    private String videoURL;        // 视频存储路径
    private String imageURL;        // 封面图片存储路径
    private Date releaseDate;       // 发行日期
    private String title;           // 视频标题（日文标题）
    private Integer views;          // 观看次数
    private Integer favoriteCount;  // 收藏次数
    private String remarks;         // 备注
}
