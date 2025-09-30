// src/store/user.ts
import { create } from "zustand";

export interface UserState {
  username: string;
  name: string;
  email: string;
  token: string;
  role: number;
  avatar: string;
  userId: number;
}

interface StoreState {
  user: UserState | null;
  setUser: (user: UserState) => void;
  updateUserInfo: (
    partial: Partial<Pick<UserState, "role" | "avatar">>
  ) => void;
  clearUser: () => void;
}

export const useUserStore = create<StoreState>((set) => ({
  user: null,

  // 登录时调用，保存完整信息
  setUser: (user) => set({ user }),

  // 使用 token 获取用户信息时，只更新 role / avatar
  updateUserInfo: (partial) =>
    set((state) =>
      state.user ? { user: { ...state.user, ...partial } } : { user: null }
    ),

  // 退出登录
  clearUser: () => set({ user: null }),
}));
