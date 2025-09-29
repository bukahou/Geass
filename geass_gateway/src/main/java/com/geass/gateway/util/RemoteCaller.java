package com.geass.gateway.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.geass.gateway.common.BaseResponse;

/**
 * RemoteCaller
 * --------------------------------
 * 封装对下游服务的请求，自动解包 BaseResponse，
 * 使 Service 层能直接操作 data。
 */
@Component
public class RemoteCaller {

    @Autowired
    private RestTemplate restTemplate;

    /**
     * 统一 POST 请求
     * @param url 下游服务地址
     * @param request 请求体
     * @param typeRef data 的类型（泛型保留）
     * @return 下游服务返回的 data，已经经过 BaseResponse 剥离
     */
    public <T> BaseResponse<T> post(String url, Object request, ParameterizedTypeReference<BaseResponse<T>> typeRef) {
        ResponseEntity<BaseResponse<T>> resp = restTemplate.exchange(
                url,
                HttpMethod.POST,
                new HttpEntity<>(request),
                typeRef
        );

        BaseResponse<T> body = resp.getBody();
        if (body == null) {
            return BaseResponse.error(50000, "下游响应为空");
        }
        return body;
    }

    /**
     * 统一 GET 请求
     * @param url 下游服务地址
     * @param typeRef data 的类型
     * @return 下游服务返回的 data，已经经过 BaseResponse 剥离
     */
    public <T> BaseResponse<T> get(String url, ParameterizedTypeReference<BaseResponse<T>> typeRef) {
        ResponseEntity<BaseResponse<T>> resp = restTemplate.exchange(
                url,
                HttpMethod.GET,
                null,
                typeRef
        );

        BaseResponse<T> body = resp.getBody();
        if (body == null) {
            return BaseResponse.error(50000, "下游响应为空");
        }
        return body;
    }
}
