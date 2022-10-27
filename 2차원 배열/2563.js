// 색종이
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
let len = Number(input[0]);
let arr = new Array(100).fill().map((el) => new Array(100).fill(false));
for (let i = 1; i <= len; i++) {
  let x = input[i][0];
  let y = input[i][1];
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      arr[x + j][y + k] = true;
    }
  }
}
let result = arr.reduce((past, curr) => {
  for (let el of curr) {
    if (el) past++;
  }
  return past;
}, 0);
console.log(result);
