package com.geass.history.model;

import java.util.Date;

import lombok.Data;

/**
 * PlaybackHistory 播放历史实体类
 * 对应表：PlaybackHistory
 */
@Data
public class PlaybackHistory {

    private Integer historyID;       // 播放历史ID
    private Integer userID;          // 用户ID
    private Integer animeID;         // 动漫ID
    private Integer videoID;         // 视频ID
    private Integer uraAnimeID;      // 里番ID
    private Integer threeDID;        // 3D视频ID
    private Date playTime;           // 播放时间
    private Integer durationWatched; // 播放时长（秒）
}
