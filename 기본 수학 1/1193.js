// 분수찾기
const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString());
let deno = 1;
let mole = 1;
let count1 = 0;
let count2 = 0;
let answer = [];
while (count1 < input) {
  for (let k = 1; k <= deno; k++) {
    count1++;
    //console.log(`분모up: ${k}`);
    if (check(count1, k)) break;
  }
  for (let m = mole; m > 0; m--) {
    count2++;
    if (check(count2, m)) break;
  }
  deno++;
  mole++;

  for (let j = deno; j > 0; j--) {
    count1++;
    //console.log(`분모down: ${j}`);
    if (check(count1, j)) break;
  }
  for (let n = 1; n <= deno; n++) {
    count2++;
    if (check(count2, n)) break;
  }
  deno++;
  mole++;
}

function check(count, x) {
  if (count === input) {
    answer.push(x);
  }
}
console.log(`${answer[1]}/${answer[0]}`);
