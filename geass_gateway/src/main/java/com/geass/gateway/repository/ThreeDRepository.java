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
public class ThreeDRepository {

    @Autowired
    private RemoteCaller remoteCaller;

    @Autowired
    private ServiceUrlConfig serviceUrlConfig;

    public BaseResponse<Map<String,Object>> getByID(Object body) {
        return remoteCaller.post(
            serviceUrlConfig.media(ApiPaths.THREED_ID),
            body,
            new ParameterizedTypeReference<BaseResponse<Map<String,Object>>>() {}
        );
    }

    public BaseResponse<Map<String,Object>> searchCN(Object body) {
        return remoteCaller.post(
            serviceUrlConfig.media(ApiPaths.THREED_SEARCH_CN),
            body,
            new ParameterizedTypeReference<BaseResponse<Map<String,Object>>>() {}
        );
    }

    public BaseResponse<Map<String,Object>> searchJP(Object body) {
        return remoteCaller.post(
            serviceUrlConfig.media(ApiPaths.THREED_SEARCH_JP),
            body,
            new ParameterizedTypeReference<BaseResponse<Map<String,Object>>>() {}
        );
    }

    public BaseResponse<Map<String,Object>> sortByFavorite(Object body) {
        return remoteCaller.post(
            serviceUrlConfig.media(ApiPaths.THREED_SORT_FAVORITE),
            body,
            new ParameterizedTypeReference<BaseResponse<Map<String,Object>>>() {}
        );
    }

    public BaseResponse<Map<String,Object>> sortByView(Object body) {
        return remoteCaller.post(
            serviceUrlConfig.media(ApiPaths.THREED_SORT_VIEW),
            body,
            new ParameterizedTypeReference<BaseResponse<Map<String,Object>>>() {}
        );
    }

    public BaseResponse<Map<String,Object>> sortByRelease(Object body) {
        return remoteCaller.post(
            serviceUrlConfig.media(ApiPaths.THREED_SORT_RELEASE),
            body,
            new ParameterizedTypeReference<BaseResponse<Map<String,Object>>>() {}
        );
    }
}
