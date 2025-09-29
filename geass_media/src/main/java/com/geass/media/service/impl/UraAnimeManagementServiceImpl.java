package com.geass.media.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.geass.media.common.PageResponse;
import com.geass.media.mapper.UraAnimeManagementMapper;
import com.geass.media.model.UraAnimeManagement;
import com.geass.media.service.UraAnimeManagementService;

@Service
public class UraAnimeManagementServiceImpl implements UraAnimeManagementService {

    @Autowired
    private UraAnimeManagementMapper mapper;

    private int calcOffset(int page, int pageSize) {
        return (page - 1) * pageSize;
    }

    // 1. ID 查询
    @Override
    public UraAnimeManagement getByID(int id) {
        return mapper.selectByID(id);
    }

    // 2. 标题模糊分页查询
    @Override
    public PageResponse<UraAnimeManagement> searchByTitle(String keyword, int page, int pageSize) {
        int total = mapper.countByTitleLike(keyword);
        List<UraAnimeManagement> data = mapper.selectByTitleLike(keyword, pageSize, calcOffset(page, pageSize));
        return new PageResponse<>(total, page, pageSize, data);
    }

    // 3. 收藏数降序分页
    @Override
    public PageResponse<UraAnimeManagement> listByFavoriteCount(int page, int pageSize) {
        int total = mapper.countAll();
        List<UraAnimeManagement> data = mapper.selectOrderByFavorite(pageSize, calcOffset(page, pageSize));
        return new PageResponse<>(total, page, pageSize, data);
    }

    // 4. 观看数降序分页
    @Override
    public PageResponse<UraAnimeManagement> listByViewCount(int page, int pageSize) {
        int total = mapper.countAll();
        List<UraAnimeManagement> data = mapper.selectOrderByViewCount(pageSize, calcOffset(page, pageSize));
        return new PageResponse<>(total, page, pageSize, data);
    }

    // 5. 发行日期降序分页
    @Override
    public PageResponse<UraAnimeManagement> listByReleaseDate(int page, int pageSize) {
        int total = mapper.countAll();
        List<UraAnimeManagement> data = mapper.selectOrderByReleaseDate(pageSize, calcOffset(page, pageSize));
        return new PageResponse<>(total, page, pageSize, data);
    }
}
