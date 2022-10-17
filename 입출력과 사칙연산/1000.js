const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let a = parseInt(input[0]);
let b = parseInt(input[1]);
console.log(a + b);

/*
const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split(" ");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A + B);
*/
