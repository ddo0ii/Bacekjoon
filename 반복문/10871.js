// X보다 작은 수

/*
// 방법 1 += 연산자 사용 (얘도 forEach정도로 시간이 걸린다)
const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
let result = "";
let num0 = input[0].split(" ");
let num1 = input[1].split(" ");
for (let i = 0; i < parseInt(num0[0]); i++) {
  if (parseInt(num1[i]) < parseInt(num0[1])) {
    result += parseInt(num1[i]) + " ";
  }
}
console.log(result.trim());
*/

/*
// 방법 2 push, join 메서드 사용
const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
let x = input[0].split(" ").map((x) => Number(x));
let A = input[1].split(" ").map((x) => Number(x));
let result = [];
for (let i = 0; i <= x[0]; i++) {
  if (A[i] < x[1]) {
    result.push(A[i]);
  }
}
console.log(result.join(" "));
*/

// 방법 3 forEach 메서드 사용 (근데 확실히 for문을 사용했을 때보다 시간이 약 60초정도 더 걸린다)
let fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");

let X = input[0].split(" ").map((el) => +el);
let A = input[1].split(" ").map((el) => +el);
let result = [];

A.forEach((item) => {
  if (item < X[1]) result.push(item);
});

console.log(result.join(" "));
