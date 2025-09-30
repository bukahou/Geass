// core/request.ts
import axios, { AxiosInstance } from "axios";
import { apiConfig } from "./config";
import type { BaseResponse } from "@/types/common";

/**
 * =====================================
 * 自定义 Axios 实例类型
 * =====================================
 * 默认情况下，axios.post<T>() 返回的是 Promise<AxiosResponse<T>>
 * 但我们在响应拦截器中已经剥离了壳，只返回 data 部分
 * 因此需要重新定义 AxiosInstance 的签名，让 post/get 返回 Promise<T>
 */
interface CustomAxiosInstance extends AxiosInstance {
  post<T = any>(url: string, data?: any): Promise<T>;
  get<T = any>(url: string): Promise<T>;
}

/**
 * =====================================
 * 创建 Axios 实例
 * =====================================
 * - baseURL: 统一 API 前缀
 * - timeout: 超时时间
 */
const service = axios.create({
  baseURL: apiConfig.baseURL,
  timeout: 5000,
}) as CustomAxiosInstance;

/**
 * =====================================
 * 请求拦截器
 * =====================================
 * - 在请求发送前自动注入 Token（如果存在）
 * - 用于统一处理鉴权
 */
service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      // 给请求头添加 Authorization: Bearer <token>
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 请求发送失败（如配置错误），直接抛出
    return Promise.reject(error);
  }
);

/**
 * =====================================
 * 响应拦截器
 * =====================================
 * - 默认返回值：AxiosResponse<BaseResponse<T>>
 * - 我们只保留 res.data 部分，返回 T
 * - 如果 code !== 20000，抛出错误
 */
service.interceptors.response.use(
  (response) => {
    // 强制转换为我们定义的通用响应体
    const res = response.data as BaseResponse<any>;
    if (res.code !== 20000) {
      // 抛出业务异常，交给调用方处理
      throw new Error(res.message || "Error");
    }
    // 只返回 data，类型由泛型决定
    return res.data as any;
  },
  (error) => {
    // 网络错误 / 超时 / 非 2xx 响应等
    return Promise.reject(error);
  }
);

/**
 * =====================================
 * 导出 Axios 实例
 * =====================================
 * 使用时：
 * const user = await service.post<UserInfo>("/api/user/info");
 * // user 类型即为 UserInfo
 */
export default service;
