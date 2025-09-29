package com.geass.favorites.service;

import com.geass.favorites.common.PageResponse;

public interface FavoritesQueryService {

    /**
     * 分页获取用户所有收藏（Anime / Video / UraAnime / ThreeD 混合）
     * @param userID 用户ID
     * @param page 页码（从1开始）
     * @param pageSize 每页大小
     * @return 分页响应，包含收藏详情
     */
    PageResponse<Object> getUserFavorites(int userID, int page, int pageSize);
}
