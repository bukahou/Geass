// ==========================================================
// 🎴 AnimeCard.tsx
// ----------------------------------------------------------
// 单个动漫卡片组件。
// - 展示封面、标题、集数、发布日期等核心信息。
// - 响应点击事件（通常跳转到详情页）。
// - 视觉效果轻盈、响应式自适应，适合网格布局。
// ==========================================================

"use client";

import Image from "next/image"; // ✅ Next.js 内置图片优化
import type { AnimeInfo } from "@/types/anime";
import { buildImageUrl } from "@/utils/mediaUrlBuilder";

/**
 * ==========================================
 * 📘 Props 接口定义
 * ------------------------------------------
 * anime: 动漫信息对象，来自后端 API。
 * onClick?: 点击回调函数，可选，用于跳转或交互。
 * ==========================================
 */
interface AnimeCardProps {
  anime: AnimeInfo; // 动漫数据（含 imageURL、cnName、episodes、releaseDate 等）
  onClick?: (id: number) => void; // 点击事件回调
}

/**
 * ==========================================
 * 🎨 AnimeCard 组件
 * ------------------------------------------
 * 渲染单张动漫卡片，包含：
 *  - 图片封面
 *  - 中文/日文标题
 *  - 集数 + 发布日期
 * ==========================================
 */
export default function AnimeCard({ anime, onClick }: AnimeCardProps) {
  /** 🖼️ 拼接完整封面图 URL */
  const imageUrl = buildImageUrl(anime.imageURL);

  return (
    <div
      className="
        group
        bg-white
        rounded-xl
        overflow-hidden
        shadow-md
        hover:shadow-xl
        hover:-translate-y-1
        transition-all duration-200
        cursor-pointer
      "
      onClick={() => onClick?.(anime.animeID)} // 点击回调（若存在）
    >
      {/* ===============================
          🖼️ 封面图片区域
          =============================== */}
      <div className="relative w-full aspect-[3/4]">
        <Image
          src={imageUrl}
          alt={anime.cnName}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:brightness-110"
        />
      </div>

      {/* ===============================
          📋 信息区域
          =============================== */}
      <div className="p-3">
        {/* 中文标题（主标题） */}
        <h3 className="text-base font-semibold truncate text-gray-800">
          {anime.cnName}
        </h3>

        {/* 日文标题（副标题） */}
        <p className="text-xs text-gray-500 truncate">{anime.jpName}</p>

        {/* 底部：集数 + 日期 */}
        <div
          className="
            flex justify-between
            text-xs text-gray-400
            mt-1
          "
        >
          {/* 显示集数，例如 “共 11 集” */}
          <span className="group-hover:text-gray-600 transition-colors">
            共 {anime.episodes} 集
          </span>

          {/* 发布日期 */}
          <span className="group-hover:text-gray-600 transition-colors">
            {anime.releaseDate}
          </span>
        </div>
      </div>
    </div>
  );
}
