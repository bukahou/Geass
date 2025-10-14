/**
 * ==========================================================
 * 🎬 Video 模块入口文件
 * ----------------------------------------------------------
 * - 统一导出 hooks 与组件
 * - 方便上层 import
 * ==========================================================
 */

export { useVideoData } from "./hooks/useVideoData";

// 组件导出
export { default as VideoCard } from "./components/VideoCard";
export { default as VideoGrid } from "./components/VideoGrid";
export { default as VideoDetailModal } from "./components/VideoDetailModal";
