package com.geass.history.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.geass.history.common.PageResponse;
import com.geass.history.mapper.PlaybackHistoryQueryMapper;
import com.geass.history.model.PlaybackHistory;
import com.geass.history.service.PlaybackHistoryQueryService;

@Service
public class PlaybackHistoryQueryServiceImpl implements PlaybackHistoryQueryService {

    @Autowired
    private PlaybackHistoryQueryMapper historyQueryMapper;

    @Override
    public PageResponse<Object> getUserHistory(int userID, int page, int pageSize) {
        // 1. 分页获取历史基础记录
        Map<String, Object> params = new HashMap<>();
        params.put("userID", userID);
        params.put("limit", pageSize);
        params.put("offset", (page - 1) * pageSize);

        List<PlaybackHistory> histories = historyQueryMapper.selectByUserID(params);
        int total = historyQueryMapper.countByUserID(userID);

        // 2. 分类收集 ID
        List<Integer> animeIDs = new ArrayList<>();
        List<Integer> videoIDs = new ArrayList<>();
        List<Integer> uraAnimeIDs = new ArrayList<>();
        List<Integer> threeDIDs = new ArrayList<>();

        for (PlaybackHistory h : histories) {
            if (h.getAnimeID() != null) animeIDs.add(h.getAnimeID());
            if (h.getVideoID() != null) videoIDs.add(h.getVideoID());
            if (h.getUraAnimeID() != null) uraAnimeIDs.add(h.getUraAnimeID());
            if (h.getThreeDID() != null) threeDIDs.add(h.getThreeDID());
        }

        // 3. 批量查询详情
        List<Object> result = new ArrayList<>();
        if (!animeIDs.isEmpty()) result.addAll(historyQueryMapper.selectByAnimeIDs(animeIDs));
        if (!videoIDs.isEmpty()) result.addAll(historyQueryMapper.selectByVideoIDs(videoIDs));
        if (!uraAnimeIDs.isEmpty()) result.addAll(historyQueryMapper.selectByUraAnimeIDs(uraAnimeIDs));
        if (!threeDIDs.isEmpty()) result.addAll(historyQueryMapper.selectByThreeDIDs(threeDIDs));

        return new PageResponse<>(total, page, pageSize, result);
    }
}
