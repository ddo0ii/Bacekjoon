const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((el) => Number(el));
let originVal = [1, 1, 2, 2, 2, 8];
let result = originVal.map((el, idx) => el - input[idx]);
console.log(result.join(" "));
