// 과제 안 내신 분..?
const fs = require("fs");
let input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));
let arr = [];
for (let i = 1; i <= 30; i++) {
  if (!input.includes(i)) arr.push(i);
  if (arr.length === 2) break;
}
console.log(arr.join("\n"));
