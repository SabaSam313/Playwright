// null vs undefined in JavaScript

// undefined means a variable is declared, but no value is assigned yet.
let studentName;
console.log(studentName); // undefined

// null means we intentionally assign an empty value.
let selectedCourse = null;
console.log(selectedCourse); // null

// Example with real meaning:
let userEmail;
console.log("Before signup:", userEmail); // undefined

userEmail = null;
console.log("User skipped email:", userEmail); // null

userEmail = "student@example.com";
console.log("After signup:", userEmail); // student@example.com

// typeof difference:
console.log(typeof studentName); // undefined
console.log(typeof selectedCourse); // object

// Simple comparison:
console.log(null == undefined); // true
console.log(null === undefined); // false
