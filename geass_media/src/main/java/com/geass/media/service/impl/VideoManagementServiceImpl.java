package com.geass.media.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.geass.media.common.PageResponse;
import com.geass.media.mapper.VideoManagementMapper;
import com.geass.media.model.VideoManagement;
import com.geass.media.service.VideoManagementService;

@Service
public class VideoManagementServiceImpl implements VideoManagementService {

    @Autowired
    private VideoManagementMapper mapper;

    private int calcOffset(int page, int pageSize) {
        return (page - 1) * pageSize;
    }

    @Override
    public VideoManagement getByID(int id) {
        return mapper.selectByID(id);
    }

    @Override
    public PageResponse<VideoManagement> getByType(String type, int page, int pageSize) {
        int total = mapper.countByType(type);
        List<VideoManagement> data = mapper.selectByType(type, pageSize, calcOffset(page, pageSize));
        return new PageResponse<>(total, page, pageSize, data);
    }

    @Override
    public PageResponse<VideoManagement> searchByLeadingActors(String keyword, int page, int pageSize) {
        int total = mapper.countByLeadingActorsLike(keyword);
        List<VideoManagement> data = mapper.selectByLeadingActorsLike(keyword, pageSize, calcOffset(page, pageSize));
        return new PageResponse<>(total, page, pageSize, data);
    }

    @Override
    public PageResponse<VideoManagement> searchByVideoName(String keyword, int page, int pageSize) {
        int total = mapper.countByVideoNameLike(keyword);
        List<VideoManagement> data = mapper.selectByVideoNameLike(keyword, pageSize, calcOffset(page, pageSize));
        return new PageResponse<>(total, page, pageSize, data);
    }

    @Override
    public PageResponse<VideoManagement> listByFavoriteCount(int page, int pageSize) {
        int total = mapper.countAll();
        List<VideoManagement> data = mapper.selectOrderByFavorite(pageSize, calcOffset(page, pageSize));
        return new PageResponse<>(total, page, pageSize, data);
    }

    @Override
    public PageResponse<VideoManagement> listByViewCount(int page, int pageSize) {
        int total = mapper.countAll();
        List<VideoManagement> data = mapper.selectOrderByViewCount(pageSize, calcOffset(page, pageSize));
        return new PageResponse<>(total, page, pageSize, data);
    }
}
