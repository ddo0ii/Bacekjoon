// 크로아티아 알파벳
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const alp = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
let result = input.replace(alp, " ");
console.log(result.length);
