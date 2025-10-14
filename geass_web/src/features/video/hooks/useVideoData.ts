"use client";

import { usePaginatedData } from "@/hooks/usePaginatedData";
import { getVideoListByView } from "@/api/video";
import { buildMediaUrls } from "@/utils/mediaUrlBuilder";
import type { VideoInfo } from "@/types/video";
import { useCallback } from "react";

/**
 * 🎬 useVideoData
 * ------------------------------------------
 * 封装视频模块的数据分页逻辑。
 */
export function useVideoData() {
  /** ✅ 用 useCallback 固定 transform 引用，防止反复创建匿名函数 */
  const transformVideo = useCallback(
    (item: VideoInfo) => buildMediaUrls({ ...item, episodes: 1 }),
    []
  );

  const {
    items: videos,
    loading,
    page,
    totalPages,
    changePage,
    reload,
  } = usePaginatedData<VideoInfo>({
    fetchDefault: getVideoListByView,
    transform: transformVideo,
    pageSize: 20,
  });

  return {
    videos,
    loading,
    page,
    totalPages,
    changePage,
    reload,
  };
}
