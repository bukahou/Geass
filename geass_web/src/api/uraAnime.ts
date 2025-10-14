/**
 * ==========================================================
 * 🎬 UraAnime 模块接口封装
 * ----------------------------------------------------------
 * - 按发布日期排序的里番分页列表
 * ==========================================================
 */

import service from "./core/request";
import type { UraAnimeInfo, UraAnimeListRequest } from "@/types/uraAnime";
import type { PageResponse } from "@/types/common";

type UraAnimeListResponse = PageResponse<UraAnimeInfo>;

/**
 * ==========================================================
 * 📡 getUraAnimeListByRelease
 * ----------------------------------------------------------
 * @description 获取按发布日期排序的里番分页列表
 * @param params UraAnimeListRequest 分页参数
 * @returns Promise<UraAnimeListResponse>
 * ==========================================================
 */
export async function getUraAnimeListByRelease(
  params: UraAnimeListRequest
): Promise<UraAnimeListResponse> {
  const url = "/api/ura-anime/sort/release";
  const response = await service.post<UraAnimeListResponse>(url, params);
  return response;
}
