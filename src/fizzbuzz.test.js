import { convertFizzBuzz, generateFizzBuzzArray, generateFizzBuzzString } from "./fizzbuzz.js";

describe("FizzBuzz - convertFizzBuzz (unidad)", () => {
  it("1 -> '1'", () => {
    expect(convertFizzBuzz(1)).toBe("1");
  });
}); 