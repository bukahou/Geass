package com.geass.history.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.geass.history.model.AnimeManagement;
import com.geass.history.model.PlaybackHistory;
import com.geass.history.model.ThreeDManagement;
import com.geass.history.model.UraAnimeManagement;
import com.geass.history.model.VideoManagement;

/**
 * PlaybackHistoryQueryMapper
 * 用于播放历史表的查询操作
 */
@Mapper
public interface PlaybackHistoryQueryMapper {

    // ================== 分页查询 ==================

    List<PlaybackHistory> selectByUserID(Map<String, Object> params);

    int countByUserID(@Param("userID") int userID);


    // ================== 单表查询 ==================

    List<AnimeManagement> selectByAnimeIDs(@Param("list") List<Integer> animeIDs);

    List<VideoManagement> selectByVideoIDs(@Param("list") List<Integer> videoIDs);

    List<UraAnimeManagement> selectByUraAnimeIDs(@Param("list") List<Integer> uraAnimeIDs);

    List<ThreeDManagement> selectByThreeDIDs(@Param("list") List<Integer> threeDIDs);
}
