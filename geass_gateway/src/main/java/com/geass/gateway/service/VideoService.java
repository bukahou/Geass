package com.geass.gateway.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.geass.gateway.common.BaseResponse;
import com.geass.gateway.repository.VideoRepository;

@Service
public class VideoService {

    @Autowired
    private VideoRepository videoRepository;

    public BaseResponse<Map<String, Object>> getByID(Object body) {
        return videoRepository.getByID(body);
    }

    public BaseResponse<Map<String, Object>> getByType(Object body) {
        return videoRepository.getByType(body);
    }

    public BaseResponse<Map<String, Object>> searchActors(Object body) {
        return videoRepository.searchActors(body);
    }

    public BaseResponse<Map<String, Object>> searchName(Object body) {
        return videoRepository.searchName(body);
    }

    public BaseResponse<Map<String, Object>> sortByFavorite(Object body) {
        return videoRepository.sortByFavorite(body);
    }

    public BaseResponse<Map<String, Object>> sortByView(Object body) {
        return videoRepository.sortByView(body);
    }
}
