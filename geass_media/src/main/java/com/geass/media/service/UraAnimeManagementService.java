package com.geass.media.service;

import com.geass.media.common.PageResponse;
import com.geass.media.model.UraAnimeManagement;

public interface UraAnimeManagementService {

    UraAnimeManagement getByID(int id);

    PageResponse<UraAnimeManagement> searchByTitle(String keyword, int page, int pageSize);

    PageResponse<UraAnimeManagement> listByFavoriteCount(int page, int pageSize);

    PageResponse<UraAnimeManagement> listByViewCount(int page, int pageSize);

    PageResponse<UraAnimeManagement> listByReleaseDate(int page, int pageSize);
}
