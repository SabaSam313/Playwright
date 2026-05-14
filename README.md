# LearnPlaywright

This repository contains JavaScript and Playwright learning practice files.

## Topics Covered

- JavaScript basics
- Node.js command examples
- JavaScript identifiers, literals, and comments
- VS Code keyboard shortcuts
- JavaScript variables: `var`, `let`, and `const`
- JavaScript functions
- Scope, redeclaration, reassignment, hoisting, and TDZ

## Folder Structure

```text
LearnPlaywright
|-- chapter_01_Basics
|   |-- 01_Basics.js
|   |-- 02_JS..js
|   |-- 03_JS_Commands.js
|   `-- 04_Hotcode.js
|-- chapter_02_Javascript_Concepts
|   `-- 05_JS_Basics.js
|-- chapter_03_Identifier_Literals
|   |-- 06_Identifier_Rules.js
|   |-- 07_Identifier_Examples.js
|   |-- 08_Comments.js
|   |-- 09_identifier_rules.js
|   |-- VS_Code_keyboard_shortcut_mac.md
|   `-- VS_Code_keyboard_shortcut_windows.md
`-- chapter_04_Javascript_Concepts
    |-- 09_var_let_const.js
    |-- 10_functions.js
    |-- 11_var_explained.js
    |-- 12_let_peope_love.js
    |-- 13_const_explained.js
    |-- 14_var_functionscope.js
    |-- 15_let_scope.js
    |-- 16_Hoisting.js
    |-- 17_hoisting_fn.js
    |-- 18_let_hoisting.js
    |-- 19_let_hoisting_block.js
    `-- 20_let_const.js
```

## Chapter 4: JavaScript Concepts

This chapter covers functions and JavaScript variable declarations using `var`, `let`, and `const`.

| File | Topic |
| --- | --- |
| `09_var_let_const.js` | Basic examples of `var`, `let`, and `const` |
| `10_functions.js` | Defining and calling functions |
| `11_var_explained.js` | Function scope behavior of `var` |
| `12_let_peope_love.js` | Block scope behavior of `let` |
| `13_const_explained.js` | Constant assignment behavior of `const` |
| `14_var_functionscope.js` | Global and function scope behavior of `var` |
| `15_let_scope.js` | Global, function, and block scope behavior of `let` |
| `16_Hoisting.js` | Hoisting behavior of `var` |
| `17_hoisting_fn.js` | Function-level hoisting behavior of `var` |
| `18_let_hoisting.js` | TDZ and hoisting behavior of `let` |
| `19_let_hoisting_block.js` | Block TDZ behavior of `let` |
| `20_let_const.js` | TDZ behavior of `const` |

## Types Of Literal

1. Integers - Decimal - `42`, `0`, `-7`
2. Hex Integer - `0xFF`
3. Binary - `0b1010`
4. Octal - `0o77`
5. Float - `3.14`, `0.05`
6. Scientific Numbers - `2.5e6`, `1.2e-3`
7. String - `'hello'`, `"hello"`
8. Boolean - `true`, `false`
9. Null - absence of the value
10. Undefined - not yet assigned
11. BigInt - `98765432123456n`
12. Object - `{ "key": "value" }`
13. Array - `[1, 4, 3, 2, 42]`

## Quick Comparison Table

| Feature | `var` | `let` | `const` |
| --- | --- | --- | --- |
| Scope | Function | Block | Block |
| Hoisting | Yes (`undefined`) | Yes (TDZ) | Yes (TDZ) |
| Re-declaration | Allowed | Not allowed | Not allowed |
| Reassignment | Allowed | Allowed | Not allowed |

## Detailed Comparison Table: var, let, and const

| Feature | `var` | `let` | `const` |
| --- | --- | --- | --- |
| Scope | Function-scoped | Block-scoped | Block-scoped |
| Redeclaration in same scope | Allowed | Not allowed | Not allowed |
| Reassignment | Allowed | Allowed | Not allowed |
| Hoisting | Hoisted, initialized as `undefined` | Hoisted, not initialized (TDZ) | Hoisted, not initialized (TDZ) |
| Must initialize at declaration | No | No | Yes |
| Access before declaration | Returns `undefined` | ReferenceError | ReferenceError |
| Object/array contents mutable | Yes | Yes | Yes, only contents |
| Recommended in modern JS | Avoid | Use when value changes | Default choice |
| Typical SDET use | Legacy code only | Counters, retry attempts, loop variables | URLs, timeouts, test data, config values |

## Quick Notes

- Use `const` by default when the variable should not be reassigned.
- Use `let` when the value needs to change later.
- Avoid `var` in modern JavaScript because it is function-scoped and can be redeclared.
- `let` and `const` are block-scoped, so variables declared inside `{}` are not available outside that block.

## How To Run JavaScript Files

Open the terminal in the project folder and run:

```bash
node chapter_01_Basics/03_JS_Commands.js
```

Examples:

```bash
node chapter_04_Javascript_Concepts/10_functions.js
node chapter_04_Javascript_Concepts/11_var_explained.js
```

Some files intentionally contain commented examples or active error examples to explain JavaScript behavior.
