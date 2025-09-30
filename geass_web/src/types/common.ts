export interface BaseResponse<T> {
  code: number;
  message: string;
  data: T;
}

export const SUCCESS_CODE = 20000 as const;
