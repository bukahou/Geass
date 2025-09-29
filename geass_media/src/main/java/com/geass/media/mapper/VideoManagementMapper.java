package com.geass.media.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.geass.media.model.VideoManagement;

public interface VideoManagementMapper {

    // 1. 根据 ID 查询（不分页）
    VideoManagement selectByID(@Param("id") int id);

    // 2. 类型分页查询
    List<VideoManagement> selectByType(@Param("type") String type,
                                       @Param("limit") int limit,
                                       @Param("offset") int offset);

    // 3. 类型总数查询
    int countByType(@Param("type") String type);

    // 4. 主演模糊分页查询
    List<VideoManagement> selectByLeadingActorsLike(@Param("keyword") String keyword,
                                                    @Param("limit") int limit,
                                                    @Param("offset") int offset);

    // 5. 主演模糊查询计数
    int countByLeadingActorsLike(@Param("keyword") String keyword);

    // 6. 视频名称模糊分页查询
    List<VideoManagement> selectByVideoNameLike(@Param("keyword") String keyword,
                                                @Param("limit") int limit,
                                                @Param("offset") int offset);

    // 7. 视频名称模糊查询计数
    int countByVideoNameLike(@Param("keyword") String keyword);

    // 8. 收藏数降序分页
    List<VideoManagement> selectOrderByFavorite(@Param("limit") int limit,
                                                @Param("offset") int offset);

    // 9. 观看数降序分页
    List<VideoManagement> selectOrderByViewCount(@Param("limit") int limit,
                                                 @Param("offset") int offset);

    // 10. 总记录数
    int countAll();
}
