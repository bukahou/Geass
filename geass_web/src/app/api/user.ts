// src/api/user.ts
import service from "./core/request";
import type { UserInfo } from "@/types/user";
import { useUserStore } from "@/store/userStore";

export async function getUserInfo(): Promise<UserInfo> {
  const url = "/api/user/info";
  const response = await service.post<UserInfo>(url);

  // 更新 role / avatar
  useUserStore.getState().updateUserInfo({
    role: response.role,
    avatar: response.avatar,
  });

  return response;
}
