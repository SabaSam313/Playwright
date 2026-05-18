// Null Operator

// ??
console.log(null >= 0); // null == 0 or null > 0
console.log(null === 0);


// ?? Nullish
let amul = null;
let amulMilk = amul ?? "nandani milk";
console.log(amulMilk);

// ?? Nullish
amul = "Amul available";
let amulMilk1 = amul ?? "nandani milk";
console.log(amulMilk1);

//val = "which milk? -> " + val;
//console.log(val)
