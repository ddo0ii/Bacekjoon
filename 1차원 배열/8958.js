// OX퀴즈
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
for (let i = 1; i <= parseInt(input[0]); i++) {
  let count = 0;
  let result = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      count += 1;
    } else {
      count = 0;
    }
    result += count;
  }
  console.log(result);
}
