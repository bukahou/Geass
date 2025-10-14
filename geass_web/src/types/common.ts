/**
 * ========================================
 * 🌐 通用分页类型定义
 * ========================================
 */

/**
 * 通用分页响应结构
 * 可用于 Anime、Video、User、Log 等模块
 */
export interface PageResponse<T> {
  total: number; // 数据总数
  page: number; // 当前页码
  pageSize: number; // 每页条数
  totalPages: number; // 总页数
  data: T[]; // 数据数组
}

export interface BaseResponse<T> {
  code: number;
  message: string;
  data: T;
}

export const SUCCESS_CODE = 20000 as const;
