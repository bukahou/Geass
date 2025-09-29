package com.geass.history.service;

import com.geass.history.common.PageResponse;

public interface PlaybackHistoryQueryService {

    /**
     * 分页获取用户播放历史（Anime / Video / UraAnime / ThreeD 混合）
     * @param userID 用户ID
     * @param page 页码
     * @param pageSize 每页数量
     * @return 分页结果
     */
    PageResponse<Object> getUserHistory(int userID, int page, int pageSize);
}
