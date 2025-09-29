package com.geass.gateway.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.geass.gateway.common.BaseResponse;
import com.geass.gateway.service.VideoService;
import com.geass.gateway.util.RoleChecker;

@RestController
@RequestMapping("/api/video")
public class VideoGatewayController {

    @Autowired
    private VideoService videoService;

    @Autowired
    private RoleChecker roleChecker;

    /** 在所有方法前统一检查角色 */
    @ModelAttribute
    public void checkRoleBefore() {
        roleChecker.checkRole(2);
    }

    @PostMapping("/id")
    public BaseResponse<Map<String, Object>> getByID(@RequestBody Object req) {
        return videoService.getByID(req);
    }

    @PostMapping("/type")
    public BaseResponse<Map<String, Object>> getByType(@RequestBody Object req) {
        return videoService.getByType(req);
    }

    @PostMapping("/search/actors")
    public BaseResponse<Map<String, Object>> searchActors(@RequestBody Object req) {
        return videoService.searchActors(req);
    }

    @PostMapping("/search/name")
    public BaseResponse<Map<String, Object>> searchName(@RequestBody Object req) {
        return videoService.searchName(req);
    }

    @PostMapping("/sort/favorite")
    public BaseResponse<Map<String, Object>> sortByFavorite(@RequestBody Object req) {
        return videoService.sortByFavorite(req);
    }

    @PostMapping("/sort/view")
    public BaseResponse<Map<String, Object>> sortByView(@RequestBody Object req) {
        return videoService.sortByView(req);
    }
}
