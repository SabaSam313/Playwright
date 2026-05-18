// Task 18th May 2026 | JS Operators
// 1. Maximum number between two numbers using ternary operator
// 2. Maximum number between three numbers using ternary operator

let firstNumber = 45;
let secondNumber = 82;

let maxBetweenTwo = firstNumber > secondNumber ? firstNumber : secondNumber;
console.log(`Maximum between ${firstNumber} and ${secondNumber}: ${maxBetweenTwo}`);


let numberOne = 120;
let numberTwo = 75;
let numberThree = 160;

let maxBetweenThree = numberOne > numberTwo
    ? (numberOne > numberThree ? numberOne : numberThree)
    : (numberTwo > numberThree ? numberTwo : numberThree);

console.log(`Maximum between ${numberOne}, ${numberTwo}, and ${numberThree}: ${maxBetweenThree}`);
