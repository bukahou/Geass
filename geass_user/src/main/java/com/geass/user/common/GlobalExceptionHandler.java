package com.geass.user.common;

import org.springframework.jdbc.BadSqlGrammarException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    // 捕捉 SQL 错误
    @ExceptionHandler(BadSqlGrammarException.class)
    public BaseResponse<?> handleSqlError(BadSqlGrammarException e) {
        return BaseResponse.error(50000, "SQL语法错误: " + e.getRootCause().getMessage());
    }

    // 捕捉业务异常
    @ExceptionHandler(BizException.class)
    public BaseResponse<?> handleBizException(BizException e) {
        return BaseResponse.error(40000, e.getMessage());
    }

    // 捕捉所有未处理异常
    @ExceptionHandler(Exception.class)
    public BaseResponse<?> handleException(Exception e) {
        e.printStackTrace();
        return BaseResponse.error(50000, "服务器内部错误: " + e.getMessage());
    }
}
