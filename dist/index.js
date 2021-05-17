var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// lib/index.ts
__markAsModule(exports);
__export(exports, {
  getDiff: () => getDiff
});

// lib/types.ts
var DiffType;
(function(DiffType2) {
  DiffType2["ADDITION"] = "ADDITION";
  DiffType2["REMOVAL"] = "REMOVAL";
  DiffType2["CHANGE"] = "CHANGE";
})(DiffType || (DiffType = {}));

// lib/utils.ts
var has = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
var hasValues = (obj) => Boolean(Object.keys(obj).length);
var isObj = (obj) => Boolean(obj && typeof obj === "object");
var deepDot = (obj, path) => path.reduce((o, key) => o == null ? void 0 : o[key], obj);
var last = (arr) => arr[arr.length - 1];

// lib/sets.ts
function subtractObj(a, b, partialPath = "") {
  const diff = {};
  const paths = [];
  for (const key in a) {
    const path = partialPath + key;
    const pA = a[key];
    const pB = b[key];
    if (!has(b, key)) {
      diff[key] = a[key];
      paths.push(path);
    } else if (isObj(pA) && isObj(pB)) {
      const [nestDiff, nestPaths] = subtractObj(pA, pB, path + ".");
      if (hasValues(nestDiff)) {
        diff[key] = nestDiff;
      }
      if (nestPaths.size) {
        paths.push(...nestPaths);
      }
    } else if (pA !== pB) {
      diff[key] = pA;
      paths.push(path);
    }
  }
  return [diff, new Set(paths)];
}
function intersectSet(a, b) {
  return new Set([...a].filter((v) => b.has(v)));
}
function subtractSet(a, b) {
  return new Set([...a].filter((v) => !b.has(v)));
}

// lib/diff.ts
function createDiffMap(addObj, remObj, type, paths) {
  var _a;
  const diffMap = new Map();
  for (const propPath of paths) {
    const pathArr = propPath.split(".");
    const before = deepDot(remObj, pathArr);
    const after = deepDot(addObj, pathArr);
    const propName = (_a = pathArr[1]) != null ? _a : last(pathArr);
    diffMap.set(propPath, {
      type,
      propPath,
      propName,
      value: {
        before,
        after
      }
    });
  }
  return diffMap;
}
function createDiffMaps(addDiff, remDiff) {
  const [addObj, addPaths] = addDiff;
  const [remObj, remPaths] = remDiff;
  const changePaths = intersectSet(addPaths, remPaths);
  const pureAddPaths = subtractSet(addPaths, changePaths);
  const pureRemPaths = subtractSet(remPaths, changePaths);
  const additions = createDiffMap(addObj, remObj, DiffType.ADDITION, pureAddPaths);
  const removals = createDiffMap(addObj, remObj, DiffType.REMOVAL, pureRemPaths);
  const changes = createDiffMap(addObj, remObj, DiffType.CHANGE, changePaths);
  return {
    additions,
    removals,
    changes
  };
}
function getDiff(a, b) {
  const additions = subtractObj(a, b);
  const removals = subtractObj(b, a);
  return createDiffMaps(additions, removals);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getDiff
});
//# sourceMappingURL=index.js.map
