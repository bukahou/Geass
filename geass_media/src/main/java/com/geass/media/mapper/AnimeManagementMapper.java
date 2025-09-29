package com.geass.media.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.geass.media.model.AnimeManagement;

public interface AnimeManagementMapper {

    // 1. 根据 ID 查询（不分页）
    AnimeManagement selectByID(@Param("id") int id);

    // 2. 类型分页查询
    List<AnimeManagement> selectByType(@Param("type") String type,
                                        @Param("limit") int limit,
                                        @Param("offset") int offset);

    // 3. 类型总数查询
    int countByType(@Param("type") String type);

    // 4. 中文名模糊分页查询
    List<AnimeManagement> selectByCNNameLike(@Param("keyword") String keyword,
                                             @Param("limit") int limit,
                                             @Param("offset") int offset);

    // 5. 中文名模糊查询计数
    int countByCNNameLike(@Param("keyword") String keyword);

    // 6. 日文名模糊分页查询
    List<AnimeManagement> selectByJPNameLike(@Param("keyword") String keyword,
                                             @Param("limit") int limit,
                                             @Param("offset") int offset);

    // 7. 日文名模糊查询计数
    int countByJPNameLike(@Param("keyword") String keyword);

    // 8. 收藏数降序分页
    List<AnimeManagement> selectOrderByFavorite(@Param("limit") int limit,
                                                @Param("offset") int offset);

    // 9. 观看数降序分页
    List<AnimeManagement> selectOrderByViewCount(@Param("limit") int limit,
                                                 @Param("offset") int offset);

    // 10. 上映时间降序分页
    List<AnimeManagement> selectOrderByReleaseDate(@Param("limit") int limit,
                                                   @Param("offset") int offset);

    // 11. 总记录数
    int countAll();
}
