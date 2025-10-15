// src/app/player/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import PlayerRoot from "@/components/Player/PlayerRoot";
import type { PlayerInitData } from "@/types/player";

export default function PlayerPage() {
  const params = useSearchParams();
  const dataParam = params.get("data");

  if (!dataParam) {
    return <div className="text-center text-gray-400 py-20">❌ 无播放数据</div>;
  }

  // 解码 + 解析参数
  let init: PlayerInitData | null = null;
  try {
    init = JSON.parse(decodeURIComponent(dataParam));
  } catch (err) {
    console.error("解析播放数据失败：", err);
  }

  if (!init) {
    return (
      <div className="text-center text-gray-400 py-20">⚠️ 数据格式错误</div>
    );
  }

  return <PlayerRoot init={init} />;
}
