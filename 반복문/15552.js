// 빠른 A+B
const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
let result = "";
for (let i = 1; i <= parseInt(input[0]); i++) {
  result +=
    parseInt(input[i].split(" ")[0]) + parseInt(input[i].split(" ")[1]) + "\n";
}
console.log(result);
