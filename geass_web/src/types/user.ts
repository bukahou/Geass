// src/types/user.ts
export interface UserInfo {
  userID: number; // 注意这里是大写 D
  name: string;
  username: string;
  password: string | null;
  role: number;
  avatar: string;
  email: string;
  emailVerified: boolean;
  registrationDate: string;
}
