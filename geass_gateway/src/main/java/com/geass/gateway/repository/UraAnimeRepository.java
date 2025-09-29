package com.geass.gateway.repository;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Repository;

import com.geass.gateway.common.BaseResponse;
import com.geass.gateway.config.ApiPaths;
import com.geass.gateway.config.ServiceUrlConfig;
import com.geass.gateway.util.RemoteCaller;

@Repository
public class UraAnimeRepository {

    @Autowired
    private RemoteCaller remoteCaller;

    @Autowired
    private ServiceUrlConfig serviceUrlConfig;

    /** ID 查询 */
    public BaseResponse<Map<String, Object>> getByID(Object body) {
        return remoteCaller.post(
            serviceUrlConfig.media(ApiPaths.URA_ANIME_ID),
            body,
            new ParameterizedTypeReference<BaseResponse<Map<String, Object>>>() {}
        );
    }

    /** 标题模糊查询 */
    public BaseResponse<Map<String, Object>> searchByTitle(Object body) {
        return remoteCaller.post(
            serviceUrlConfig.media(ApiPaths.URA_ANIME_SEARCH_TITLE),
            body,
            new ParameterizedTypeReference<BaseResponse<Map<String, Object>>>() {}
        );
    }

    /** 按收藏数分页 */
    public BaseResponse<Map<String, Object>> sortByFavorite(Object body) {
        return remoteCaller.post(
            serviceUrlConfig.media(ApiPaths.URA_ANIME_SORT_FAVORITE),
            body,
            new ParameterizedTypeReference<BaseResponse<Map<String, Object>>>() {}
        );
    }

    /** 按观看数分页 */
    public BaseResponse<Map<String, Object>> sortByView(Object body) {
        return remoteCaller.post(
            serviceUrlConfig.media(ApiPaths.URA_ANIME_SORT_VIEW),
            body,
            new ParameterizedTypeReference<BaseResponse<Map<String, Object>>>() {}
        );
    }

    /** 按发行日期分页 */
    public BaseResponse<Map<String, Object>> sortByRelease(Object body) {
        return remoteCaller.post(
            serviceUrlConfig.media(ApiPaths.URA_ANIME_SORT_RELEASE),
            body,
            new ParameterizedTypeReference<BaseResponse<Map<String, Object>>>() {}
        );
    }
}
