let add = (a, b) => a + b;

console.log(add(2, 3));
console.log((() => 45)());

(() => console.log('IIFE'))();