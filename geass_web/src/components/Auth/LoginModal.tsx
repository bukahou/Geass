"use client";

import { X } from "lucide-react";
import { useState } from "react";

interface LoginModalProps {
  onClose: () => void;
  onConfirm: (username: string, password: string) => void; // 👈 新增
}

export default function LoginModal({ onClose, onConfirm }: LoginModalProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!username || !password) {
      alert("请输入账号和密码");
      return;
    }

    setLoading(true);
    await onConfirm(username, password); // 🔥 调用上层传入的登录逻辑
    setLoading(false);
  };

  return (
    <div
      className="
               absolute inset-0 z-50 flex items-start justify-center
        bg-black/30 backdrop-blur-[4px]
        animate-fadeIn
        pt-[140px]
      "
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative w-[400px] h-[450px]
          bg-[#3e404d]/80 border border-white/30
          rounded-2xl flex flex-col items-center justify-center
          shadow-[0_0_25px_rgba(255,255,255,0.15)]
          px-8
        "
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition-transform hover:rotate-90"
        >
          <X size={22} />
        </button>

        <h1 className="text-2xl text-white font-semibold mb-6">登录</h1>

        <div className="relative w-[310px] mb-8 border-b-2 border-white">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full h-[50px] bg-transparent outline-none text-white px-2 pr-8"
          />
          <label
            className={`absolute left-2 text-white text-sm pointer-events-none transition-all duration-300 ${
              username ? "top-[-10px] text-xs" : "top-[50%] translate-y-[-50%]"
            }`}
          >
            账号
          </label>
        </div>

        <div className="relative w-[310px] mb-6 border-b-2 border-white">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[50px] bg-transparent outline-none text-white px-2 pr-8"
          />
          <label
            className={`absolute left-2 text-white text-sm pointer-events-none transition-all duration-300 ${
              password ? "top-[-10px] text-xs" : "top-[50%] translate-y-[-50%]"
            }`}
          >
            密码
          </label>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="
            w-[310px] h-[40px] rounded-full bg-white text-black font-medium
            hover:bg-[#ffffea] transition-all
            disabled:opacity-50
          "
        >
          {loading ? "登录中..." : "登录"}
        </button>
      </div>
    </div>
  );
}
