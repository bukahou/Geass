package com.geass.history.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.geass.history.model.PlaybackHistory;

@Mapper
public interface PlaybackHistoryCommandMapper {

    // =========================
    // 用户存在性检查
    // =========================
    boolean existsByUserID(@Param("userID") int userID);

    // =========================
    // 检查是否已有观看记录
    // =========================
    boolean existsHistory(PlaybackHistory history);

    // =========================
    // 更新已有记录的 PlayTime
    // =========================
    int updatePlayTime(PlaybackHistory history);

    // =========================
    // 插入新的播放历史
    // =========================
    int insertHistory(PlaybackHistory history);

    // =========================
    // 浏览量自增（动态，根据资源类型）
    // =========================
    int incrementViewsDynamic(PlaybackHistory history);
}
