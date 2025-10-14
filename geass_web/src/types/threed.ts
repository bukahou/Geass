/**
 * ========================================
 * 📦 ThreeD 模块类型定义
 * ========================================
 */
import type { PageResponse } from "@/types/common";

/** 分页请求结构 */
export interface ThreeDListRequest {
  page: number;
  pageSize: number;
}

/** 单个 3D 视频信息结构 */
export interface ThreeDInfo {
  threeDID: number;
  videoURL: string;
  imageURL: string;
  releaseDate: string;
  cnTitle: string;
  jpTitle: string;
  views: number;
  favoriteCount: number;
  remarks: string;
}

/** 分页响应体 */
export type ThreeDListResponse = PageResponse<ThreeDInfo>;
