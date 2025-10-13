"use client";

import { usePaginatedData } from "@/hooks/usePaginatedData";
import { getAnimeListByRelease, searchAnimeByChinese } from "@/api/anime";
import { buildMediaUrls } from "@/utils/mediaUrlBuilder";
import type { AnimeInfo } from "@/types/anime";

interface AnimeQuery {
  keyword?: string;
  type?: string;
}

export function useAnimeData() {
  // ✅ 包装一下 searchAnimeByChinese，使其参数结构兼容 Hook
  const wrappedSearch = async (params: {
    page: number;
    pageSize: number;
    query?: AnimeQuery;
  }) => {
    // 注意：AnimeSearchRequest 需要 query.keyword，一定要确保存在
    const keyword = params.query?.keyword || "";
    return await searchAnimeByChinese({
      page: params.page,
      pageSize: params.pageSize,
      query: { keyword },
    });
  };

  const {
    items: animes,
    loading,
    page,
    totalPages,
    runQuery,
    changePage,
    loadDefault,
  } = usePaginatedData<AnimeInfo, AnimeQuery>({
    fetchDefault: getAnimeListByRelease,
    fetchQuery: wrappedSearch, // ✅ 使用包装函数
    transform: buildMediaUrls,
    pageSize: 20,
  });

  return {
    animes,
    loading,
    page,
    totalPages,
    search: (keyword: string) => runQuery({ keyword }),
    changePage,
    reload: loadDefault,
  };
}
