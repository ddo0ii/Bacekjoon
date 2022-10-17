const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let a = parseInt(input[0]);
let b = parseInt(input[1].split(""));
let v1 = a * b[1];
let v2 = a * b[2];
let v3 = a * b[3];
let v4 = a + b * 10 + c * 100;
console.log(v1, v2, v3, v4);
