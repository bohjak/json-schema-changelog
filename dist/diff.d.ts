import { Diff, DiffMap, DiffType, MetaDiff, Obj } from "./internal";
export declare function createDiffMap(addObj: Obj, remObj: Obj, type: DiffType, paths: Set<string>): DiffMap;
export declare function createDiffMaps(addDiff: MetaDiff, remDiff: MetaDiff): Diff;
export declare function getDiff(a: Obj, b: Obj): Diff;
//# sourceMappingURL=diff.d.ts.map