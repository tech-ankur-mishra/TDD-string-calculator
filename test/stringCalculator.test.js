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
});
