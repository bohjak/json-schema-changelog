import { createDiffMap, getDiff } from "../diff";
import { DiffType } from "../types";

describe("createDiffMap", () => {
  it("should create diff objects based on paths array", () => {
    const paths = ["item.fruits.1", "foo"];
    const result = createDiffMap({}, {}, DiffType.ADDITION, new Set(paths));
    expect(Array.from(result.keys())).toEqual(paths);
  });

  it("returns empty map if no paths are supplied", () => {
    const result = createDiffMap(
      { foo: "value", bar: "value" },
      { baz: "value" },
      DiffType.ADDITION,
      new Set()
    );
    expect(result.size).toBe(0);
  });
});

describe("getDiff", () => {
  it("returns changes between objects", () => {
    const common = {
      e: "e",
    };
    const added = {
      da: "da",
      db: {
        dba: "dba",
      },
    };
    const removed = {
      ba: "ba",
    };

    const oldObj = { ...common, removed, changed: "a" };
    const newObj = { ...common, added, changed: "z" };

    const result = getDiff(newObj, oldObj);

    expect(result?.additions?.size).toBe(1);
    expect(result?.additions?.get("added")?.value).toEqual({
      after: added,
      before: undefined,
    });
    expect(result?.removals?.size).toBe(1);
    expect(result?.removals?.get("removed")?.value).toEqual({
      after: undefined,
      before: removed,
    });
    expect(result?.changes?.size).toBe(1);
    expect(result?.changes?.get("changed")?.value).toEqual({
      before: "a",
      after: "z",
    });
  });
});
