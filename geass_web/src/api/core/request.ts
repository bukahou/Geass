// src/api/core/request.ts
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { apiConfig } from "./config";
import type { BaseResponse } from "@/types/common";
import { useUserStore } from "@/store/userStore";

/**
 * =====================================
 * 📦 自定义 Axios 实例类型
 * -------------------------------------
 * 让 axios.post<T>() 返回 Promise<T>（不是 AxiosResponse<T>）
 * =====================================
 */
interface CustomAxiosInstance {
  post<T = any>(url: string, data?: any): Promise<T>;
  get<T = any>(url: string): Promise<T>;
}

/**
 * =====================================
 * 🧩 创建基础 Axios 实例
 * =====================================
 */
const axiosInstance: AxiosInstance = axios.create({
  baseURL: apiConfig.baseURL,
  timeout: 5000,
});

/**
 * =====================================
 * 🛠️ 请求拦截器
 * - 自动注入 Token
 * =====================================
 */
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * =====================================
 * 🎯 响应拦截器
 * - 自动解包返回数据
 * - 统一处理业务错误 / Token 过期
 * =====================================
 */
let isHandlingAuthError = false;

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data as BaseResponse<any>;

    if (res.code === 20000) {
      return res.data; // ✅ 自动解包为业务数据部分
    }

    if (res.code === 40100 || res.code === 40001) {
      handleTokenExpired(res.message);
      return Promise.reject(new Error(res.message));
    }

    return Promise.reject(new Error(res.message || "请求失败"));
  },
  (error) => {
    if (error.response?.status === 401) {
      handleTokenExpired("登录已过期，请重新登录");
    }
    return Promise.reject(error);
  }
);

/**
 * =====================================
 * 🔐 Token 过期处理逻辑
 * =====================================
 */
function handleTokenExpired(msg: string) {
  if (isHandlingAuthError) return;
  isHandlingAuthError = true;

  const store = useUserStore.getState();
  store.clearUser();

  alert(msg || "登录状态已失效，请重新登录。");
}

/**
 * =====================================
 * 🚀 封装为自定义 Axios 实例（核心修复）
 * =====================================
 */
const service: CustomAxiosInstance = {
  post: async <T = any>(url: string, data?: any): Promise<T> => {
    const res = await axiosInstance.post<any, T>(url, data);
    return res; // ✅ 这里的 res 已经是 BaseResponse.data
  },
  get: async <T = any>(url: string): Promise<T> => {
    const res = await axiosInstance.get<any, T>(url);
    return res;
  },
};

export default service;
