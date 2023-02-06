// 달팽이는 올라가고 싶다
/*
높이 V
낮 + A
밤 - B
정상 - 미끄러지지 않음
*/

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let A = Number(input[0]);
let B = Number(input[1]);
let V = Number(input[2]);

console.log(Math.ceil((V - B) / (A - B)));
