// src/api/anime.ts

import service from "./core/request"; // 引入自定义 Axios 实例（含拦截器）
import type {
  AnimeInfo,
  PageResponse,
  AnimeListRequest,
  AnimeTypeRequest,
  AnimeSearchRequest,
} from "@/types/anime";

// 为了提高可读性，这里定义统一的返回类型别名
type AnimeListResponse = PageResponse<AnimeInfo>;

/**
 * ==========================================================
 * @param params AnimeListRequest
 *
 * @returns Promise<AnimeListResponse>
 * ==========================================================
 */
export async function getAnimeListByRelease(
  /** 请求参数：分页结构（包含页码与数量） */
  params: AnimeListRequest
): Promise</** 响应体：分页包装的 AnimeInfo 数组 */
AnimeListResponse> {
  const url = "/public/anime/sort/release";
  const response = await service.post<AnimeListResponse>(url, params);
  return response;
}

/**
 * ==========================================================
 * @param params AnimeListRequest
 *
 * @returns Promise<AnimeListResponse>
 * ==========================================================
 */
export async function getAnimeListByView(
  /** 请求参数：分页结构（包含页码与数量） */
  params: AnimeListRequest
): Promise</** 响应体：分页包装的 AnimeInfo 数组 */
AnimeListResponse> {
  const url = "/public/anime/sort/view";
  const response = await service.post<AnimeListResponse>(url, params);
  return response;
}

/**
 * ==========================================================
 * @param params AnimeListRequest
 *
 * @returns Promise<AnimeListResponse>
 * ==========================================================
 */
export async function getAnimeListByFavorite(
  /** 请求参数：分页结构（包含页码与数量） */
  params: AnimeListRequest
): Promise</** 响应体：分页包装的 AnimeInfo 数组 */
AnimeListResponse> {
  const url = "/public/anime/sort/favorite";
  const response = await service.post<AnimeListResponse>(url, params);
  return response;
}

export async function getAnimeListByType(
  params: AnimeTypeRequest
): Promise<AnimeListResponse> {
  const url = "/public/anime/type";
  const response = await service.post<AnimeListResponse>(url, params);
  return response;
}

export async function searchAnimeByChinese(
  params: AnimeSearchRequest
): Promise<AnimeListResponse> {
  const url = "/public/anime/search/cn";
  const response = await service.post<AnimeListResponse>(url, params);
  return response;
}

export async function searchAnimeByJapanese(
  params: AnimeSearchRequest
): Promise<AnimeListResponse> {
  const url = "/public/anime/search/jp";
  const response = await service.post<AnimeListResponse>(url, params);
  return response;
}
