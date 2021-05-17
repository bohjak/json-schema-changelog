export declare enum DiffType {
    ADDITION = "ADDITION",
    REMOVAL = "REMOVAL",
    CHANGE = "CHANGE"
}
export declare type PropPath = string;
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
export declare type DiffMap = Map<PropPath, DiffObject>;
export interface Diff {
    additions?: DiffMap;
    removals?: DiffMap;
    changes?: DiffMap;
}
export declare type Obj = Record<string, unknown>;
export declare type MetaDiff = [diff: Obj, paths: Set<string>];
//# sourceMappingURL=types.d.ts.map