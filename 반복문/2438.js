// 별 찍기 - 1
const fs = require("fs");
let input = fs.readFileSync(0).toString();
let star = "";
for (let i = 1; i <= parseInt(input); i++) {
  star += "*";
  console.log(star);
}
