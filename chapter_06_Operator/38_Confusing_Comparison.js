// ============================================================
// Confusing Comparison in JavaScript
// == and === cases
// ============================================================

// ==  -> loose comparison, type conversion can happen
// === -> strict comparison, value and data type both must match

// Rule: use === by default.
// Use == only when you clearly understand the conversion.
// ============================================================


// ---------- 1. Empty string vs 0 vs "0" (transitivity broken) ----------
console.log("" == 0);        // true  -> "" coerced to Number -> 0
console.log("0" == 0);       // true  -> "0" coerced to Number -> 0
console.log("" == "0");      // false -> both strings, compared as-is

// === fixes it
console.log("" === 0);       // false
console.log("0" === 0);      // false
console.log("" === "0");     // false


// ---------- 2. null and undefined ----------
console.log(null == undefined);   // true  -> special rule in ==
console.log(null === undefined);  // false -> different types
console.log(null == 0);           // false -> null only == undefined/null
console.log(null >= 0);           // true  -> >= coerces null to 0
console.log(null > 0);            // false
console.log(null == 0 || null > 0); // false, but null >= 0 is true


// ---------- 3. Boolean with numbers and strings ----------
console.log(true == 1);       // true
console.log(false == 0);      // true
console.log(true == "1");     // true
console.log(true == 2);       // false
console.log(true === 1);      // false


// ---------- 4. Classic array confusion ----------
console.log([] == false);     // true
console.log(![]);             // false
console.log([] == ![]);       // true


// ---------- 5. typeof quirks ----------
console.log(typeof null);     // object
console.log(typeof []);       // object
console.log(Array.isArray([])); // true


// ---------- 6. NaN and -0 ----------
console.log(NaN === NaN);         // false
console.log(Object.is(NaN, NaN)); // true
console.log(0 === -0);            // true
console.log(Object.is(0, -0));    // false

// Takeaway:
// Use === by default.
// Use x == null only when you want to check both null and undefined.
// Use Object.is() for NaN and -0 checks.
