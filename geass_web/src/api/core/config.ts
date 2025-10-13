// src/api/config.ts
const isDev = process.env.NODE_ENV === "development";

// 在开发环境下，不直接访问 8080，而是走 Next.js 代理
const API_BASE_URL = isDev
  ? "" // 让 axios 走同源（Next.js 代理）
  : process.env.NEXT_PUBLIC_API_BASE_URL || "https://atlhyper.com";

export const apiConfig = {
  baseURL: API_BASE_URL,
  timeout: 5000,
};
