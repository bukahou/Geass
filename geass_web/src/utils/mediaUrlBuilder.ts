// ==========================================================
// 🌐 Media URL 构建工具函数（无 "../" 清理）
// ==========================================================

/** 🌍 全局基础域名（可根据部署环境调整） */
const BASE_URL = "https://atlhyper.com";

/**
 * 📸 拼接完整的图片 URL
 *
 * @param relativePath string 例如 "/animeimg/Sousou-no-Frieren.jpg"
 * @returns string 完整图片地址，例如 "https://atlhyper.com/animeimg/Sousou-no-Frieren.jpg"
 */
export function buildImageUrl(relativePath: string): string {
  if (!relativePath) return "";
  return `${BASE_URL}${relativePath}`;
}

/**
 * 🎞️ 生成多集视频 URL 数组
 *
 * @param baseFolder string 视频基础路径（如 "/videos/tv/xxx/xxx-"）
 * @param episodes number 总集数（用于生成 01~xx.mp4）
 * @returns string[] 每一集完整视频地址
 */
export function buildVideoUrls(baseFolder: string, episodes: number): string[] {
  if (!baseFolder || episodes <= 0) return [];
  const normalized = `${BASE_URL}${baseFolder}`;
  return Array.from({ length: episodes }, (_, i) => {
    const num = (i + 1).toString().padStart(2, "0");
    return `${normalized}${num}.mp4`;
  });
}

/**
 * 🧩 综合构建函数
 * ----------------------------------------------------------
 * 同时生成图片 URL + 视频 URL 数组。
 * 适合直接在 API 响应后统一处理 Anime / Video / 3D 模块的数据结构。
 */
export function buildMediaUrls<
  T extends { imageURL: string; folderURL: string; episodes: number }
>(obj: T): T & { fullImageURL: string; videoURLs: string[] } {
  return {
    ...obj,
    fullImageURL: buildImageUrl(obj.imageURL),
    videoURLs: buildVideoUrls(obj.folderURL, obj.episodes),
  };
}
