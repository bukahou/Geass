package com.geass.favorites.model;

import java.util.Date;

import lombok.Data;

/**
 * Favorites 收藏表实体类
 */
@Data
public class Favorites {

    private Integer favoriteID;    // 收藏ID，主键
    private Integer userID;        // 用户ID
    private Integer animeID;       // 动漫ID（可空）
    private Integer videoID;       // 视频ID（可空）
    private Integer uraAnimeID;    // 里番视频ID（可空）
    private Integer threeDID;      // 3D视频ID（可空）
    private Date favoriteTime;     // 收藏时间
}
