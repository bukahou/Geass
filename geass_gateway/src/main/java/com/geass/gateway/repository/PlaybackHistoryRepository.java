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
public class PlaybackHistoryRepository {

    @Autowired
    private RemoteCaller remoteCaller;

    @Autowired
    private ServiceUrlConfig serviceUrlConfig;

    /** 分页查询播放历史 */
    public BaseResponse<Map<String, Object>> getUserHistory(Object body) {
        return remoteCaller.post(
            serviceUrlConfig.history(ApiPaths.HISTORY_LIST),
            body,
            new ParameterizedTypeReference<BaseResponse<Map<String, Object>>>() {}
        );
    }

    /** 新增或更新播放历史 */
    public BaseResponse<Map<String, Object>> addOrUpdateHistory(Object body) {
        return remoteCaller.post(
        		serviceUrlConfig.history(ApiPaths.HISTORY_PLAY),
            body,
            new ParameterizedTypeReference<BaseResponse<Map<String, Object>>>() {}
        );
    }
}
