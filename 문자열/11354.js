// 아스키 코드
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const answer = input.charCodeAt();
console.log(answer);
