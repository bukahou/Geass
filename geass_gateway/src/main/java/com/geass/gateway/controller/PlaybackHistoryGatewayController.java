package com.geass.gateway.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.geass.gateway.common.BaseResponse;
import com.geass.gateway.service.PlaybackHistoryService;
import com.geass.gateway.util.RoleChecker;

@RestController
@RequestMapping("/api/history")
public class PlaybackHistoryGatewayController {

    @Autowired
    private PlaybackHistoryService service;

    @Autowired
    private RoleChecker roleChecker;

    /** 分页查询用户播放历史 */
    @PostMapping("/list")
    public BaseResponse<Map<String, Object>> getUserHistory(@RequestBody Map<String, Object> req) {
        roleChecker.checkRole(1);
        return service.getUserHistory(req);
    }

    /** 新增或更新播放历史 */
    @PostMapping("/play")
    public BaseResponse<Map<String, Object>> addOrUpdateHistory(@RequestBody Map<String, Object> req) {
        roleChecker.checkRole(1);
        return service.addOrUpdateHistory(req);
    }
}
