// 설탕 배달
// n킬로그램
// 3kg, 5kg
// 18일때, 5-3, 3-1
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let count = 0;

while (true) {
  if (input % 5 === 0) {
    console.log(input / 5 + count);
    break;
  }

  if (0 > input) {
    console.log(-1);
    break;
  }

  count++;
  input -= 3;
}