package com.geass.gateway.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.geass.gateway.common.BaseResponse;
import com.geass.gateway.service.ThreeDService;
import com.geass.gateway.util.RoleChecker;

@RestController
@RequestMapping("/api/threed")
public class ThreeDGatewayController {

    @Autowired
    private ThreeDService service;
    
    @Autowired
    private RoleChecker roleChecker;

    /** 在所有方法前统一检查角色 */
    @ModelAttribute
    public void checkRoleBefore() {
        roleChecker.checkRole(2);
    }

    @PostMapping("/id")
    public BaseResponse<Map<String,Object>> getByID(@RequestBody Object req) {
        return service.getByID(req);
    }

    @PostMapping("/search/cn")
    public BaseResponse<Map<String,Object>> searchCN(@RequestBody Object req) {
        return service.searchCN(req);
    }

    @PostMapping("/search/jp")
    public BaseResponse<Map<String,Object>> searchJP(@RequestBody Object req) {
        return service.searchJP(req);
    }

    @PostMapping("/sort/favorite")
    public BaseResponse<Map<String,Object>> sortByFavorite(@RequestBody Object req) {
        return service.sortByFavorite(req);
    }

    @PostMapping("/sort/view")
    public BaseResponse<Map<String,Object>> sortByView(@RequestBody Object req) {
        return service.sortByView(req);
    }

    @PostMapping("/sort/release")
    public BaseResponse<Map<String,Object>> sortByRelease(@RequestBody Object req) {
        return service.sortByRelease(req);
    }
}
