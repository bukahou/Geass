package com.geass.favorites.common;

import lombok.Data;

@Data
public class PageRequest<T> {
    private int page;
    private int pageSize;
    private T query;
}
