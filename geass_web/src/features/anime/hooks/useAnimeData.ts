"use client";

import { useCallback } from "react";
import { usePaginatedData } from "@/hooks/usePaginatedData";
import { getAnimeListByRelease, searchAnimeByChinese } from "@/api/anime";
import { buildMediaUrls } from "@/utils/mediaUrlBuilder";
import type { AnimeInfo } from "@/types/anime";

/**
 * --------------------------------------------
 * 📦 AnimeQuery 接口
 * --------------------------------------------
 */
interface AnimeQuery {
  keyword?: string;
  type?: string;
}

/**
 * ============================================
 * 🧠 useAnimeData 主函数（稳定版）
 * ============================================
 */
export function useAnimeData() {
  /**
   * ✅ 包装搜索函数（useCallback 确保引用稳定）
   */
  const wrappedSearch = useCallback(
    async (params: { page: number; pageSize: number; query?: AnimeQuery }) => {
      const keyword = params.query?.keyword || "";
      return await searchAnimeByChinese({
        page: params.page,
        pageSize: params.pageSize,
        query: { keyword },
      });
    },
    [] // 无依赖，始终稳定
  );

  /**
   * ✅ 固定 transform 引用
   */
  const transformAnime = useCallback(buildMediaUrls, []);

  /**
   * ⚙️ 调用通用分页 Hook
   */
  const {
    items: animes,
    loading,
    page,
    totalPages,
    runQuery,
    changePage,
    reload,
  } = usePaginatedData<AnimeInfo, AnimeQuery>({
    fetchDefault: getAnimeListByRelease,
    fetchQuery: wrappedSearch,
    transform: transformAnime,
    pageSize: 20,
  });

  /**
   * 🎁 对外暴露的接口
   */
  return {
    animes,
    loading,
    page,
    totalPages,

    // 🔹 搜索动漫（中文关键字）
    search: (keyword: string) => runQuery({ keyword }),

    // 🔹 翻页
    changePage,

    // 🔹 刷新当前模式（默认/搜索）
    reload,
  };
}
