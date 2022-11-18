// 숫자의 합
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input1 = Number(input[0]);
const input2 = input[1].split("");
let sum = 0;
for (let i = 0; i < input1; i++) {
  sum = Number(input2[i]);
}
console.log(sum);
