package com.geass.media.service;

import com.geass.media.common.PageResponse;
import com.geass.media.model.VideoManagement;

public interface VideoManagementService {

    VideoManagement getByID(int id);

    PageResponse<VideoManagement> getByType(String type, int page, int pageSize);

    PageResponse<VideoManagement> searchByLeadingActors(String keyword, int page, int pageSize);

    PageResponse<VideoManagement> searchByVideoName(String keyword, int page, int pageSize);

    PageResponse<VideoManagement> listByFavoriteCount(int page, int pageSize);

    PageResponse<VideoManagement> listByViewCount(int page, int pageSize);
}
