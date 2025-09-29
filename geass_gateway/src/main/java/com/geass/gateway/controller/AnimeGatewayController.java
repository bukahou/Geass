package com.geass.gateway.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.geass.gateway.common.BaseResponse;
import com.geass.gateway.service.AnimeService;

@RestController
@RequestMapping("/public/anime")
public class AnimeGatewayController {

    @Autowired
    private AnimeService animeService;

    @PostMapping("/id")
    public BaseResponse<Map<String, Object>> getByID(@RequestBody Object req) {
        return animeService.getByID(req);
    }

    @PostMapping("/type")
    public BaseResponse<Map<String, Object>> getByType(@RequestBody Object req) {
        return animeService.getByType(req);
    }

    @PostMapping("/search/cn")
    public BaseResponse<Map<String, Object>> searchCN(@RequestBody Object req) {
        return animeService.searchCN(req);
    }

    @PostMapping("/search/jp")
    public BaseResponse<Map<String, Object>> searchJP(@RequestBody Object req) {
        return animeService.searchJP(req);
    }

    @PostMapping("/sort/favorite")
    public BaseResponse<Map<String, Object>> sortByFavorite(@RequestBody Object req) {
        return animeService.sortByFavorite(req);
    }

    @PostMapping("/sort/view")
    public BaseResponse<Map<String, Object>> sortByView(@RequestBody Object req) {
        return animeService.sortByView(req);
    }

    @PostMapping("/sort/release")
    public BaseResponse<Map<String, Object>> sortByRelease(@RequestBody Object req) {
        return animeService.sortByRelease(req);
    }
}
