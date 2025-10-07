package com.geass.gateway.service;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.geass.gateway.common.BaseResponse;
import com.geass.gateway.repository.PlaybackHistoryRepository;

@Service
public class PlaybackHistoryService {

    @Autowired
    private PlaybackHistoryRepository repository;

    @Autowired
    private HttpServletRequest request;

    /** 分页查询播放历史 */
    public BaseResponse<Map<String, Object>> getUserHistory(Map<String, Object> body) {
        Integer userId = (Integer) request.getAttribute("userId");

        Map<String, Object> payload = new HashMap<>(body);
        payload.put("query", userId);

        return repository.getUserHistory(payload);
    }

    /** 新增或更新播放历史 */
    public BaseResponse<Map<String, Object>> addOrUpdateHistory(Map<String, Object> body) {
        Integer userId = (Integer) request.getAttribute("userId");

        Map<String, Object> payload = new HashMap<>(body);
        payload.put("userID", userId);

        return repository.addOrUpdateHistory(payload);
    }
}
