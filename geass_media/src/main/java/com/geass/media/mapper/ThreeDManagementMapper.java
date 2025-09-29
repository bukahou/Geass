package com.geass.media.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.geass.media.model.ThreeDManagement;

public interface ThreeDManagementMapper {

    // 1. 根据 ID 查询
    ThreeDManagement selectByID(@Param("id") int id);

    // 2. 中文标题模糊查询（分页）
    List<ThreeDManagement> selectByCNTitleLike(@Param("keyword") String keyword,
                                               @Param("limit") int limit,
                                               @Param("offset") int offset);

    // 3. 中文标题匹配数量
    int countByCNTitleLike(@Param("keyword") String keyword);

    // 4. 日文标题模糊查询（分页）
    List<ThreeDManagement> selectByJPTitleLike(@Param("keyword") String keyword,
                                               @Param("limit") int limit,
                                               @Param("offset") int offset);

    // 5. 日文标题匹配数量
    int countByJPTitleLike(@Param("keyword") String keyword);

    // 6. 收藏数排序分页
    List<ThreeDManagement> selectOrderByFavorite(@Param("limit") int limit,
                                                 @Param("offset") int offset);

    // 7. 观看数排序分页
    List<ThreeDManagement> selectOrderByViews(@Param("limit") int limit,
                                              @Param("offset") int offset);

    // 8. 发行日期排序分页
    List<ThreeDManagement> selectOrderByReleaseDate(@Param("limit") int limit,
                                                    @Param("offset") int offset);

    // 9. 总数
    int countAll();
}
