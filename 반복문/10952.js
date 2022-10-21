// A + B - 5;
const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
for (let i = 0; i < input.length; i++) {
  let a = parseInt(input[i].split(" ")[0]);
  let b = parseInt(input[i].split(" ")[1]);
  let result = a + b;
  if (result === 0) {
    break;
  } else {
    console.log(result);
  }
}
