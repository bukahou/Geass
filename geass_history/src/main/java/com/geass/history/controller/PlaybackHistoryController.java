package com.geass.history.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.geass.history.common.BaseResponse;
import com.geass.history.common.PageRequest;
import com.geass.history.common.PageResponse;
import com.geass.history.model.PlaybackHistory;
import com.geass.history.service.PlaybackHistoryCommandService;
import com.geass.history.service.PlaybackHistoryQueryService;

/**
 * PlaybackHistoryController
 * 播放历史控制器
 */
@RestController
@RequestMapping("/history")
public class PlaybackHistoryController {

    @Autowired
    private PlaybackHistoryQueryService playbackHistoryQueryService;

    @Autowired
    private PlaybackHistoryCommandService playbackHistoryCommandService;

    /**
     * 分页查询用户的播放历史（Anime / Video / UraAnime / ThreeD 混合）
     * 请求体需要：userID, page, pageSize
     */
    @PostMapping("/list")
    public BaseResponse<PageResponse<Object>> getUserHistory(@RequestBody PageRequest<Integer> req) {
        PageResponse<Object> result = playbackHistoryQueryService.getUserHistory(
                req.getQuery(), req.getPage(), req.getPageSize()
        );
        return BaseResponse.success(result);
    }

    /**
     * 新增或更新播放历史
     * - 如果已存在该资源的历史，则更新 PlayTime
     * - 如果不存在，则插入新记录
     * - 两种情况都会增加资源表的 view_count
     */
    @PostMapping("/play")
    public BaseResponse<Map<String, Object>> addOrUpdateHistory(@RequestBody PlaybackHistory history) {
        int historyID = playbackHistoryCommandService.addOrUpdateHistory(history);

        Map<String, Object> result = new HashMap<>();
        result.put("historyID", historyID);

        if (historyID == -1) {
            return BaseResponse.success("播放历史已存在，已更新时间戳", result);
        }
        return BaseResponse.success("新增播放历史成功", result);
    }
}