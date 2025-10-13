"use client";

import { X } from "lucide-react";
import Image from "next/image";

interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  return (
    <div
      className="
        absolute inset-0 z-50 flex items-start justify-center
        bg-black/40 backdrop-blur-[2px] py-50
        animate-fadeIn
      "
    >
      {/* ✅ 卡片主体（背景图片 + 比例7:3） */}
      <div
        className="
          relative bg-[#111827] text-gray-100 rounded-2xl shadow-2xl
          w-[980px] h-[420px] border border-white/10
          overflow-hidden
          animate-scaleIn
        "
      >
        {/* 背景图片 */}
        <Image
          src="/images/login-bk.png"
          alt="login background"
          fill
          className="object-cover opacity-50"
          priority
        />

        {/* ✅ 新增：7:3 容器层 */}
        <div className="relative z-10 flex w-full h-full">
          {/* ✅ 左侧 70% 登录区 */}
          <div className="w-[70%] h-full p-12 flex flex-col justify-center">
            {/* 关闭按钮 */}
            <button
              onClick={onClose}
              className="
                absolute top-4 right-4 text-gray-400 hover:text-white
                transition-colors
              "
            >
              <X size={24} />
            </button>

            {/* 标题 */}
            <h2 className="text-3xl font-extrabold mb-10 text-center tracking-wide">
              账号密码登录
            </h2>

            {/* 输入区 */}
            <form className="space-y-6 max-w-[600px] mx-auto">
              <div>
                <label className="block text-base text-gray-300 mb-2">
                  用户名
                </label>
                <input
                  type="text"
                  placeholder="请输入用户名"
                  className="
                    w-full px-5 py-3 rounded-md bg-white/10 text-white text-lg
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                    placeholder-gray-400 transition-all
                  "
                />
              </div>

              <div>
                <label className="block text-base text-gray-300 mb-2">
                  密码
                </label>
                <input
                  type="password"
                  placeholder="请输入密码"
                  className="
                    w-full px-5 py-3 rounded-md bg-white/10 text-white text-lg
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                    placeholder-gray-400 transition-all
                  "
                />
              </div>

              {/* 按钮区 */}
              <div className="flex flex-col gap-4 mt-10">
                <button
                  type="button"
                  className="
                    w-full py-3 rounded-md bg-blue-500 text-white font-bold text-lg
                    hover:bg-blue-600 transition-colors
                  "
                >
                  登录
                </button>

                <button
                  type="button"
                  className="
                    w-full py-3 rounded-md border border-gray-500 text-gray-300 text-lg
                    hover:bg-gray-700 hover:text-white transition-colors
                  "
                >
                  注册
                </button>
              </div>
            </form>
          </div>

          {/* ✅ 右侧 30% 空白区（后续你可以自定义内容） */}
          <div className="w-[30%] h-full"></div>
        </div>
      </div>
    </div>
  );
}
