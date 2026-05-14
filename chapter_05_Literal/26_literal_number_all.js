// Lab Exercise: Number literals in JavaScript

// JavaScript has one normal number type: number.
// It is used for integers and decimal values.

let age = 30; // integer number
console.log("Integer:", age, typeof age);

let price = 99.99; // decimal number
console.log("Decimal:", price, typeof price);

let negativeNumber = -50; // negative number
console.log("Negative:", negativeNumber, typeof negativeNumber);

let zero = 0;
console.log("Zero:", zero, typeof zero);

// Exponential notation is useful for very big or very small numbers.
let bigAmount = 1e6; // 1 * 10^6 = 1000000
console.log("Exponential big:", bigAmount, typeof bigAmount);

let smallAmount = 1e-3; // 0.001
console.log("Exponential small:", smallAmount, typeof smallAmount);

// Binary number starts with 0b.
let binaryNumber = 0b1010; // 10
console.log("Binary:", binaryNumber, typeof binaryNumber);

// Octal number starts with 0o.
let octalNumber = 0o77; // 63
console.log("Octal:", octalNumber, typeof octalNumber);

// Hexadecimal number starts with 0x.
let hexNumber = 0xff; // 255
console.log("Hexadecimal:", hexNumber, typeof hexNumber);

// Numeric separator makes large numbers easy to read.
let salary = 1_00_000;
console.log("Numeric separator:", salary, typeof salary);

// Special number values.
let notANumber = NaN;
console.log("NaN:", notANumber, typeof notANumber);

let infinityValue = Infinity;
console.log("Infinity:", infinityValue, typeof infinityValue);

let negativeInfinity = -Infinity;
console.log("Negative Infinity:", negativeInfinity, typeof negativeInfinity);

// BigInt is used for very large whole numbers.
// Add n at the end to create a BigInt value.
let veryBigNumber = 123456789012345678901234567890n;
console.log("BigInt:", veryBigNumber, typeof veryBigNumber);

// Quick summary:
// 1. number: normal numbers like 10, 3.14, 0xff, NaN, Infinity
// 2. bigint: very large whole numbers like 123n
