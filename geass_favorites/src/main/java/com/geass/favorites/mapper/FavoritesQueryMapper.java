package com.geass.favorites.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.geass.favorites.model.Favorites;

/**
 * FavoritesQueryMapper
 * 用于收藏表的查询操作
 * - 支持分页查询
 * - 支持单表按类型 ID 查询
 * - 支持批量 ID 查询
 */
@Mapper
public interface FavoritesQueryMapper {

    // ================== 分页查询 ==================

    /**
     * 根据 UserID 分页查询收藏记录
     */
    List<Favorites> selectByUserID(Map<String, Object> params);

    /**
     * 根据 UserID 统计收藏总数
     */
    int countByUserID(@Param("userID") int userID);


    // ================== 单表查询 ==================

    List<Favorites> selectByAnimeID(@Param("animeID") int animeID);

    List<Favorites> selectByAnimeIDs(@Param("list") List<Integer> animeIDs);

    List<Favorites> selectByVideoID(@Param("videoID") int videoID);

    List<Favorites> selectByVideoIDs(@Param("list") List<Integer> videoIDs);

    List<Favorites> selectByUraAnimeID(@Param("uraAnimeID") int uraAnimeID);

    List<Favorites> selectByUraAnimeIDs(@Param("list") List<Integer> uraAnimeIDs);

    List<Favorites> selectByThreeDID(@Param("threeDID") int threeDID);

    List<Favorites> selectByThreeDIDs(@Param("list") List<Integer> threeDIDs);
}
