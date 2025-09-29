package com.geass.media.dto;

import lombok.Data;

@Data
public class AnimeQuery {
    private Integer id;         // ID 查询
    private String type;        // 类型查询
    private String keyword;     // 模糊查询
}