import { convertFizzBuzz, generateFizzBuzzArray, generateFizzBuzzString } from "./fizzbuzz.js";

describe("FizzBuzz - convertFizzBuzz", () => {
  it("1 -> '1'", () => { expect(convertFizzBuzz(1)).toBe("1"); });
  it("3 -> 'Fizz'", () => { expect(convertFizzBuzz(3)).toBe("Fizz"); });
  it("5 -> 'Buzz'", () => { expect(convertFizzBuzz(5)).toBe("Buzz"); });
  it("15 -> 'FizzBuzz'", () => { expect(convertFizzBuzz(15)).toBe("FizzBuzz"); });
});

