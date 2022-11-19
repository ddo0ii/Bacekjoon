// 문자열 반복
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const num1 = input.shift();
for (let i = 0; i < num1; i++) {
  let answer = "";
  const [num2, str] = input[i].split(" ");
  for (let j = 0; j < str.length; j++) {
    for (let k = 0; k < num2; k++) {
      answer += str[j];
    }
  }
  console.log(answer);
}
