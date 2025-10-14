"use client";

import { useState } from "react";
import { useUserStore } from "@/store/userStore";
import LoginModal from "@/components/Auth/LoginModal";
import { login } from "@/api/auth"; // 你的 login API

export default function UserMenu() {
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const user = useUserStore((state) => state.user);
  const clearUser = useUserStore((state) => state.clearUser);
  const setUser = useUserStore((state) => state.setUser);

  // ✅ 登录回调
  const handleLogin = async (username: string, password: string) => {
    try {
      setLoading(true);
      const data = await login({ username, password });
      setUser(data); // 储存到 Zustand
      setShowLogin(false); // 关闭弹窗
    } catch (error) {
      console.error(error);
      alert("登录失败，请检查账号或密码");
    } finally {
      setLoading(false);
    }
  };

  // ✅ 退出登录
  const handleLogout = () => {
    clearUser();
  };

  return (
    <div className="flex items-center gap-4 text-gray-300">
      {/* 未登录：显示圆形登录按钮 */}
      {!user ? (
        <>
          <button
            onClick={() => setShowLogin(true)}
            disabled={loading}
            className="
              w-9 h-9 flex items-center justify-center
              rounded-full bg-white text-black
              font-medium text-sm hover:bg-gray-200 transition-all
              shadow-md
            "
          >
            登
          </button>

          {showLogin && (
            <LoginModal
              onClose={() => setShowLogin(false)}
              onConfirm={handleLogin}
            />
          )}
        </>
      ) : (
        <>
          {/* 已登录：圆形显示用户名首字母 + 悬浮显示用户名 + 可退出 */}
          <div className="relative group">
            <button
              className="
                w-9 h-9 flex items-center justify-center
                rounded-full bg-blue-500 text-white font-semibold uppercase
                hover:bg-blue-600 transition-all shadow-md
              "
              title={user.username}
            >
              {user.username.charAt(0)}
            </button>

            {/* 悬浮显示用户名 + 退出按钮 */}
            <div
              className="
                absolute right-0 mt-2 w-32
                bg-[#1f2937] text-white rounded-lg shadow-lg
                py-2 text-sm opacity-0 translate-y-2
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-300 ease-out
              "
            >
              <div className="px-4 py-1 border-b border-gray-700 text-center">
                {user.username}
              </div>
              <button
                onClick={handleLogout}
                className="w-full text-center py-2 hover:bg-gray-700 transition-colors"
              >
                退出登录
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
