"use client";

import { usePaginatedData } from "@/hooks/usePaginatedData";
import { getUraAnimeListByRelease } from "@/api/uraAnime";
import { buildMediaUrls } from "@/utils/mediaUrlBuilder";
import type { UraAnimeInfo } from "@/types/uraAnime";
import { useCallback } from "react";

/**
 * 🎬 useUraAnimeData
 * ------------------------------------------
 * 封装里番模块的数据分页逻辑。
 */
export function useUraAnimeData() {
  const transformUraAnime = useCallback((item: UraAnimeInfo) => {
    // ✅ 将 videoURL 映射为 folderURL，以兼容 buildMediaUrls
    const mapped = {
      folderURL: item.videoURL, // <-- 关键点
      imageURL: item.imageURL,
      episodes: 1, // 里番通常单集
    };

    // ✅ 返回拼接结果并保留原始字段
    return {
      ...item,
      ...buildMediaUrls(mapped),
    };
  }, []);

  const {
    items: uraAnimes,
    loading,
    page,
    totalPages,
    changePage,
    reload,
  } = usePaginatedData<UraAnimeInfo>({
    fetchDefault: getUraAnimeListByRelease,
    transform: transformUraAnime,
    pageSize: 20,
  });

  return {
    uraAnimes,
    loading,
    page,
    totalPages,
    changePage,
    reload,
  };
}
