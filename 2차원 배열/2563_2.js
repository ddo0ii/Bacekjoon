// 색종이
const fs = require("fs");
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const arr = input.map((row) => row.split(" ").map(Number));
const paper = Array.from(Array(100), () => new Array(100).fill(0));
let count = 0;

for (let i = 0; i < N; i++) {
  const [x, y] = arr[i];
  for (let j = x; j < x + 10; j++) {
    for (let k = y; k < y + 10; k++) {
      if (paper[j][k] === 0) {
        paper[j][k] = 1;
        count++;
      }
    }
  }
}
console.log(count);
