import { has, hasValues, isObj, deepDot, last } from "../utils";

describe("utility functions", () => {
  describe("has function", () => {
    test("should return true if objects owns key", () => {
      expect(has({ key: "value" }, "key")).toBeTruthy();
    });

    test("should return false if objects does not own key", () => {
      expect(has({ key: "value" }, "anotherKey")).toBeFalsy();
    });
  });

  describe("hasValues function", () => {
    test("should return true if object is passed in", () => {
      expect(hasValues({ key: "value" })).toBeTruthy();
    });
  });

  describe("isObj function", () => {
    test("should return true if object is passed in", () => {
      expect(isObj({ key: "value" })).toBeTruthy();
    });

    test("should return false if value is not object", () => {
      expect(isObj("string")).toBeFalsy();
    });
  });

  describe("deepDot function", () => {
    test("should return property with value from object", () => {
      expect(
        deepDot({ parentProperty: { childProperty: "value" } }, [
          "parentProperty",
        ])
      ).toEqual({ childProperty: "value" });
    });

    test("should return value from object", () => {
      expect(
        deepDot({ parentProperty: { childProperty: "value" } }, [
          "parentProperty",
          "childProperty",
        ])
      ).toEqual("value");
    });
  });

  describe("deepDot function", () => {
    test("should return property with value from object", () => {
      expect(
        deepDot({ parentProperty: { childProperty: "value" } }, [
          "parentProperty",
        ])
      ).toEqual({ childProperty: "value" });
    });
  });

  describe("last function", () => {
    test("should return last value in the array", () => {
      expect(last(["parentProperty"])).toEqual("parentProperty");
    });
  });
});
