const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let howN = Number(input[0]);
let findN = Number(input[2]);
let count = 0;
for (let i = 0; i < howN; i++) {
  if (input[1].split(" ")[i] == findN) {
    count++;
  }
}
console.log(count);
