package com.geass.gateway.config;

/**
 * ApiPaths
 * ----------------------------
 * 下游服务的接口路径常量
 * 职责：集中管理各模块 API 的相对路径
 */
public final class ApiPaths {

    private ApiPaths() {}

    //==================================================================================================================
    // User Service
    public static final String USER_LOGIN = "/auth/login";
    public static final String USER_INFO = "/user/info";
    public static final String USER_UPDATE_ROLE = "/user/update-role";
    
    //==================================================================================================================
    // Media Service
    // Anime
    public static final String ANIME_ID = "/anime/id";
    public static final String ANIME_TYPE = "/anime/type";
    public static final String ANIME_SEARCH_CN = "/anime/search/cn";
    public static final String ANIME_SEARCH_JP = "/anime/search/jp";
    public static final String ANIME_SORT_FAVORITE = "/anime/sort/favorite";
    public static final String ANIME_SORT_VIEW = "/anime/sort/view";
    public static final String ANIME_SORT_RELEASE = "/anime/sort/release";
    // Video
    public static final String VIDEO_ID = "/video/id";
    public static final String VIDEO_TYPE = "/video/type";
    public static final String VIDEO_SEARCH_ACTORS = "/video/search/actors";
    public static final String VIDEO_SEARCH_NAME = "/video/search/name";
    public static final String VIDEO_SORT_FAVORITE = "/video/sort/favorite";
    public static final String VIDEO_SORT_VIEW = "/video/sort/view";
    
    // ura-anime
    public static final String URA_ANIME_ID = "/ura-anime/id";
    public static final String URA_ANIME_SEARCH_TITLE = "/ura-anime/search/title";
    public static final String URA_ANIME_SORT_FAVORITE = "/ura-anime/sort/favorite";
    public static final String URA_ANIME_SORT_VIEW = "/ura-anime/sort/view";
    public static final String URA_ANIME_SORT_RELEASE = "/ura-anime/sort/release";
    
    // ThreeD
    public static final String THREED_ID = "/threed/id";
    public static final String THREED_SEARCH_CN = "/threed/search/cn";
    public static final String THREED_SEARCH_JP = "/threed/search/jp";
    public static final String THREED_SORT_FAVORITE = "/threed/sort/favorite";
    public static final String THREED_SORT_VIEW = "/threed/sort/view";
    public static final String THREED_SORT_RELEASE = "/threed/sort/release";

    
    //==================================================================================================================
    // Favorites Service
    public static final String FAVORITE_LIST = "/favorites/list";
    public static final String FAVORITE_ADD = "/favorites/add";
    public static final String FAVORITE_REMOVE = "/favorites/remove";

    //==================================================================================================================
    // History Service
    public static final String HISTORY_LIST = "/history/list";
    public static final String HISTORY_PLAY = "/history/play";
}