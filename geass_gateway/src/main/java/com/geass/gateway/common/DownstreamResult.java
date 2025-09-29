package com.geass.gateway.common;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/** 下游返回的通用中转结果（内部使用，不直接对外） */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DownstreamResult<T> {
    private int code;
    private String message;
    private T data;
}
