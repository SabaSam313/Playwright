// Identifier naming examples in JavaScript

// camelCase - valid, standard for variables and functions
let firstName = "Saba";
console.log("camelCase:", firstName);

// PascalCase - valid, standard for classes and constructors
class FirstName {}
console.log("PascalCase:", FirstName.name);

// snake_case - valid, but less common in JavaScript
let first_name = "Saba";
console.log("snake_case:", first_name);

// SCREAMING_SNAKE_CASE - valid, standard for constants
const FIRST_NAME = "Saba";
console.log("SCREAMING_SNAKE_CASE:", FIRST_NAME);

// kebab-case - invalid in JavaScript identifiers
// let first-name = "Saba"; // SyntaxError
console.log("kebab-case: first-name is invalid in JS");

// Hungarian notation - valid, older style, usually avoided
let strFirstName = "Saba";
console.log("Hungarian notation:", strFirstName);

// Train-Case - invalid in JavaScript identifiers
// let First-Name = "Saba"; // SyntaxError
console.log("Train-Case: First-Name is invalid in JS");
