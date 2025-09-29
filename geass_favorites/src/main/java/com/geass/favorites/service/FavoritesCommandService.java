package com.geass.favorites.service;

import com.geass.favorites.model.Favorites;

public interface FavoritesCommandService {

    /**
     * 新增收藏
     * @param favorites 收藏实体（只允许一个资源ID有值）
     * @return 插入后的收藏ID
     */
    int addFavorite(Favorites favorites);

    /**
     * 删除收藏
     * @param favorites 收藏实体（需要 userID + 资源ID，用于删除和更新对应表）
     * @return 是否删除成功
     */
    boolean removeFavorite(Favorites favorites);
}
