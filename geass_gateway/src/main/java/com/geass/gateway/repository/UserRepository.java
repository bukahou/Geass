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
public class UserRepository {

    @Autowired
    private RemoteCaller remoteCaller;

    @Autowired
    private ServiceUrlConfig serviceUrlConfig;

    /** 登录 */
    public BaseResponse<Map<String, Object>> login(Map<String, String> request) {
        return remoteCaller.post(
            serviceUrlConfig.user(ApiPaths.USER_LOGIN),
            request,
            new ParameterizedTypeReference<BaseResponse<Map<String, Object>>>() {}
        );
    }

    /** 获取用户信息 */
    public BaseResponse<Map<String, Object>> getUserInfo(Integer userId) {
        return remoteCaller.post(
            serviceUrlConfig.user(ApiPaths.USER_INFO),
            Map.of("userId", userId), 
            new ParameterizedTypeReference<BaseResponse<Map<String, Object>>>() {}
        );
    }


    /** 更新用户权限 */
    public BaseResponse<Map<String, Object>> updateUserRole(Map<String, Integer> request) {
        return remoteCaller.post(
            serviceUrlConfig.user(ApiPaths.USER_UPDATE_ROLE),
            request,
            new ParameterizedTypeReference<BaseResponse<Map<String, Object>>>() {}
        );
    }
}

