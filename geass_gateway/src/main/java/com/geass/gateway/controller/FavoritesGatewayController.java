package com.geass.gateway.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.geass.gateway.common.BaseResponse;
import com.geass.gateway.service.FavoritesService;
import com.geass.gateway.util.RoleChecker;

@RestController
@RequestMapping("/api/favorites") // 收藏需要登录，因此放在 /api 下
public class FavoritesGatewayController {

    @Autowired
    private FavoritesService service;

    @Autowired
    private RoleChecker roleChecker;

    /** 分页查询收藏 */
    @PostMapping("/list")
    public BaseResponse<Map<String, Object>> getUserFavorites(@RequestBody Map<String, Object> req) {
        roleChecker.checkRole(1); // 至少登录用户才能查
        return service.getUserFavorites(req);
    }

    /** 新增收藏 */
    @PostMapping("/add")
    public BaseResponse<Map<String, Object>> addFavorite(@RequestBody Map<String, Object> req) {
        roleChecker.checkRole(1);
        return service.addFavorite(req);
    }

    /** 删除收藏 */
    @PostMapping("/remove")
    public BaseResponse<Map<String, Object>> removeFavorite(@RequestBody Map<String, Object> req) {
        roleChecker.checkRole(1);
        return service.removeFavorite(req);
    }
}
