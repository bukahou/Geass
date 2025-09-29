package com.geass.media.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.geass.media.model.UraAnimeManagement;

public interface UraAnimeManagementMapper {

    // 1. 根据 ID 查询
    UraAnimeManagement selectByID(@Param("id") int id);

    // 2. 标题模糊分页查询
    List<UraAnimeManagement> selectByTitleLike(@Param("keyword") String keyword,
                                               @Param("limit") int limit,
                                               @Param("offset") int offset);

    // 3. 标题模糊查询计数
    int countByTitleLike(@Param("keyword") String keyword);

    // 4. 收藏数降序分页
    List<UraAnimeManagement> selectOrderByFavorite(@Param("limit") int limit,
                                                   @Param("offset") int offset);

    // 5. 观看数降序分页
    List<UraAnimeManagement> selectOrderByViewCount(@Param("limit") int limit,
                                                    @Param("offset") int offset);

    // 6. 发行日期降序分页
    List<UraAnimeManagement> selectOrderByReleaseDate(@Param("limit") int limit,
                                                      @Param("offset") int offset);

    // 7. 总记录数
    int countAll();
}
