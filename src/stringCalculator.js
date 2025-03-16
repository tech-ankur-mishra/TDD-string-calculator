class StringCalculator {
  add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /,|\n/;

    // Handle custom delimiter
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = new RegExp(parts[0].slice(2));
      numbers = parts.slice(1).join("\n");
    }

    // Convert string to array of numbers
    const numArray = numbers.split(delimiter).map(Number);

    // Check for negative numbers
    const negatives = numArray.filter((n) => n < 0);
    if (negatives.length) {
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
