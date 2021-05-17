export enum DiffType {
  ADDITION = "ADDITION",
  REMOVAL = "REMOVAL",
  CHANGE = "CHANGE",
}

export type PropPath = string;

export interface DiffValue {
  before?: Obj;
  after?: Obj;
}

export interface DiffObject {
  // Type of difference
  type: DiffType;
  // Path to changed property
  propPath: PropPath;
  // Name of the changed property
  propName: string;
  // What changed
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
