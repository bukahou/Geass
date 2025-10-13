"use client";

import { useState, useCallback, useEffect } from "react";
import type { PageResponse } from "@/types/anime"; // 可换成通用 pagination.ts

/**
 * =========================================
 * 🧩 usePaginatedData Hook（通用分页管理）
 * -----------------------------------------
 * 💡 适用于任何返回 PageResponse<T> 的接口。
 * - 可选支持搜索、筛选、自定义查询函数
 * - 不限定业务类型（Anime / Video / User / Log）
 * =========================================
 */

export interface PaginationParams<Q = any> {
  page: number;
  pageSize: number;
  query?: Q;
}

export interface PaginationFetcher<T, Q = any> {
  (params: PaginationParams<Q>): Promise<PageResponse<T>>;
}

export interface UsePaginatedDataOptions<T, Q = any> {
  /** 🔹 默认加载函数（必需） */
  fetchDefault: PaginationFetcher<T, Q>;

  /** 🔹 通用查询函数（可选，用于搜索、筛选、条件查询） */
  fetchQuery?: PaginationFetcher<T, Q>;

  /** 🔹 初始页码（默认 1） */
  initialPage?: number;

  /** 🔹 每页数量（默认 12） */
  pageSize?: number;

  /** 🔹 数据转换函数（例如补全 URL，可选） */
  transform?: (item: T) => T;
}

export function usePaginatedData<T, Q = any>({
  fetchDefault,
  fetchQuery,
  transform,
  initialPage = 1,
  pageSize = 12,
}: UsePaginatedDataOptions<T, Q>) {
  /** 📦 数据状态 */
  const [items, setItems] = useState<T[]>([]);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  /** 🔍 当前查询参数（可被任意模块复用） */
  const [query, setQuery] = useState<Q | undefined>(undefined);

  /** 🚀 默认加载 */
  const loadDefault = useCallback(async () => {
    setLoading(true);
    try {
      const { data, totalPages } = await fetchDefault({ page, pageSize });
      setItems(transform ? data.map(transform) : data);
      setTotalPages(totalPages);
    } finally {
      setLoading(false);
    }
  }, [fetchDefault, page, pageSize, transform]);

  /** 🔍 通用查询（支持搜索 / 筛选 / 复杂条件） */
  const runQuery = useCallback(
    async (queryParams: Q) => {
      if (!fetchQuery) return;
      setQuery(queryParams);
      setLoading(true);
      try {
        const { data, totalPages } = await fetchQuery({
          page: 1,
          pageSize,
          query: queryParams,
        });
        setItems(transform ? data.map(transform) : data);
        setTotalPages(totalPages);
        setPage(1);
      } finally {
        setLoading(false);
      }
    },
    [fetchQuery, pageSize, transform]
  );

  /** 📄 翻页（自动判断是否处于查询模式） */
  const changePage = useCallback(
    async (nextPage: number) => {
      if (nextPage < 1 || nextPage > totalPages) return;
      setPage(nextPage);
      setLoading(true);
      try {
        let result;
        if (query && fetchQuery) {
          result = await fetchQuery({ page: nextPage, pageSize, query });
        } else {
          result = await fetchDefault({ page: nextPage, pageSize });
        }
        setItems(transform ? result.data.map(transform) : result.data);
        setTotalPages(result.totalPages);
      } finally {
        setLoading(false);
      }
    },
    [query, fetchQuery, fetchDefault, pageSize, totalPages, transform]
  );

  /** 初始化加载一次 */
  useEffect(() => {
    loadDefault();
  }, [loadDefault]);

  /** 对外暴露的统一接口 */
  return {
    // 数据状态
    items,
    loading,
    page,
    totalPages,
    query,

    // 方法
    loadDefault,
    runQuery,
    changePage,
  };
}
