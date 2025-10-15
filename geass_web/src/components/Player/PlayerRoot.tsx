// src/components/Player/PlayerRoot.tsx
"use client";

import { useMemo, useState } from "react";
import { PlayerProvider } from "./PlayerContext";
import {
  PlayerHeader,
  VideoPlayer,
  EpisodeSelector,
  AnimeDescription,
} from "./index";
import type { PlayerInitData, PlayerContextValue } from "@/types/player";
import { buildVideoUrls } from "@/utils/mediaUrlBuilder";

interface PlayerRootProps {
  init: PlayerInitData; // ✅ 只接收适配后的初始化数据
}

export default function PlayerRoot({ init }: PlayerRootProps) {
  // 1) 生成所有可播 URL（一次性计算）
  const videoURLs = useMemo(
    () => buildVideoUrls(init.folderURL, init.totalEpisodes),
    [init.folderURL, init.totalEpisodes]
  );

  // 2) 管理当前集数（默认 1 或外部指定）
  const [currentEpisode, setCurrentEpisode] = useState<number>(
    init.initialEpisode ?? 1
  );

  // 3) 派生当前播放地址 & 组装 Context 值
  const ctxValue: PlayerContextValue = useMemo(() => {
    const bounded = Math.min(
      Math.max(currentEpisode, 1),
      Math.max(init.totalEpisodes, 1)
    );
    const src = videoURLs[bounded - 1] ?? videoURLs[0] ?? "";

    return {
      id: init.id,
      title: init.title,
      description: init.description,
      totalEpisodes: init.totalEpisodes,

      currentEpisode: bounded,
      videoURLs,
      src,

      setEpisode: (ep: number) => setCurrentEpisode(ep),
      next: () => setCurrentEpisode((e) => Math.min(e + 1, init.totalEpisodes)),
      prev: () => setCurrentEpisode((e) => Math.max(e - 1, 1)),
    };
  }, [
    init.id,
    init.title,
    init.description,
    init.totalEpisodes,
    videoURLs,
    currentEpisode,
  ]);

  return (
    <PlayerProvider value={ctxValue}>
      <div className="min-h-screen bg-[#0e1319] text-gray-100">
        <PlayerHeader />
        <div className="max-w-[1000px] mx-auto px-4 py-6">
          <VideoPlayer />
          <EpisodeSelector />
          <AnimeDescription />
        </div>
      </div>
    </PlayerProvider>
  );
}
