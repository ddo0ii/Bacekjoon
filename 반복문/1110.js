// 더하기 사이클
const fs = require("fs");
let input = fs.readFileSync(0).toString();
let num = Number(input);
let sum;
let i = 0;
while (true) {
  i++;
  sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);
  if (Number(input) === num) break;
}
console.log(i);
