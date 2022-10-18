// 알람 시계
let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((el) => Number(el));
let hour = input[0];
let minute = input[1];

if (minute - 45 < 0) {
  hour -= 1;
  minute = 60 + minute - 45;
} else {
  minute = minute - 45;
}
if (hour < 0) {
  hour = 23;
}

console.log(hour, minute);
