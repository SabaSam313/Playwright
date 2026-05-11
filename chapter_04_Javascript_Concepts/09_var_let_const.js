// Chapter 4: var, let, and const

var x = 10;
let l = 30;
const c = 3.14;

console.log(x);
console.log(l);
console.log(c);

var browser = "chrome";
var browser = "firefox"; // redeclaration allowed
browser = "edge"; // reassignment allowed

console.log(browser);

let userName = "SabaSam313";
// let userName = "Jalal"; // redeclaration is not allowed with let
userName = "Saba";

console.log(userName);

const baseUrl = "https://example.com";
// const baseUrl = "https://google.com"; // redeclaration is not allowed with const
// baseUrl = "https://github.com"; // reassignment is not allowed with const

console.log(baseUrl);

var testCases = ["login", "logout", "signup"];

for (var i = 0; i < testCases.length; i++) {
  console.log("Running test:", testCases[i]);
}

console.log("Loop counter leaked outside:", i);
