// 한수
const fs = require("fs");
let input = fs.readFileSync(0).toString();
let count = 0;
for (let i = 1; i <= Number(input); i++) {
  let nArr = String(i);
  if (i < 100) {
    count++;
    continue;
  }
  let A = Number(nArr[0]) - Number(nArr[1]);
  let B = Number(nArr[1]) - Number(nArr[2]);
  if (A === B) {
    count++;
  }
}
console.log(count);
