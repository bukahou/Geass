package com.geass.media.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.geass.media.common.BaseResponse;
import com.geass.media.common.PageRequest;
import com.geass.media.common.PageResponse;
import com.geass.media.dto.AnimeQuery;
import com.geass.media.model.UraAnimeManagement;
import com.geass.media.service.UraAnimeManagementService;

@RestController
@RequestMapping("/ura-anime")
public class UraAnimeController {

    @Autowired
    private UraAnimeManagementService uraAnimeService;

    // 1. ID 查询
    @PostMapping("/id")
    public BaseResponse<UraAnimeManagement> getByID(@RequestBody AnimeQuery req) {
        return BaseResponse.success(uraAnimeService.getByID(req.getId()));
    }

    // 2. 标题模糊查询
    @PostMapping("/search/title")
    public BaseResponse<PageResponse<UraAnimeManagement>> searchByTitle(@RequestBody PageRequest<AnimeQuery> req) {
        return BaseResponse.success(
                uraAnimeService.searchByTitle(req.getQuery().getKeyword(), req.getPage(), req.getPageSize())
        );
    }

    // 3. 按收藏数分页
    @PostMapping("/sort/favorite")
    public BaseResponse<PageResponse<UraAnimeManagement>> sortByFavorite(@RequestBody PageRequest<AnimeQuery> req) {
        return BaseResponse.success(
                uraAnimeService.listByFavoriteCount(req.getPage(), req.getPageSize())
        );
    }

    // 4. 按观看数分页
    @PostMapping("/sort/view")
    public BaseResponse<PageResponse<UraAnimeManagement>> sortByView(@RequestBody PageRequest<AnimeQuery> req) {
        return BaseResponse.success(
                uraAnimeService.listByViewCount(req.getPage(), req.getPageSize())
        );
    }

    // 5. 按发行日期分页
    @PostMapping("/sort/release")
    public BaseResponse<PageResponse<UraAnimeManagement>> sortByRelease(@RequestBody PageRequest<AnimeQuery> req) {
        return BaseResponse.success(
                uraAnimeService.listByReleaseDate(req.getPage(), req.getPageSize())
        );
    }
}
