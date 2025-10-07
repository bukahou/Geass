package com.geass.gateway.service;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.geass.gateway.common.BaseResponse;
import com.geass.gateway.repository.FavoritesRepository;

@Service
public class FavoritesService {

    @Autowired
    private FavoritesRepository repository;

    @Autowired
    private HttpServletRequest request;

    /** 分页查询收藏 */
    public BaseResponse<Map<String, Object>> getUserFavorites(Map<String, Object> body) {
        // 从 Token 注入的 userId 里取值
        Integer userId = (Integer) request.getAttribute("userId");

        // 合并参数
        Map<String, Object> payload = new HashMap<>(body);
        payload.put("query", userId);

        return repository.getUserFavorites(payload);
    }

    /** 新增收藏 */
    public BaseResponse<Map<String, Object>> addFavorite(Map<String, Object> body) {
        Integer userId = (Integer) request.getAttribute("userId");
        Map<String, Object> payload = new HashMap<>(body);
        payload.put("userID", userId);

        return repository.addFavorite(payload);
    }
    
    /** 删除收藏 */
    public BaseResponse<Map<String, Object>> removeFavorite(Map<String, Object> body) {
        Integer userId = (Integer) request.getAttribute("userId");
        Map<String, Object> payload = new HashMap<>(body);
        payload.put("userID", userId);

        return repository.removeFavorite(payload);
    }
}
