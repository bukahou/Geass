package com.geass.gateway.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.geass.gateway.common.BaseResponse;
import com.geass.gateway.service.UraAnimeService;
import com.geass.gateway.util.RoleChecker;

@RestController
@RequestMapping("/api/ura-anime")  
public class UraAnimeGatewayController {

    @Autowired
    private UraAnimeService uraAnimeService;
    
    @Autowired
    private RoleChecker roleChecker;

    /** 在所有方法前统一检查角色 */
    @ModelAttribute
    public void checkRoleBefore() {
        roleChecker.checkRole(2);
    }

    @PostMapping("/id")
    public BaseResponse<Map<String, Object>> getByID(@RequestBody Object req) {
        return uraAnimeService.getByID(req);
    }

    @PostMapping("/search/title")
    public BaseResponse<Map<String, Object>> searchByTitle(@RequestBody Object req) {
        return uraAnimeService.searchByTitle(req);
    }

    @PostMapping("/sort/favorite")
    public BaseResponse<Map<String, Object>> sortByFavorite(@RequestBody Object req) {
        return uraAnimeService.sortByFavorite(req);
    }

    @PostMapping("/sort/view")
    public BaseResponse<Map<String, Object>> sortByView(@RequestBody Object req) {
        return uraAnimeService.sortByView(req);
    }

    @PostMapping("/sort/release")
    public BaseResponse<Map<String, Object>> sortByRelease(@RequestBody Object req) {
        return uraAnimeService.sortByRelease(req);
    }
}
