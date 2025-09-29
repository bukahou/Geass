package com.geass.media.service;

import com.geass.media.common.PageResponse;
import com.geass.media.model.ThreeDManagement;

public interface ThreeDManagementService {

    ThreeDManagement getByID(int id);

    PageResponse<ThreeDManagement> searchByCNTitle(String keyword, int page, int pageSize);

    PageResponse<ThreeDManagement> searchByJPTitle(String keyword, int page, int pageSize);

    PageResponse<ThreeDManagement> listByFavoriteCount(int page, int pageSize);

    PageResponse<ThreeDManagement> listByViews(int page, int pageSize);

    PageResponse<ThreeDManagement> listByReleaseDate(int page, int pageSize);
}
