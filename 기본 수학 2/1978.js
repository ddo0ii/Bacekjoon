// 소수 찾기
// 2부터 X-1까지 모두 나눠서 X가 소수인지 판별하는 문제
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let caseNum = Number(input[0]);
let splited = input[1].split(" ").map((item) => Number(item));
let answer = 0;
for (let i = 0; i < splited.length; i++) {
  if (splited[i] === 1) {
    continue;
  } else {
    let count = 0;
    for (let j = 2; j < splited[i]; j++) {
      if (splited[i] % j === 0) {
        count++;
      }
    }
    if (count === 0) {
      answer++;
    }
  }
}
console.log(answer);
