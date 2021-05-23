import type { Obj } from "./internal";

export const has = (obj: Obj, key: string) =>
  Object.prototype.hasOwnProperty.call(obj, key);

export const hasValues = (obj: Obj) => Boolean(Object.keys(obj).length);

export const isObj = (obj: unknown): obj is Obj =>
  Boolean(obj && typeof obj === "object");

export const deepDot = (obj: Obj, path: string[]) =>
  path.reduce((o, key) => o?.[key] as Obj, obj);

export const last = <T>(arr: T[]): T => arr[arr.length - 1];

/**
 * Creates user-friendly name for the diff
 */
export const getPropName = (pathArr: string[]) => pathArr[1] ?? last(pathArr);
