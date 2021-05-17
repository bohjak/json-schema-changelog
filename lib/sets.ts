import { has, hasValues, isObj, MetaDiff, Obj } from "./internal";

export function subtractObj(a: Obj, b: Obj, partialPath = ""): MetaDiff {
  const diff: Obj = {};
  const paths: string[] = [];

  for (const key in a) {
    const path = partialPath + key;
    const pA = a[key];
    const pB = b[key];

    if (!has(b, key)) {
      // B is missing prop from A
      diff[key] = a[key];
      paths.push(path);
    } else if (isObj(pA) && isObj(pB)) {
      // Recursion
      const [nestDiff, nestPaths] = subtractObj(pA, pB, path + ".");

      if (hasValues(nestDiff)) {
        diff[key] = nestDiff;
      }

      if (nestPaths.size) {
        paths.push(...nestPaths);
      }
    } else if (pA !== pB) {
      // Value has changed
      diff[key] = pA;
      paths.push(path);
    }
  }

  return [diff, new Set(paths)];
}

export function intersectSet<T>(a: Set<T>, b: Set<T>): Set<T> {
  return new Set([...a].filter((v) => b.has(v)));
}

export function addSet<T>(a: Set<T>, b: Set<T>): Set<T> {
  return new Set([...a, ...b]);
}

export function subtractSet<T>(a: Set<T>, b: Set<T>): Set<T> {
  return new Set([...a].filter((v) => !b.has(v)));
}
