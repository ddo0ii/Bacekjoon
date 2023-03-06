function solution(wallpaper) {
  const X = [];
  const Y = [];
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        Y.push(i);
        X.push(j);
      }
    }
  }
  X.sort((a, b) => a - b);
  Y.sort((a, b) => a - b);
  return [Y[0], X[0], Y[Y.length - 1] + 1, X[X.length - 1] + 1];
}

/* sort 정리 */
// 유니코드 순서로 정렬
const arr1 = [2, 1, 3];
const arr2 = ["banana", "apple", "orange"];
arr1.sort();
document.writeln(arr1 + "<br>"); // [1, 2, 3]
arr2.sort();
document.writeln(arr2 + "<br>"); // ['apple', 'banana', 'orange']

// 배열의 숫자들을 유니코드 순서가 아닌, 숫자 크기 순서대로 정렬
// 오름차순으로 됨
// 방법 1
const arr = [2, 1, 3, 10];
arr.sort(function (a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
});
document.writeln(arr + "<br>"); // [1, 2, 3, 10]
// 방법 2
arr.sort(function (a, b) {
  return a - b;
});
document.writeln(arr + "<br>"); // [1, 2, 3, 10]

// const arr4 = arr3.sort();로 sort가 되어서 후에 push를 해도 그대로 정렬되어있음
const arr3 = [2, 1, 3];
const arr4 = arr3.sort();
document.writeln(arr3 + "<br>"); // [1, 2, 3]
document.writeln(arr4 + "<br>"); // [1, 2, 3]
arr3.push(4);
document.writeln(arr3 + "<br>"); // [1, 2, 3, 4]
document.writeln(arr4 + "<br>"); // [1, 2, 3, 4]

// 오름차순
const arr = [2, 1, 3, 10];
arr.sort(function (a, b) {
  return a - b;
});
document.writeln(arr + "<br>"); // [1, 2, 3, 10]
// 내림차순
const arr = [2, 1, 3, 10];
arr.sort(function (a, b) {
  return b - a;
});
document.writeln(arr + "<br>"); // [10, 3, 2, 1]
// 문자 오름차순
const arr = ["banana", "b", "boy"];
arr.sort();
document.writeln(arr + "<br>"); // ['b', 'banana', 'boy']
// 문자 내림차순
const arr = ["banana", "b", "boy"];
arr.sort(function (a, b) {
  if (a < b) return 1;
  if (a > b) return -1;
  if (a === b) return 0;
});
document.writeln(arr + "<br>"); // ['boy', 'banana', 'b']
// 대문자가 소문자보다 앞에 오도록 정렬
const arr = ["banana", "b", "Boy"];
arr.sort();
document.writeln(arr + "<br>"); // ['Boy','b','banana']
// 대소문자 구분없이 정렬 - 오름차순
const arr = ["banana", "b", "Boy"];
arr.sort(function (a, b) {
  const upperCaseA = a.toUpperCase();
  const upperCaseB = b.toUpperCase();
  if (upperCaseA > upperCaseB) return 1;
  if (upperCaseA < upperCaseB) return -1;
  if (upperCaseA === upperCaseB) return 0;
});
document.writeln(arr + "<br>"); // ['b', 'banana', 'Boy']
// 대소문자 구분없이 정렬 - 내림차순
const arr = ["banana", "b", "Boy"];
arr.sort(function (a, b) {
  const upperCaseA = a.toUpperCase();
  const upperCaseB = b.toUpperCase();
  if (upperCaseA < upperCaseB) return 1;
  if (upperCaseA > upperCaseB) return -1;
  if (upperCaseA === upperCaseB) return 0;
});
document.writeln(arr + "<br>"); // ['Boy', 'banana', 'b']

// 객체 정렬
const arr = [
  { name: "banana", price: 3000 },
  { name: "apple", price: 1000 },
  { name: "orange", price: 500 },
];
arr.sort(function (a, b) {
  return a.price - b.price;
});
document.writeln(JSON.stringify(arr[0]) + "<br>");
document.writeln(JSON.stringify(arr[1]) + "<br>");
document.writeln(JSON.stringify(arr[2]) + "<br>");
