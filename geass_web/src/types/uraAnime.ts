/**
 * ========================================
 * 📦 UraAnime 模块类型定义
 * ========================================
 */
import type { PageResponse } from "@/types/common";

/** 分页请求结构 */
export interface UraAnimeListRequest {
  page: number;
  pageSize: number;
}

/** 单个里番信息结构 */
export interface UraAnimeInfo {
  uraAnimeID: number;
  videoURL: string;
  imageURL: string;
  releaseDate: string;
  title: string;
  views: number;
  favoriteCount: number;
  remarks: string;
}

/** 分页响应体 */
export type UraAnimeListResponse = PageResponse<UraAnimeInfo>;
