// src/components/Player/VideoPlayer.tsx
"use client";
import { usePlayer } from "./PlayerContext";

export default function VideoPlayer() {
  const { src, title } = usePlayer();

  return (
    <div className="w-full bg-black rounded-xl overflow-hidden shadow-lg mt-4">
      <video
        src={src}
        controls
        className="w-full aspect-video bg-black"
        poster="/images/player_placeholder.jpg"
      >
        您的浏览器不支持 video 标签。
      </video>
      <div className="px-4 py-2 text-gray-300 text-sm bg-[#111827]/60 border-t border-white/5">
        当前播放：{title}
      </div>
    </div>
  );
}
