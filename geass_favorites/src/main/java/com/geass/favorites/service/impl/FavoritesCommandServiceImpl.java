package com.geass.favorites.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.geass.favorites.mapper.FavoritesCommandMapper;
import com.geass.favorites.model.Favorites;
import com.geass.favorites.service.FavoritesCommandService;

@Service
public class FavoritesCommandServiceImpl implements FavoritesCommandService {

    @Autowired
    private FavoritesCommandMapper favoritesCommandMapper;

    /**
     * 新增收藏
     * - 检查用户是否存在
     * - 检查是否已收藏（避免重复）
     * - 插入收藏表
     * - 更新对应资源表收藏数
     */
    @Override
    @Transactional
    public int addFavorite(Favorites favorites) {
        // 1. 校验用户是否存在
        if (!favoritesCommandMapper.existsByUserID(favorites.getUserID())) {
            throw new IllegalArgumentException("用户不存在: " + favorites.getUserID());
        }

        // 2. 构造参数检查是否已存在
        Map<String, Object> params = new HashMap<>();
        params.put("userID", favorites.getUserID());
        params.put("animeID", favorites.getAnimeID());
        params.put("videoID", favorites.getVideoID());
        params.put("uraAnimeID", favorites.getUraAnimeID());
        params.put("threeDID", favorites.getThreeDID());

        if (favoritesCommandMapper.existsFavorite(params)) {
            return -1; // 已存在，直接返回
        }

        // 3. 先更新资源表收藏数
        int updatedRows = 0;
        if (favorites.getAnimeID() != null) {
            updatedRows = favoritesCommandMapper.incrementAnimeFavoriteCount(favorites.getAnimeID());
        } else if (favorites.getVideoID() != null) {
            updatedRows = favoritesCommandMapper.incrementVideoFavoriteCount(favorites.getVideoID());
        } else if (favorites.getUraAnimeID() != null) {
            updatedRows = favoritesCommandMapper.incrementUraAnimeFavoriteCount(favorites.getUraAnimeID());
        } else if (favorites.getThreeDID() != null) {
            updatedRows = favoritesCommandMapper.incrementThreeDFavoriteCount(favorites.getThreeDID());
        }

        // 如果资源不存在（更新行数为 0），直接失败回滚
        if (updatedRows == 0) {
            throw new IllegalArgumentException("资源不存在，无法收藏");
        }

        // 4. 插入收藏表
        favoritesCommandMapper.insertFavorite(favorites);

        return favorites.getFavoriteID();
    }


    /**
     * 删除收藏
     * - 检查收藏是否存在
     * - 删除收藏表
     * - 更新对应资源表收藏数
     */
    @Override
    @Transactional
    public boolean removeFavorite(Favorites favorites) {
        // 1. 直接删除 (userID + resourceID)
        int rows = favoritesCommandMapper.deleteFavoriteByUserAndResource(favorites);

        if (rows > 0) {
            // 2. 更新对应资源表收藏数
            if (favorites.getAnimeID() != null) {
                favoritesCommandMapper.decrementAnimeFavoriteCount(favorites.getAnimeID());
            } else if (favorites.getVideoID() != null) {
                favoritesCommandMapper.decrementVideoFavoriteCount(favorites.getVideoID());
            } else if (favorites.getUraAnimeID() != null) {
                favoritesCommandMapper.decrementUraAnimeFavoriteCount(favorites.getUraAnimeID());
            } else if (favorites.getThreeDID() != null) {
                favoritesCommandMapper.decrementThreeDFavoriteCount(favorites.getThreeDID());
            }
            return true;
        }

        return false;
    }

}
