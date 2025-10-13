"use client";

import AnimeGrid from "@/features/anime/components/AnimeGrid";
import { useAnimeData } from "@/features/anime/hooks/useAnimeData";
import HeroBanner from "@/components/HeroBanner";

export default function AnimePage() {
  const { animes, loading, page, totalPages, changePage } = useAnimeData();

  return (
    <div className="min-h-screen bg-[#0e1319] text-gray-100">
      {/* ✅ 顶部横幅（全宽背景） */}
      <HeroBanner
        imageSrc="/images/remu.png"
        title="热门番剧推荐"
        subtitle="精选当前最受欢迎的高分番剧，一起探索次元世界！"
      />

      {/* ✅ 主体内容区域：与横幅内容对齐 */}
      <div className="max-w-[1400px] mx-auto px-0 relative z-10">
        {loading ? (
          <p className="text-center text-gray-400 mt-10">加载中...</p>
        ) : (
          <AnimeGrid animes={animes} />
        )}

        {/* 分页控制 */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={() => changePage(page - 1)}
            disabled={page <= 1}
            className={`px-4 py-2 rounded-lg border transition ${
              page <= 1
                ? "text-gray-500 border-gray-700 cursor-not-allowed"
                : "text-blue-400 border-blue-500 hover:bg-blue-500/10"
            }`}
          >
            上一页
          </button>

          <span className="text-gray-400 text-sm">
            第 {page} / {totalPages} 页
          </span>

          <button
            onClick={() => changePage(page + 1)}
            disabled={page >= totalPages}
            className={`px-4 py-2 rounded-lg border transition ${
              page >= totalPages
                ? "text-gray-500 border-gray-700 cursor-not-allowed"
                : "text-blue-400 border-blue-500 hover:bg-blue-500/10"
            }`}
          >
            下一页
          </button>
        </div>
      </div>
    </div>
  );
}
