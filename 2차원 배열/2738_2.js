let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let a = [];
let b = [];
for (i = 0; i < n; i++) {
  a[i] = input[i + 1].split(" ").map(Number);
  b[i] = input[i + n + 1].split(" ").map(Number);
}

let answer = "";
for (i = 0; i < n; i++) {
  for (j = 0; j < m; j++) {
    answer += a[i][j] + b[i][j];
    if (j !== m - 1) {
      answer += " ";
    }
  }
  if (i !== n - 1) {
    answer += "\n";
  }
}
console.log(answer);
