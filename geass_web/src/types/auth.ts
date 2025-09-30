// src/types/auth.ts

// 登录请求体
export interface LoginParams {
  username: string;
  password: string;
}

// 登录返回 data
export interface LoginData {
  username: string;
  name: string;
  email: string;
  token: string;
  role: number;
  avatar: string;
  userId: number; // 注意是小写 d
}
