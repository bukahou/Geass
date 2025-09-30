import service from "./core/request";
import type { AnimePage, PageParams } from "@/types/anime";

/**
 * 按发布时间排序获取动漫列表
 * @param params 分页参数
 * @returns Promise<AnimePage>
 */
export function getAnimeByRelease(params: PageParams): Promise<AnimePage> {
  return service.post<AnimePage>("/public/anime/sort/release", params);
}
