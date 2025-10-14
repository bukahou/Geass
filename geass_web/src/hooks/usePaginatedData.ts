"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import type { PageResponse } from "@/types/common";

export interface PaginationParams<Q = any> {
  page: number;
  pageSize: number;
  query?: Q;
}

export interface PaginationFetcher<T, Q = any> {
  (params: PaginationParams<Q>): Promise<PageResponse<T>>;
}

export interface UsePaginatedDataOptions<T, Q = any> {
  fetchDefault: PaginationFetcher<T, Q>;
  fetchQuery?: PaginationFetcher<T, Q>;
  initialPage?: number;
  pageSize?: number;
  transform?: (item: T) => T;
}

export function usePaginatedData<T, Q = any>({
  fetchDefault,
  fetchQuery,
  transform,
  initialPage = 1,
  pageSize = 12,
}: UsePaginatedDataOptions<T, Q>) {
  const [items, setItems] = useState<T[]>([]);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState<Q | undefined>(undefined);

  // ✅ 保留首次加载标记，避免重复加载
  const hasLoadedRef = useRef(false);

  /** ✅ 封装通用数据加载逻辑（可复用） */
  const loadData = useCallback(
    async (isQueryMode: boolean, targetPage: number, queryParams?: Q) => {
      setLoading(true);
      try {
        const api = isQueryMode && fetchQuery ? fetchQuery : fetchDefault;
        const res = await api({
          page: targetPage,
          pageSize,
          query: queryParams,
        });

        const processed = transform ? res.data.map(transform) : res.data;
        setItems(processed);
        setTotalPages(res.totalPages);
        setPage(targetPage);
      } catch (err) {
        console.error("[usePaginatedData] fetch error:", err);
      } finally {
        setLoading(false);
      }
    },
    [fetchDefault, fetchQuery, pageSize, transform]
  );

  /** ✅ 初始化加载，仅执行一次 */
  useEffect(() => {
    if (!hasLoadedRef.current) {
      hasLoadedRef.current = true;
      loadData(false, initialPage);
    }
  }, [loadData, initialPage]);

  /** 🔍 搜索模式（手动触发） */
  const runQuery = useCallback(
    async (queryParams: Q) => {
      setQuery(queryParams);
      await loadData(true, 1, queryParams);
    },
    [loadData]
  );

  /** 📄 翻页逻辑 */
  const changePage = useCallback(
    async (nextPage: number) => {
      if (nextPage < 1 || nextPage > totalPages) return;
      await loadData(!!query, nextPage, query);
    },
    [totalPages, query, loadData]
  );

  /** ✅ 手动刷新（保持当前模式） */
  const reload = useCallback(async () => {
    await loadData(!!query, page, query);
  }, [loadData, query, page]);

  return {
    items,
    loading,
    page,
    totalPages,
    query,
    changePage,
    runQuery,
    reload,
  };
}
