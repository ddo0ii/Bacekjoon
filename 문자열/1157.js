// 단어 공부
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().toUpperCase();

// a-z까지의 배열.
const array = new Array(26).fill(0);

// 해당 단어의 길이만큼 반복하면서 숫자로 변환된 알파벳들을 배열 인덱스로 적용.
for (let i = 0; i < input.length; i++) {
  array[input.charCodeAt(i) - 65]++;
}

// console.log(array)
// [
//   3, 1, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0
// ]

// 해당 배열에서 최댓값 : [3]
const max = Math.max(...array);

// 최댓값의 인덱스 : 0
const index = array.indexOf(max);

// max 와 index가 다른 알파벳일 경우, true로 변환시켜서 "?" 출력
let isSame = false;

for (let j = 0; j < 26; j++) {
  if (array[j] === max && index != j) {
    isSame = true;
    break;
  }
}
console.log(isSame ? "?" : String.fromCharCode(index + 65));
