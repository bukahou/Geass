package com.geass.history.model;

import java.util.Date;

import lombok.Data;

/**
 * UraAnimeManagement 里番管理实体类
 * 对应表：UraAnimeManagement
 */
@Data
public class UraAnimeManagement {

    private Integer uraAnimeID;    // 里番ID
    private String videoURL;       // 视频路径
    private String imageURL;       // 封面
    private Date releaseDate;      // 发行日期
    private String title;          // 标题
    private Integer views;         // 观看次数
    private Integer favoriteCount; // 收藏次数
    private String remarks;        // 备注
}
