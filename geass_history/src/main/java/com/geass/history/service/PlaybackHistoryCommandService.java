package com.geass.history.service;

import com.geass.history.model.PlaybackHistory;

/**
 * 播放历史命令服务接口
 * - 新增或更新播放历史
 */
public interface PlaybackHistoryCommandService {

    /**
     * 新增或更新播放历史
     * - 若已有该资源播放历史，仅更新时间
     * - 若没有，则插入新记录
     * - 两种情况都会增加对应资源的 view_count
     *
     * @param history 播放历史实体（包含 userID + 一个资源ID）
     * @return 插入或更新后的 HistoryID
     */
    int addOrUpdateHistory(PlaybackHistory history);
}
