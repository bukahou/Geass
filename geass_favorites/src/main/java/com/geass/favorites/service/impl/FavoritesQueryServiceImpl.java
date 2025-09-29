package com.geass.favorites.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.geass.favorites.common.PageResponse;
import com.geass.favorites.mapper.FavoritesQueryMapper;
import com.geass.favorites.model.Favorites;
import com.geass.favorites.service.FavoritesQueryService;

@Service
public class FavoritesQueryServiceImpl implements FavoritesQueryService {

    @Autowired
    private FavoritesQueryMapper favoritesQueryMapper;

    @Override
    public PageResponse<Object> getUserFavorites(int userID, int page, int pageSize) {
        // 1. 分页获取收藏基础记录
        Map<String, Object> params = new HashMap<>();
        params.put("userID", userID);
        params.put("limit", pageSize);
        params.put("offset", (page - 1) * pageSize);

        List<Favorites> favorites = favoritesQueryMapper.selectByUserID(params);
        int total = favoritesQueryMapper.countByUserID(userID);

        // 2. 分类收集 ID
        List<Integer> animeIDs = new ArrayList<>();
        List<Integer> videoIDs = new ArrayList<>();
        List<Integer> uraAnimeIDs = new ArrayList<>();
        List<Integer> threeDIDs = new ArrayList<>();

        Map<Integer, Date> favoriteTimeMap = new HashMap<>();
        for (Favorites f : favorites) {
            if (f.getAnimeID() != null) animeIDs.add(f.getAnimeID());
            if (f.getVideoID() != null) videoIDs.add(f.getVideoID());
            if (f.getUraAnimeID() != null) uraAnimeIDs.add(f.getUraAnimeID());
            if (f.getThreeDID() != null) threeDIDs.add(f.getThreeDID());
            favoriteTimeMap.put(f.getFavoriteID(), f.getFavoriteTime());
        }

        // 3. 批量查询详情
        List<Object> result = new ArrayList<>();
        if (!animeIDs.isEmpty()) result.addAll(favoritesQueryMapper.selectByAnimeIDs(animeIDs));
        if (!videoIDs.isEmpty()) result.addAll(favoritesQueryMapper.selectByVideoIDs(videoIDs));
        if (!uraAnimeIDs.isEmpty()) result.addAll(favoritesQueryMapper.selectByUraAnimeIDs(uraAnimeIDs));
        if (!threeDIDs.isEmpty()) result.addAll(favoritesQueryMapper.selectByThreeDIDs(threeDIDs));

        // 4. 排序（注意：这里需要保证各详情对象中能取到对应的 FavoriteTime，或者额外 join）
        // 暂时根据 result 中无 FavoriteTime 的情况，按收藏表的顺序返回
        // TODO: 如果需要严格按时间排序，最好在 join 时取出 FavoriteTime

        return new PageResponse<>(total, page, pageSize, result);
    }
}
