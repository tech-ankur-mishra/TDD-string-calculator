const StringCalculator = require("../src/stringCalculator");

describe("StringCalculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test("returns 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  test("returns the number itself for a single number", () => {
    expect(calculator.add("1")).toBe(1);
  });

  test("returns sum of two numbers", () => {
    expect(calculator.add("1,5")).toBe(6);
  });

  test("returns sum of multiple numbers", () => {
    expect(calculator.add("1,2,3,4")).toBe(10);
  });
});
