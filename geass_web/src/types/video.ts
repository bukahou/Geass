/**
 * ========================================
 * 📦 Video 模块类型定义
 * ========================================
 */

import type { PageResponse } from "@/types/common";

/** 分页请求结构 */
export interface VideoListRequest {
  page: number;
  pageSize: number;
}

/** 单个视频信息结构 */
export interface VideoInfo {
  videoID: number;
  videoType: string;
  videoName: string;
  leadingActors: string;
  folderURL: string;
  imageURL: string;
  viewCount: number;
  favoriteCount: number;
}

/** 分页响应体 */
export type VideoListResponse = PageResponse<VideoInfo>;
