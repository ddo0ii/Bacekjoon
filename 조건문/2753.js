// 윤년
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
let a = parseInt(input);
if (a % 400 == 0 || (a % 4 == 0 && a % 100 != 0)) {
  console.log("1");
} else {
  console.log("0");
}
