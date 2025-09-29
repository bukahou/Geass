package com.geass.media.common;

import lombok.Data;

/**
 * 统一响应体
 * @param <T> 响应数据类型
 */
@Data
public class BaseResponse<T> {
    private int code;       // 状态码
    private String message; // 提示信息
    private T data;         // 数据（可为分页 / 单个对象 / 列表）

    // 成功
    public static <T> BaseResponse<T> success(T data) {
        BaseResponse<T> res = new BaseResponse<>();
        res.setCode(20000);
        res.setMessage("ok");
        res.setData(data);
        return res;
    }

    // 成功 + 自定义消息
    public static <T> BaseResponse<T> success(String message, T data) {
        BaseResponse<T> res = new BaseResponse<>();
        res.setCode(20000);
        res.setMessage(message);
        res.setData(data);
        return res;
    }

    // 错误
    public static <T> BaseResponse<T> error(String message) {
        BaseResponse<T> res = new BaseResponse<>();
        res.setCode(40000);
        res.setMessage(message);
        res.setData(null);
        return res;
    }

    // 自定义错误码
    public static <T> BaseResponse<T> error(int code, String message) {
        BaseResponse<T> res = new BaseResponse<>();
        res.setCode(code);
        res.setMessage(message);
        res.setData(null);
        return res;
    }
}
