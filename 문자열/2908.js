// 상수
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let num1 = input[0].split("").reverse().join("");
let num2 = input[1].split("").reverse().join("");
console.log(num1 > num2 ? num1 : num2);
