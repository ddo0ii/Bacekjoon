// A + B - 3
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
for (let i = 1; i <= input[0]; i++) {
  console.log(
    parseInt(input[i].split(" ")[0]) + parseInt(input[i].split(" ")[1])
  );
}
