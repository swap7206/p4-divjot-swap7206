import {add, subtract, multiply, divide} from "./mathOps.js";
describe("mathOPs", () => {
  test("should add numbers correctly", () => {
    expect(add(4, 3)).toEqual(7);
  });
  test("should subtract numbers properly", () => {
    expect(subtract(3, 2)).toEqual(1);
  });
  test("should multiple numbers properly", () => {
    expect(multiply(3, 2)).toEqual(6);
  });
  test("should divide numbers properly", () => {
    expect(divide(3, 2)).toEqual(1.5);
  });
});