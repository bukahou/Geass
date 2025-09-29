package com.geass.favorites.model;

import java.util.Date;

import lombok.Data;

/**
 * UraAnimeManagement 里番管理表
 */
@Data
public class UraAnimeManagement {

    private Integer uraAnimeID;     // 里番ID
    private String videoURL;        // 视频路径
    private String imageURL;        // 图片路径
    private Date releaseDate;       // 上映日期
    private String title;           // 标题
    private Integer views;          // 观看数
    private Integer favoriteCount;  // 收藏数
    private String remarks;         // 备注
}
