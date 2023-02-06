// 손익분기점
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
let margin = c - b;
let count = Math.floor(a / margin) + 1;
console.log(margin <= 0 ? -1 : count);
