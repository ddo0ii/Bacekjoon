// 나머지
const fs = require("fs");
let input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));
let value = new Set(input.map((x) => x % 42)).size;
console.log(value);
