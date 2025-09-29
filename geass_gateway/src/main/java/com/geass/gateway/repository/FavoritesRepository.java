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
public class FavoritesRepository {

    @Autowired
    private RemoteCaller remoteCaller;

    @Autowired
    private ServiceUrlConfig serviceUrlConfig;

    /** 分页查询收藏 */
    public BaseResponse<Map<String, Object>> getUserFavorites(Object body) {
        return remoteCaller.post(
            serviceUrlConfig.favorites(ApiPaths.FAVORITE_LIST),
            body,
            new ParameterizedTypeReference<BaseResponse<Map<String, Object>>>() {}
        );
    }

    /** 新增收藏 */
    public BaseResponse<Map<String, Object>> addFavorite(Object body) {
        return remoteCaller.post(
            serviceUrlConfig.favorites(ApiPaths.FAVORITE_ADD),
            body,
            new ParameterizedTypeReference<BaseResponse<Map<String, Object>>>() {}
        );
    }

    /** 删除收藏 */
    public BaseResponse<Map<String, Object>> removeFavorite(Object body) {
        return remoteCaller.post(
            serviceUrlConfig.favorites(ApiPaths.FAVORITE_REMOVE),
            body,
            new ParameterizedTypeReference<BaseResponse<Map<String, Object>>>() {}
        );
    }
}
