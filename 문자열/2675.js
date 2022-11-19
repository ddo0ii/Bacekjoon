// 문자열 반복
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const num = Number(input[0]);
let result = "";

for (let i = 1; i <= num; i++) {
  let numA = Number(input[i].split(" ")[0]);
  let numB = input[i].split(" ")[1];

  for (let j = 0; j < numB.length; j++) {
    for (let k = 0; k < numA; k++) {
      result += numB[j];
    }
  }
  result += "\n";
}
console.log(result);
