// 큰 수 A+B
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let result = BigInt(input[0]) + BigInt(input[1]);
console.log(result.toString());
