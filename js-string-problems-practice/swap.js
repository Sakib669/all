let a = 5;
let b = 7;
// apprach 1
// let c = a;
// a = b;
// b = c;

// apprach 2 -- destructuring
[a, b] = [b, a];
console.log(a,b);