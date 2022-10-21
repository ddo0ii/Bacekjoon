// 최댓값
const fs = require("fs");
let input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));
let maxN = input[0];
let count = 0;
for (let i = 1; i < 9; i++) {
  if (input[i] > maxN) {
    maxN = input[i];
    count = i;
  }
}
console.log(maxN);
console.log(count + 1);
