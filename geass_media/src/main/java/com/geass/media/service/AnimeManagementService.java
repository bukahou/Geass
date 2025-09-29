package com.geass.media.service;

import com.geass.media.common.PageResponse;
import com.geass.media.model.AnimeManagement;

public interface AnimeManagementService {

    AnimeManagement getByID(int id);

    PageResponse<AnimeManagement> getByType(String type, int page, int pageSize);

    PageResponse<AnimeManagement> searchByCNName(String keyword, int page, int pageSize);

    PageResponse<AnimeManagement> searchByJPName(String keyword, int page, int pageSize);

    PageResponse<AnimeManagement> listByFavoriteCount(int page, int pageSize);

    PageResponse<AnimeManagement> listByViewCount(int page, int pageSize);

    PageResponse<AnimeManagement> listByReleaseDate(int page, int pageSize);
}

