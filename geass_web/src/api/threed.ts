/**
 * ==========================================================
 * 🎬 ThreeD 模块接口封装
 * ----------------------------------------------------------
 * - 按观看量排序的 3D 视频分页列表
 * ==========================================================
 */

import service from "./core/request";
import type { ThreeDInfo, ThreeDListRequest } from "@/types/threed";
import type { PageResponse } from "@/types/common";

type ThreeDListResponse = PageResponse<ThreeDInfo>;

/**
 * ==========================================================
 * 📡 getThreeDListByView
 * ----------------------------------------------------------
 * @description 获取按观看量排序的 3D 视频分页列表
 * @param params ThreeDListRequest 分页参数
 * @returns Promise<ThreeDListResponse>
 * ==========================================================
 */
export async function getThreeDListByView(
  params: ThreeDListRequest
): Promise<ThreeDListResponse> {
  const url = "/api/threed/sort/view";
  const response = await service.post<ThreeDListResponse>(url, params);
  return response;
}
