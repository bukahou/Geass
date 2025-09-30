import service from "./core/request";
import type { LoginParams, LoginData } from "@/types/auth";
import { useUserStore } from "@/store/userStore";

/**
 * 用户登录
 * @param data { username, password }
 * @returns Promise<LoginData>
 */
export async function login(data: LoginParams): Promise<LoginData> {
  const url = "/public/auth/login";
  const response = await service.post<LoginData>(url, data);

  // 存储到 zustand
  useUserStore.getState().setUser(response);

  return response;
}
