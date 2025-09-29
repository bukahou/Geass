package com.geass.gateway.util;

import jakarta.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class RoleChecker {

    @Autowired
    private HttpServletRequest request;

    /**
     * 检查当前用户是否具备至少指定角色
     * @param minRole 最低角色等级
     */
    public void checkRole(int minRole) {
        Integer role = (Integer) request.getAttribute("role");
        if (role == null || role < minRole) {
            throw new RuntimeException("权限不足");
        }
    }
}
