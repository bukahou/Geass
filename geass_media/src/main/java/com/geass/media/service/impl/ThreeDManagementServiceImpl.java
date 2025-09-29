package com.geass.media.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.geass.media.common.PageResponse;
import com.geass.media.mapper.ThreeDManagementMapper;
import com.geass.media.model.ThreeDManagement;
import com.geass.media.service.ThreeDManagementService;

@Service
public class ThreeDManagementServiceImpl implements ThreeDManagementService {

    @Autowired
    private ThreeDManagementMapper mapper;

    private int calcOffset(int page, int pageSize) {
        return (page - 1) * pageSize;
    }

    @Override
    public ThreeDManagement getByID(int id) {
        return mapper.selectByID(id);
    }

    @Override
    public PageResponse<ThreeDManagement> searchByCNTitle(String keyword, int page, int pageSize) {
        int total = mapper.countByCNTitleLike(keyword);
        List<ThreeDManagement> data = mapper.selectByCNTitleLike(keyword, pageSize, calcOffset(page, pageSize));
        return new PageResponse<>(total, page, pageSize, data);
    }

    @Override
    public PageResponse<ThreeDManagement> searchByJPTitle(String keyword, int page, int pageSize) {
        int total = mapper.countByJPTitleLike(keyword);
        List<ThreeDManagement> data = mapper.selectByJPTitleLike(keyword, pageSize, calcOffset(page, pageSize));
        return new PageResponse<>(total, page, pageSize, data);
    }

    @Override
    public PageResponse<ThreeDManagement> listByFavoriteCount(int page, int pageSize) {
        int total = mapper.countAll();
        List<ThreeDManagement> data = mapper.selectOrderByFavorite(pageSize, calcOffset(page, pageSize));
        return new PageResponse<>(total, page, pageSize, data);
    }

    @Override
    public PageResponse<ThreeDManagement> listByViews(int page, int pageSize) {
        int total = mapper.countAll();
        List<ThreeDManagement> data = mapper.selectOrderByViews(pageSize, calcOffset(page, pageSize));
        return new PageResponse<>(total, page, pageSize, data);
    }

    @Override
    public PageResponse<ThreeDManagement> listByReleaseDate(int page, int pageSize) {
        int total = mapper.countAll();
        List<ThreeDManagement> data = mapper.selectOrderByReleaseDate(pageSize, calcOffset(page, pageSize));
        return new PageResponse<>(total, page, pageSize, data);
    }
}
