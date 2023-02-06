// 부녀회장이 될테야
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let caseNumber = Number(input[0]);
input.shift();

let k = 0;
let n = 0;
let array = [];

for (let i = 0; i < caseNumber * 2; i = i + 2) {
  k = Number(input[i]);
  n = Number(input[i + 1]);
  array.push([k, n]);
}

let floor = [];
let sum = 0;
for (let i = 0; i < array.length; i++) {
  //k층 n호
  k = array[i][0];
  n = array[i][1];
  for (let j = 0; j <= k; j++) {
    //0층부터 k층까지
    floor[j] = [];
    for (let m = 1; m <= n; m++) {
      // 1호부터 n호까지
      if (j === 0) {
        //0층이라면
        floor[j].push(m);
      } else {
        // j가 0이 아닐 때
        sum += floor[j - 1][m - 1];
        floor[j].push(sum);
        if (m === n) {
          sum = 0;
        }
      }
    }
  }
  console.log(floor[k][n - 1]);
}
