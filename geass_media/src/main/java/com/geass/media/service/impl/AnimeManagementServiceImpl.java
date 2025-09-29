package com.geass.media.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.geass.media.common.PageResponse;
import com.geass.media.mapper.AnimeManagementMapper;
import com.geass.media.model.AnimeManagement;
import com.geass.media.service.AnimeManagementService;

@Service
public class AnimeManagementServiceImpl implements AnimeManagementService {

    @Autowired
    private AnimeManagementMapper mapper;

    private int calcOffset(int page, int pageSize) {
        return (page - 1) * pageSize;
    }

    // 1. ID 查询（非分页）
    @Override
    public AnimeManagement getByID(int id) {
        return mapper.selectByID(id);
    }

    // 2. 类型分页查询
    @Override
    public PageResponse<AnimeManagement> getByType(String type, int page, int pageSize) {
        int total = mapper.countByType(type);
        List<AnimeManagement> data = mapper.selectByType(type, pageSize, calcOffset(page, pageSize));
        return new PageResponse<>(total, page, pageSize, data);
    }

    // 3. 中文名模糊分页查询
    @Override
    public PageResponse<AnimeManagement> searchByCNName(String keyword, int page, int pageSize) {
        int total = mapper.countByCNNameLike(keyword);
        List<AnimeManagement> data = mapper.selectByCNNameLike(keyword, pageSize, calcOffset(page, pageSize));
        return new PageResponse<>(total, page, pageSize, data);
    }

    // 4. 日文名模糊分页查询
    @Override
    public PageResponse<AnimeManagement> searchByJPName(String keyword, int page, int pageSize) {
        int total = mapper.countByJPNameLike(keyword);
        List<AnimeManagement> data = mapper.selectByJPNameLike(keyword, pageSize, calcOffset(page, pageSize));
        return new PageResponse<>(total, page, pageSize, data);
    }

    // 5. 收藏数排序分页
    @Override
    public PageResponse<AnimeManagement> listByFavoriteCount(int page, int pageSize) {
        int total = mapper.countAll();  // 不过滤类型，直接查总数
        List<AnimeManagement> data = mapper.selectOrderByFavorite(pageSize, calcOffset(page, pageSize));
        return new PageResponse<>(total, page, pageSize, data);
    }

    // 6. 观看数排序分页
    @Override
    public PageResponse<AnimeManagement> listByViewCount(int page, int pageSize) {
        int total = mapper.countAll();
        List<AnimeManagement> data = mapper.selectOrderByViewCount(pageSize, calcOffset(page, pageSize));
        return new PageResponse<>(total, page, pageSize, data);
    }

    // 7. 上映时间排序分页
    @Override
    public PageResponse<AnimeManagement> listByReleaseDate(int page, int pageSize) {
        int total = mapper.countAll();
        List<AnimeManagement> data = mapper.selectOrderByReleaseDate(pageSize, calcOffset(page, pageSize));
        return new PageResponse<>(total, page, pageSize, data);
    }
}
