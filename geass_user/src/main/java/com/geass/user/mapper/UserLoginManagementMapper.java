package com.geass.user.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.geass.user.model.UserLoginManagement;

@Mapper
public interface UserLoginManagementMapper {

    /**
     * 插入登录记录
     */
    int insertLoginRecord(UserLoginManagement loginRecord);

    /**
     * 更新登出时间
     */
    int updateLogoutTime(@Param("loginID") int loginID);
}
