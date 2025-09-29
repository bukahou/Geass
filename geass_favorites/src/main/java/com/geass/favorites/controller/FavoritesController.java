package com.geass.favorites.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.geass.favorites.common.BaseResponse;
import com.geass.favorites.common.PageRequest;
import com.geass.favorites.common.PageResponse;
import com.geass.favorites.model.Favorites;
import com.geass.favorites.service.FavoritesCommandService;
import com.geass.favorites.service.FavoritesQueryService;

@RestController
@RequestMapping("/favorites")
public class FavoritesController {

    @Autowired
    private FavoritesQueryService favoritesQueryService;
    
    @Autowired
    private FavoritesCommandService favoritesCommandService;

    /**
     * 分页查询用户的收藏（Anime / Video / UraAnime / ThreeD 混合）
     * 请求体需要：userID, page, pageSize
     */
    @PostMapping("/list")
    public BaseResponse<PageResponse<Object>> getUserFavorites(@RequestBody PageRequest<Integer> req) {
        PageResponse<Object> result = favoritesQueryService.getUserFavorites(
                req.getQuery(), req.getPage(), req.getPageSize()
        );
        return BaseResponse.success(result);
    }
    

    /**
     * 新增收藏
     * 请求体需要：userID + (animeID | videoID | uraAnimeID | threeDID)
     */
    @PostMapping("/add")
    public BaseResponse<Map<String, Object>> addFavorite(@RequestBody Favorites favorites) {
        int favoriteID = favoritesCommandService.addFavorite(favorites);
        if (favoriteID == -1) {
            return BaseResponse.error("已存在该收藏，不可重复添加");
        }

        Map<String, Object> result = new HashMap<>();
        result.put("favoriteID", favoriteID);
        return BaseResponse.success("新增收藏成功", result);
    }

    /**
     * 删除收藏
     * 请求体需要：userID + (animeID | videoID | uraAnimeID | threeDID)
     */
    @PostMapping("/remove")
    public BaseResponse<Map<String, Object>> removeFavorite(@RequestBody Favorites favorites) {
        boolean success = favoritesCommandService.removeFavorite(favorites);
        if (!success) {
            return BaseResponse.error("收藏不存在或删除失败");
        }

        Map<String, Object> result = new HashMap<>();
        result.put("favoriteID", favorites.getFavoriteID());
        result.put("status", "removed");
        return BaseResponse.success("删除收藏成功", result);
    }

}
