// ==========================================================
// src/api/video.ts
// ----------------------------------------------------------
// 🎬 Video 模块接口封装
// - 按观看量排序的视频分页列表
// - 结构完全对齐 Anime 模块写法
// ==========================================================

import service from "./core/request"; // ✅ 统一封装的 Axios 实例
import type { VideoInfo, VideoListRequest } from "@/types/video";
import type { PageResponse } from "@/types/common";

/** 定义返回数据类型别名 */
type VideoListResponse = PageResponse<VideoInfo>;

/**
 * ==========================================================
 * 📡 getVideoListByView
 * ----------------------------------------------------------
 * @description 获取按观看量排序的视频分页列表
 * @param params VideoListRequest  分页请求参数（page, pageSize）
 * @returns Promise<VideoListResponse>  包含分页信息与视频数组
 * ==========================================================
 */
export async function getVideoListByView(
  params: VideoListRequest
): Promise<VideoListResponse> {
  // ✅ 后端接口路径（由后端定义）
  const url = "/api/video/sort/view";

  // ✅ 使用统一封装的 POST 方法
  const response = await service.post<VideoListResponse>(url, params);

  // ✅ 返回分页结构（data + total + totalPages + ...）
  return response;
}
