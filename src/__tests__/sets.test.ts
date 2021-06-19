import { intersectSet, subtractObj, subtractSet } from "../sets";

describe("sets function", () => {
  describe("intersectSet function", () => {
    it("should return intersect of two sets", () => {
      const result = intersectSet(new Set(["a"]), new Set(["a", "b"]));
      expect(result).toEqual(new Set(["a"]));
    });
  });
  describe("subtractSet function", () => {
    it("should return substract of two sets", () => {
      const result = subtractSet(new Set(["a", "b", "c"]), new Set(["a", "b"]));
      expect(result).toEqual(new Set(["c"]));
    });
  });

  describe("subtractObj function", () => {
    it("should return substract of two objects", () => {
      const result = subtractObj(
        { property: "value", addedProperty: "addedProperty" },
        { property: "value" }
      );
      expect(result).toEqual([
        { addedProperty: "addedProperty" },
        new Set(["addedProperty"]),
      ]);
    });
  });
});
