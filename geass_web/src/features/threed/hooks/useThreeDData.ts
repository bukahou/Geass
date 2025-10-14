"use client";

import { usePaginatedData } from "@/hooks/usePaginatedData";
import { getThreeDListByView } from "@/api/threed";
import { buildMediaUrls } from "@/utils/mediaUrlBuilder";
import type { ThreeDInfo } from "@/types/threed";
import { useCallback } from "react";

/**
 * 🎬 useThreeDData
 * ------------------------------------------
 * 封装 3D 模块的数据分页逻辑。
 */
export function useThreeDData() {
  const transformThreeD = useCallback((item: ThreeDInfo) => {
    const mapped = {
      folderURL: item.videoURL,
      imageURL: item.imageURL,
      episodes: 1,
    };
    return {
      ...item,
      ...buildMediaUrls(mapped),
    };
  }, []);

  const {
    items: threeDs,
    loading,
    page,
    totalPages,
    changePage,
    reload,
  } = usePaginatedData<ThreeDInfo>({
    fetchDefault: getThreeDListByView,
    transform: transformThreeD,
    pageSize: 20,
  });

  return {
    threeDs,
    loading,
    page,
    totalPages,
    changePage,
    reload,
  };
}
