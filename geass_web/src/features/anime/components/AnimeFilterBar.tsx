// ==========================================================
// 🔍 AnimeFilterBar.tsx
// ----------------------------------------------------------
// 动漫筛选栏组件。
// - 提供类型选择（全部 / TV / Movie / OVA）
// - 提供关键字搜索输入框
// - 可与父组件配合实现筛选与搜索逻辑
// ==========================================================

"use client";

import { useState } from "react";

/**
 * ==========================================
 * 📘 Props 接口定义
 * ------------------------------------------
 * onSearch: 触发搜索的回调函数（传出关键字）
 * onTypeChange: 触发类型筛选的回调函数（传出类型）
 * ==========================================
 */
interface AnimeFilterBarProps {
  onSearch: (keyword: string) => void; // 用户点击“搜索”时执行
  onTypeChange: (type: string) => void; // 用户点击类型按钮时执行
}

/** 可选的动漫类型标签（前端静态定义） */
const TYPES = ["全部", "TV", "Movie", "OVA"];

/**
 * ==========================================
 * 🎨 AnimeFilterBar 组件
 * ------------------------------------------
 * 功能：
 *   - 支持点击选择类型（高亮当前选中项）
 *   - 支持输入关键字并执行搜索
 *   - 响应式布局（移动端折叠为纵向）
 * ==========================================
 */
export default function AnimeFilterBar({
  onSearch,
  onTypeChange,
}: AnimeFilterBarProps) {
  /** 🔹 搜索输入框的关键字状态 */
  const [keyword, setKeyword] = useState("");

  /** 🔹 当前选中的类型（默认“全部”） */
  const [activeType, setActiveType] = useState("全部");

  return (
    <div
      className="
        flex flex-col sm:flex-row        /* 移动端纵向、桌面端横向布局 */
        items-center justify-between     /* 垂直居中 + 两端对齐 */
        gap-4                            /* 各部分间距 */
        px-4 py-3                        /* 内边距 */
        bg-white                         /* 背景白色 */
        rounded-lg                       /* 圆角 */
        shadow-sm border border-gray-200  /* 轻微阴影与边框 */
        mb-4                             /* 与下方内容间距 */
      "
    >
      {/* =====================================
          🎯 类型选择按钮组
          - 点击切换选中项并通知父组件
          ===================================== */}
      <div className="flex gap-3 flex-wrap">
        {TYPES.map((t) => (
          <button
            key={t}
            onClick={() => {
              setActiveType(t); // 更新本地选中状态
              onTypeChange(t); // 通知父组件执行筛选
            }}
            className={`
              px-3 py-1 rounded-full text-sm font-medium border transition
              ${
                activeType === t
                  ? "bg-blue-500 text-white border-blue-500" // 选中状态（高亮蓝色）
                  : "text-gray-600 border-gray-300 hover:bg-gray-100" // 默认状态（灰色）
              }
            `}
          >
            {t}
          </button>
        ))}
      </div>

      {/* =====================================
          🔍 搜索输入框区域
          - 输入关键字并点击“搜索”按钮
          ===================================== */}
      <div className="flex items-center gap-2 w-full sm:w-auto">
        {/* 输入框 */}
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)} // 实时更新状态
          placeholder="输入关键字搜索..."
          className="
            border border-gray-300
            rounded-lg px-3 py-1.5
            w-full sm:w-64                 /* 移动端占满，桌面固定宽度 */
            focus:outline-none focus:ring-2 focus:ring-blue-400
          "
        />

        {/* 搜索按钮 */}
        <button
          onClick={() => onSearch(keyword.trim())} // 调用父组件搜索逻辑
          className="
            bg-blue-500 text-white
            px-4 py-1.5 rounded-lg
            hover:bg-blue-600
            transition
          "
        >
          搜索
        </button>
      </div>
    </div>
  );
}
