// A + B - 8
const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
for (let i = 1; i <= parseInt(input[0]); i++) {
  console.log(
    `Case #${i}: ${parseInt(input[i].split(" ")[0])} + ${parseInt(
      input[i].split(" ")[1]
    )} = ${parseInt(input[i].split(" ")[0]) + parseInt(input[i].split(" ")[1])}`
  );
}
