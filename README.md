# TDD String Calculator

## 📌 Overview
The **TDD String Calculator** is a simple calculator implemented using **Test-Driven Development (TDD)** in JavaScript. It supports adding numbers from a string input with various delimiters while ensuring proper error handling.

## 🚀 Features
- Returns **0** for an empty string.
- Returns the single number itself when only one number is provided.
- Adds multiple numbers separated by commas (`,`) or new lines (`\n`).
- Supports custom delimiters specified in the format: `//[delimiter]\n[numbers]`.
- Throws an error when negative numbers are encountered, listing all negative numbers in the error message.

## 📂 Project Structure
```
TDD-string-calculator/
├── src/
│   ├── stringCalculator.js  # String Calculator implementation
├── tests/
│   ├── stringCalculator.test.js  # Unit tests
├── README.md  # Project documentation
├── package.json  # Dependencies and scripts
```

## 🔧 Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/Dev-Ankur-Mishra/TDD-string-calculator.git
   ```
2. Navigate to the project folder:
   ```sh
   cd TDD-string-calculator
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## 🛠️ Usage

To use the `StringCalculator` class in your project:
```js
const StringCalculator = require("./src/stringCalculator");
const calculator = new StringCalculator();
console.log(calculator.add("1,2,3")); // Output: 6
```

## ✅ Running Tests
This project follows **TDD principles** using Jest. To run the tests:
```sh
npm test
```
This will execute all test cases defined in `tests/stringCalculator.test.js`.

## 📖 Test-Driven Development (TDD) Process
1. **Write a failing test** (Red phase) ✅
2. **Implement the simplest code to pass the test** (Green phase) ✅
3. **Refactor the code while keeping tests green** (Refactor phase) ✅
4. **Commit frequently** after each step to show the evolution of the code. ✅

## 💡 Example Scenarios
| Input | Expected Output |
|--------|----------------|
| "" | `0` |
| "1" | `1` |
| "1,2" | `3` |
| "1,2,3,4" | `10` |
| "1\n2,3" | `6` |
| "//;\n1;2;3" | `6` |
| "1,-2,3,-4" | Throws Error: "negative numbers not allowed -2,-4" |

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repository, submit issues, or create pull requests.

---
🚀 Happy Coding!
