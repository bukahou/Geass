package com.geass.media.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.geass.media.common.BaseResponse;
import com.geass.media.common.PageRequest;
import com.geass.media.common.PageResponse;
import com.geass.media.dto.AnimeQuery; // 这里可以复用 AnimeQuery 的 keyword / id
import com.geass.media.model.ThreeDManagement;
import com.geass.media.service.ThreeDManagementService;

@RestController
@RequestMapping("/threed")
public class ThreeDManagementController {

    @Autowired
    private ThreeDManagementService service;

    // 1. ID 查询
    @PostMapping("/id")
    public BaseResponse<ThreeDManagement> getByID(@RequestBody AnimeQuery req) {
        return BaseResponse.success(service.getByID(req.getId()));
    }

    // 2. 中文标题模糊查询
    @PostMapping("/search/cn")
    public BaseResponse<PageResponse<ThreeDManagement>> searchCN(@RequestBody PageRequest<AnimeQuery> req) {
        return BaseResponse.success(
                service.searchByCNTitle(req.getQuery().getKeyword(), req.getPage(), req.getPageSize())
        );
    }

    // 3. 日文标题模糊查询
    @PostMapping("/search/jp")
    public BaseResponse<PageResponse<ThreeDManagement>> searchJP(@RequestBody PageRequest<AnimeQuery> req) {
        return BaseResponse.success(
                service.searchByJPTitle(req.getQuery().getKeyword(), req.getPage(), req.getPageSize())
        );
    }

    // 4. 按收藏数排序
    @PostMapping("/sort/favorite")
    public BaseResponse<PageResponse<ThreeDManagement>> sortByFavorite(@RequestBody PageRequest<AnimeQuery> req) {
        return BaseResponse.success(
                service.listByFavoriteCount(req.getPage(), req.getPageSize())
        );
    }

    // 5. 按观看数排序
    @PostMapping("/sort/view")
    public BaseResponse<PageResponse<ThreeDManagement>> sortByViews(@RequestBody PageRequest<AnimeQuery> req) {
        return BaseResponse.success(
                service.listByViews(req.getPage(), req.getPageSize())
        );
    }

    // 6. 按发行日期排序
    @PostMapping("/sort/release")
    public BaseResponse<PageResponse<ThreeDManagement>> sortByRelease(@RequestBody PageRequest<AnimeQuery> req) {
        return BaseResponse.success(
                service.listByReleaseDate(req.getPage(), req.getPageSize())
        );
    }
}
