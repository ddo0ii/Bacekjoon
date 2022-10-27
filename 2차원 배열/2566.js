// 최댓값
const fs = require("fs");
let input = fs
  .readFileSync(0)
  .toString()
  .split("\n")
  .map((x) =>
    x
      .trim()
      .split(" ")
      .map((x) => Number(x))
  );
let maxNum = 0;
let maxY = 0;
let maxX = 0;

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (maxNum < input[i][j]) {
      maxNum = input[i][j];
      maxY = i;
      maxX = j;
    }
  }
}
console.log(maxNum);
console.log(`${maxY + 1} ${maxX + 1}`);
