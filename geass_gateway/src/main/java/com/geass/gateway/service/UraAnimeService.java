package com.geass.gateway.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.geass.gateway.common.BaseResponse;
import com.geass.gateway.repository.UraAnimeRepository;

@Service
public class UraAnimeService {

    @Autowired
    private UraAnimeRepository uraAnimeRepository;

    public BaseResponse<Map<String, Object>> getByID(Object body) {
        return uraAnimeRepository.getByID(body);
    }

    public BaseResponse<Map<String, Object>> searchByTitle(Object body) {
        return uraAnimeRepository.searchByTitle(body);
    }

    public BaseResponse<Map<String, Object>> sortByFavorite(Object body) {
        return uraAnimeRepository.sortByFavorite(body);
    }

    public BaseResponse<Map<String, Object>> sortByView(Object body) {
        return uraAnimeRepository.sortByView(body);
    }

    public BaseResponse<Map<String, Object>> sortByRelease(Object body) {
        return uraAnimeRepository.sortByRelease(body);
    }
}
