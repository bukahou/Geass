package com.geass.history.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.geass.history.mapper.PlaybackHistoryCommandMapper;
import com.geass.history.model.PlaybackHistory;
import com.geass.history.service.PlaybackHistoryCommandService;

@Service
public class PlaybackHistoryCommandServiceImpl implements PlaybackHistoryCommandService {

    @Autowired
    private PlaybackHistoryCommandMapper playbackHistoryCommandMapper;

    @Override
    @Transactional
    public int addOrUpdateHistory(PlaybackHistory history) {
        // 1. 校验用户
        boolean existsUser = playbackHistoryCommandMapper.existsByUserID(history.getUserID());
        if (!existsUser) {
            throw new IllegalArgumentException("用户不存在: " + history.getUserID());
        }

        // 2. 判断该用户是否已有此资源的播放记录
        boolean existsHistory = playbackHistoryCommandMapper.existsHistory(history);

        if (existsHistory) {
            // 已存在：更新 PlayTime
            playbackHistoryCommandMapper.updatePlayTime(history);
        } else {
            // 不存在：插入新记录
            playbackHistoryCommandMapper.insertHistory(history);
        }

        // 3. 更新资源的 view_count（永远自增）
        playbackHistoryCommandMapper.incrementViewsDynamic(history);

        // 返回 HistoryID（若是更新，返回 -1 代表不是新插入）
        return existsHistory ? -1 : history.getHistoryID();
    }
}
