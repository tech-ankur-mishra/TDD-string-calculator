class StringCalculator {
  add(numbers) {
    if (numbers === "") return 0;
    return numbers
      .split(",")
      .map(Number)
      .reduce((total, num) => total + num, 0);
  }
}
module.exports = StringCalculator;
