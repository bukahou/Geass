package com.geass.favorites.common;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import lombok.Data;

@Data
@JsonPropertyOrder({ "total", "page", "pageSize", "totalPages", "data" })
public class PageResponse<T> {
    private int total;
    private int page;
    private int pageSize;
    private int totalPages;
    private List<T> data;

    public PageResponse(int total, int page, int pageSize, List<T> data) {
        this.total = total;
        this.page = page;
        this.pageSize = pageSize;
        this.totalPages = (int) Math.ceil((double) total / pageSize);
        this.data = data;
    }
}