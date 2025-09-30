// src/api/config.ts

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:";

export const apiConfig = {
  baseURL: API_BASE_URL,
  timeout: 5000,
};
