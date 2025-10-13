"use client";

import AnimeFilterBar from "@/features/anime/components/AnimeFilterBar";
import AnimeGrid from "@/features/anime/components/AnimeGrid";
import { useAnimeData } from "@/features/anime/hooks/useAnimeData";

export default function AnimePage() {
  const { animes, loading, page, totalPages, search, changePage } =
    useAnimeData();

  return (
    <div className="min-h-screen bg-transparent py-8 text-gray-100">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* 顶部筛选栏 */}
        {/* <AnimeFilterBar onSearch={search} onTypeChange={filterByType} /> */}

        {/* 加载中状态 */}
        {loading ? (
          <p className="text-center text-gray-400 mt-10">加载中...</p>
        ) : (
          <AnimeGrid animes={animes} />
        )}

        {/* 分页控制（可选） */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={() => changePage(page - 1)}
            disabled={page <= 1}
            className={`px-4 py-2 rounded-lg border ${
              page <= 1
                ? "text-gray-400 border-gray-200"
                : "text-blue-600 border-blue-400 hover:bg-blue-50"
            }`}
          >
            上一页
          </button>

          <span className="text-gray-600 text-sm">
            第 {page} / {totalPages} 页
          </span>

          <button
            onClick={() => changePage(page + 1)}
            disabled={page >= totalPages}
            className={`px-4 py-2 rounded-lg border ${
              page >= totalPages
                ? "text-gray-400 border-gray-200"
                : "text-blue-600 border-blue-400 hover:bg-blue-50"
            }`}
          >
            下一页
          </button>
        </div>
      </div>
    </div>
  );
}
