// 구구단
const fs = require("fs");
let input = fs.readFileSync(0).toString();
let a = parseInt(input[0]);

for (let i = 1; i < 10; i++) {
  console.log(`${a} * ${i} = ${a * i}`);
}
