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
import com.geass.media.model.AnimeManagement;
import com.geass.media.service.AnimeManagementService;

@RestController
@RequestMapping("/anime")
public class AnimeController {

    @Autowired
    private AnimeManagementService animeService;

    // 1. ID 查询（非分页）
    @PostMapping("/id")
    public BaseResponse<AnimeManagement> getByID(@RequestBody AnimeQuery req) {
        return BaseResponse.success(animeService.getByID(req.getId()));
    }

    // 2. 类型分页查询
    @PostMapping("/type")
    public BaseResponse<PageResponse<AnimeManagement>> getByType(@RequestBody PageRequest<AnimeQuery> req) {
        return BaseResponse.success(
                animeService.getByType(req.getQuery().getType(), req.getPage(), req.getPageSize())
        );
    }

    // 3. 中文模糊查询
    @PostMapping("/search/cn")
    public BaseResponse<PageResponse<AnimeManagement>> searchCN(@RequestBody PageRequest<AnimeQuery> req) {
        return BaseResponse.success(
                animeService.searchByCNName(req.getQuery().getKeyword(), req.getPage(), req.getPageSize())
        );
    }

    // 4. 日文模糊查询
    @PostMapping("/search/jp")
    public BaseResponse<PageResponse<AnimeManagement>> searchJP(@RequestBody PageRequest<AnimeQuery> req) {
        return BaseResponse.success(
                animeService.searchByJPName(req.getQuery().getKeyword(), req.getPage(), req.getPageSize())
        );
    }

    // 5. 按收藏数分页
    @PostMapping("/sort/favorite")
    public BaseResponse<PageResponse<AnimeManagement>> sortByFavorite(@RequestBody PageRequest<AnimeQuery> req) {
        return BaseResponse.success(
                animeService.listByFavoriteCount(req.getPage(), req.getPageSize())
        );
    }

    // 6. 按观看数分页
    @PostMapping("/sort/view")
    public BaseResponse<PageResponse<AnimeManagement>> sortByView(@RequestBody PageRequest<AnimeQuery> req) {
        return BaseResponse.success(
                animeService.listByViewCount(req.getPage(), req.getPageSize())
        );
    }

    // 7. 按上映时间分页
    @PostMapping("/sort/release")
    public BaseResponse<PageResponse<AnimeManagement>> sortByRelease(@RequestBody PageRequest<AnimeQuery> req) {
        return BaseResponse.success(
                animeService.listByReleaseDate(req.getPage(), req.getPageSize())
        );
    }
}
