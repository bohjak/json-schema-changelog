import type { Obj } from "./internal";
export declare const has: (obj: Obj, key: string) => boolean;
export declare const hasValues: (obj: Obj) => boolean;
export declare const isObj: (obj: unknown) => obj is Obj;
export declare const deepDot: (obj: Obj, path: string[]) => Obj;
export declare const last: <T>(arr: T[]) => T;
//# sourceMappingURL=utils.d.ts.map