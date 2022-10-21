// 평균
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let num = input[0];
let scores = input[1].split(" ");
let max = Math.max(...scores);
let sum = 0;
for (let i = 0; i < num; i++) {
  sum += (scores[i] / max) * 100;
}
console.log(sum / num);
