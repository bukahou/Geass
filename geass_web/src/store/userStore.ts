// src/store/user.ts
// ============================================
//  用户全局状态管理（Zustand，仅内存）
// ============================================
//
// 功能：
// - 保存登录后用户信息（username / role / avatar 等）
// - 仅持久化 token（写入 localStorage）
// - 页面刷新后 user 信息会被清空（重新通过 token 拉取）
// - 可修改 role、avatar 字段
// - 登出时清除 token + 清空内存状态
//

import { create } from "zustand";

// ============================================
// 🧩 用户信息结构定义
// ============================================
export interface UserState {
  username: string;
  name: string;
  email: string;
  token: string;
  role: number;
  avatar: string;
  userId: number;
}

// ============================================
// 🧩 Store（状态容器）定义
// ============================================
interface StoreState {
  user: UserState | null; // 当前用户信息（仅内存保存）
  setUser: (user: UserState) => void; // 登录后保存用户信息
  updateUserInfo: (
    partial: Partial<Pick<UserState, "role" | "avatar">>
  ) => void; // 修改权限或头像
  clearUser: () => void; // 退出登录时清除状态 + 删除 token
}

// ============================================
// ⚙️ Zustand Store（不使用 persist）
// ============================================
// user 信息仅存在内存中；token 单独持久化。
export const useUserStore = create<StoreState>((set) => ({
  // 初始状态
  user: null,

  // ============================================
  // 🔐 登录成功时调用：保存用户信息 + token
  // ============================================
  setUser: (user) => {
    // ✅ token 单独持久化（供 axios 使用）
    localStorage.setItem("token", user.token);

    // ✅ 仅在内存中保存完整 user 信息
    set({ user });
  },

  // ============================================
  // 🔄 更新部分用户信息（如头像、角色）
  // ============================================
  updateUserInfo: (partial) =>
    set((state) =>
      state.user ? { user: { ...state.user, ...partial } } : { user: null }
    ),

  // ============================================
  // 🚪 退出登录：清除状态 + 删除 token
  // ============================================
  clearUser: () => {
    localStorage.removeItem("token");
    set({ user: null });
  },
}));
