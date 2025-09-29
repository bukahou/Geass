package com.geass.media.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.geass.media.common.BaseResponse;
import com.geass.media.common.PageRequest;
import com.geass.media.common.PageResponse;
import com.geass.media.dto.AnimeQuery; // 可以新建 VideoQuery，复用 AnimeQuery 也行
import com.geass.media.model.VideoManagement;
import com.geass.media.service.VideoManagementService;

@RestController
@RequestMapping("/video")
public class VideoController {

    @Autowired
    private VideoManagementService videoService;

    // 1. ID 查询
    @PostMapping("/id")
    public BaseResponse<VideoManagement> getByID(@RequestBody AnimeQuery req) {
        return BaseResponse.success(videoService.getByID(req.getId()));
    }

    // 2. 类型分页查询
    @PostMapping("/type")
    public BaseResponse<PageResponse<VideoManagement>> getByType(@RequestBody PageRequest<AnimeQuery> req) {
        return BaseResponse.success(
                videoService.getByType(req.getQuery().getType(), req.getPage(), req.getPageSize())
        );
    }

    // 3. 主演模糊查询
    @PostMapping("/search/actors")
    public BaseResponse<PageResponse<VideoManagement>> searchActors(@RequestBody PageRequest<AnimeQuery> req) {
        return BaseResponse.success(
                videoService.searchByLeadingActors(req.getQuery().getKeyword(), req.getPage(), req.getPageSize())
        );
    }

    // 4. 视频名称模糊查询
    @PostMapping("/search/name")
    public BaseResponse<PageResponse<VideoManagement>> searchName(@RequestBody PageRequest<AnimeQuery> req) {
        return BaseResponse.success(
                videoService.searchByVideoName(req.getQuery().getKeyword(), req.getPage(), req.getPageSize())
        );
    }

    // 5. 按收藏数分页
    @PostMapping("/sort/favorite")
    public BaseResponse<PageResponse<VideoManagement>> sortByFavorite(@RequestBody PageRequest<AnimeQuery> req) {
        return BaseResponse.success(videoService.listByFavoriteCount(req.getPage(), req.getPageSize()));
    }

    // 6. 按观看数分页
    @PostMapping("/sort/view")
    public BaseResponse<PageResponse<VideoManagement>> sortByView(@RequestBody PageRequest<AnimeQuery> req) {
        return BaseResponse.success(videoService.listByViewCount(req.getPage(), req.getPageSize()));
    }
}
