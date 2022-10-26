// 행렬 덧셈
const fs = require("fs");
let input = fs
  .readFileSync(0)
  .toString()
  .split("\n")
  .map((x) =>
    x
      .trim()
      .split(" ")
      .map((x) => +x)
  );
let [n, m] = input.shift();
let arr = new Array(m);
let array = [];
arr.fill(0);
for (let i = 0; i < n; i++) {
  array.push([...arr]);
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    array[i][j] = input[i][j] + input[i + n][j];
  }
}
let answer = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    answer += array[i][j].toString() + " ";
  }
  answer += "\n";
}
console.log(answer);
