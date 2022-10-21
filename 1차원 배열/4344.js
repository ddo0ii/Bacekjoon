// 평균은 넘겠지
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let testCase = Number(input[0]);
for (let i = 1; i <= testCase; i++) {
  let scores = input[i].split(" ").map(Number);
  let person = scores[0];
  let sum = 0;
  let avg = 0;
  let overPerson = 0;
  for (let j = 1; j <= person; j++) {
    sum += scores[j];
  }
  avg = sum / person;
  for (let k = 1; k <= person; k++) {
    if (scores[k] > avg) {
      overPerson++;
    }
  }
  console.log(((overPerson / person) * 100).toFixed(3) + "%");
}
