// A + B - 4;
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
for (let i = 0; i < input.length; i++) {
  let numbers = input[i].split(" ");
  console.log(Number(numbers[0]) + Number(numbers[1]));
}
