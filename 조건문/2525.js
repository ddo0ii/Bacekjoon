// 오븐 시계
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let current = input[0].split(" ").map(Number);
let currentHour = current[0];
let currentMinute = current[1];
let reqTime = Number(input[1]);

let endHour = parseInt((currentHour * 60 + currentMinute + reqTime) / 60);
let endMinute = parseInt((currentHour * 60 + currentMinute + reqTime) % 60);

console.log(endHour >= 24 ? endHour - 24 : endHour, endMinute);
