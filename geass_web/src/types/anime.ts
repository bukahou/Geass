// src/types/anime.ts

/**
 * ========================================
 * 📦 Anime 模块类型定义
 * ========================================
 */

/** 分页基础请求结构 */
export interface AnimeListRequest {
  page: number; // 当前页码（从 1 开始）
  pageSize: number; // 每页数量
}

/** 按类型查询请求结构 */
export interface AnimeTypeRequest extends AnimeListRequest {
  query: {
    type: string; // 动漫类型（如 "TV" | "Movie" | "OVA"）
  };
}

/** 按关键字搜索请求结构（中/日通用） */
export interface AnimeSearchRequest extends AnimeListRequest {
  query: {
    keyword: string; // 搜索关键字（中文或日文）
  };
}

/** 单条动漫信息结构 */
export interface AnimeInfo {
  animeID: number;
  animeType: string;
  cnName: string;
  jpName: string;
  description: string;
  folderURL: string;
  imageURL: string;
  episodes: number;
  favoriteCount: number;
  viewCount: number;
  releaseDate: string;
}

/** 通用分页响应结构 */
export interface PageResponse<T> {
  total: number; // 数据总数
  page: number; // 当前页码
  pageSize: number; // 每页条数
  totalPages: number; // 总页数
  data: T[]; // 结果数据数组
}
