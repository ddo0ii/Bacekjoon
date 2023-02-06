// ACM 호텔
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let guestN = Number(input[0]);
let data = 0;
let H = 0;
let W = 0;
let N = 0;
let X = 1;
let Y = 1;
let result = "";
for (let i = 1; i <= guestN; i++) {
  data = input[i].split(" ");
  H = data[0];
  W = data[1];
  N = data[2];
  Y = N % H;
  if (Y === 0) {
    Y = H;
  }
  X = Math.ceil(N / H);
  X < 10 ? (X = String(0) + X) : X;
  result += `${Y}${X}` + "\n";
}
console.log(result);
