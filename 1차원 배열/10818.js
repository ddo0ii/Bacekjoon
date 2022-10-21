// 최소, 최대
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let count = Number(input[0]);
let numbers = input[1].split(" ").map((x) => Number(x));

numbers.sort((a, b) => a - b);
console.log(`${numbers[0]} ${numbers[count - 1]}`);
