declare module "types" {
    export enum DiffType {
        ADDITION = "ADDITION",
        REMOVAL = "REMOVAL",
        CHANGE = "CHANGE"
    }
    export type PropPath = string;
    export interface DiffValue {
        before?: Obj;
        after?: Obj;
    }
    export interface DiffObject {
        type: DiffType;
        propPath: PropPath;
        propName: string;
        value: DiffValue;
    }
    export type DiffMap = Map<PropPath, DiffObject>;
    export interface Diff {
        additions?: DiffMap;
        removals?: DiffMap;
        changes?: DiffMap;
    }
    export type Obj = Record<string, unknown>;
    export type MetaDiff = [diff: Obj, paths: Set<string>];
}
declare module "utils" {
    import type { Obj } from "internal";
    export const has: (obj: Obj, key: string) => boolean;
    export const hasValues: (obj: Obj) => boolean;
    export const isObj: (obj: unknown) => obj is Obj;
    export const deepDot: (obj: Obj, path: string[]) => Obj;
    export const last: <T>(arr: T[]) => T;
}
declare module "sets" {
    import { MetaDiff, Obj } from "internal";
    export function subtractObj(a: Obj, b: Obj, partialPath?: string): MetaDiff;
    export function intersectSet<T>(a: Set<T>, b: Set<T>): Set<T>;
    export function addSet<T>(a: Set<T>, b: Set<T>): Set<T>;
    export function subtractSet<T>(a: Set<T>, b: Set<T>): Set<T>;
}
declare module "diff" {
    import { Diff, DiffMap, DiffType, MetaDiff, Obj } from "internal";
    export function createDiffMap(addObj: Obj, remObj: Obj, type: DiffType, paths: Set<string>): DiffMap;
    export function createDiffMaps(addDiff: MetaDiff, remDiff: MetaDiff): Diff;
    export function getDiff(a: Obj, b: Obj): Diff;
}
declare module "internal" {
    export * from "types";
    export * from "utils";
    export * from "sets";
    export * from "diff";
}
declare module "index" {
    export { getDiff } from "internal";
}
//# sourceMappingURL=index.d.ts.map