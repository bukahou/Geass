package com.geass.gateway.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.geass.gateway.common.BaseResponse;
import com.geass.gateway.repository.AnimeRepository;

@Service
public class AnimeService {

    @Autowired
    private AnimeRepository animeRepository;

    public BaseResponse<Map<String, Object>> getByID(Object body) {
        return animeRepository.getByID(body);
    }

    public BaseResponse<Map<String, Object>> getByType(Object body) {
        return animeRepository.getByType(body);
    }

    public BaseResponse<Map<String, Object>> searchCN(Object body) {
        return animeRepository.searchCN(body);
    }

    public BaseResponse<Map<String, Object>> searchJP(Object body) {
        return animeRepository.searchJP(body);
    }

    public BaseResponse<Map<String, Object>> sortByFavorite(Object body) {
        return animeRepository.sortByFavorite(body);
    }

    public BaseResponse<Map<String, Object>> sortByView(Object body) {
        return animeRepository.sortByView(body);
    }

    public BaseResponse<Map<String, Object>> sortByRelease(Object body) {
        return animeRepository.sortByRelease(body);
    }
}
