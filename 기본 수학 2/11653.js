// 소인수분해
// N을 소인수분해하는 문제
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let caseNum = Number(input[0]);
let i = 2;
let array = [];
while (caseNum != 1) {
  if (caseNum % i === 0) {
    caseNum /= i;
    console.log(i);
  } else {
    i++;
  }
}
