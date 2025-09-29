package com.geass.favorites.mapper;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.geass.favorites.model.Favorites;

@Mapper
public interface FavoritesCommandMapper {

    // =========================
    // 用户存在性检查
    // =========================
    boolean existsByUserID(@Param("userID") int userID);

    // =========================
    // 新增前检查
    // =========================
    /**
     * 检查是否已存在收藏记录
     * 传入参数需要至少包含 userID 和某个资源 ID
     */
    boolean existsFavorite(Map<String, Object> params);

    // =========================
    // 删除前检查
    // =========================
    boolean existsFavoriteByID(@Param("favoriteID") int favoriteID);

    // =========================
    // 新增收藏记录
    // =========================
    int insertFavorite(Favorites favorites);

    // =========================
    // 删除收藏记录
    // =========================
    int deleteFavorite(@Param("favoriteID") int favoriteID);
    int deleteFavoriteByUserAndResource(Favorites favorites);

    // =========================
    // 收藏数更新 (Anime)
    // =========================
    int incrementAnimeFavoriteCount(@Param("animeID") int animeID);
    int decrementAnimeFavoriteCount(@Param("animeID") int animeID);

    // =========================
    // 收藏数更新 (Video)
    // =========================
    int incrementVideoFavoriteCount(@Param("videoID") int videoID);
    int decrementVideoFavoriteCount(@Param("videoID") int videoID);

    // =========================
    // 收藏数更新 (UraAnime)
    // =========================
    int incrementUraAnimeFavoriteCount(@Param("uraAnimeID") int uraAnimeID);
    int decrementUraAnimeFavoriteCount(@Param("uraAnimeID") int uraAnimeID);

    // =========================
    // 收藏数更新 (ThreeD)
    // =========================
    int incrementThreeDFavoriteCount(@Param("threeDID") int threeDID);
    int decrementThreeDFavoriteCount(@Param("threeDID") int threeDID);
}
