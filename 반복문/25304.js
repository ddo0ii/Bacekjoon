// 영수증
const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
let result = 0;
for (let i = 2; i < parseInt(input[1]) + 2; i++) {
  result += parseInt(input[i].split(" ")[0]) * parseInt(input[i].split(" ")[1]);
}
if (result == parseInt(input[0])) {
  console.log("Yes");
} else {
  console.log("No");
}
