import {
  deepDot,
  Diff,
  DiffMap,
  DiffType,
  intersectSet,
  last,
  MetaDiff,
  Obj,
  subtractObj,
  subtractSet,
} from "./internal";

export function createDiffMap(
  addObj: Obj,
  remObj: Obj,
  type: DiffType,
  paths: Set<string>,
): DiffMap {
  const diffMap: DiffMap = new Map();

  for (const propPath of paths) {
    const pathArr = propPath.split(".");

    const before = deepDot(remObj, pathArr);
    const after = deepDot(addObj, pathArr);

    // TODO: make clever
    const propName = pathArr[1] ?? last(pathArr);

    diffMap.set(propPath, {
      type,
      propPath,
      propName,
      value: {
        before,
        after,
      },
    });
  }

  return diffMap;
}

export function createDiffMaps(
  addDiff: MetaDiff,
  remDiff: MetaDiff,
): Diff {
  const [addObj, addPaths] = addDiff;
  const [remObj, remPaths] = remDiff;

  const changePaths = intersectSet(addPaths, remPaths);
  const pureAddPaths = subtractSet(addPaths, changePaths);
  const pureRemPaths = subtractSet(remPaths, changePaths);

  const additions = createDiffMap(
    addObj,
    remObj,
    DiffType.ADDITION,
    pureAddPaths,
  );
  const removals = createDiffMap(
    addObj,
    remObj,
    DiffType.REMOVAL,
    pureRemPaths,
  );
  const changes = createDiffMap(addObj, remObj, DiffType.CHANGE, changePaths);

  return {
    additions,
    removals,
    changes,
  };
}

export function getDiff(a: Obj, b: Obj): Diff {
  const additions = subtractObj(a, b);
  const removals = subtractObj(b, a);

  return createDiffMaps(additions, removals);
}
