// 벌집
// 1 >> 1 - 1
// 2 - 7 >> 6 - 2
// 8 - 19 >> 12 - 3
// 20 - 37 >> 18 - 4
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let range = 1;
let block = 1;
while (block < Number(input)) {
  block += 6 * range;
  range++;
}
console.log(range);
