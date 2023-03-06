출처 : https://hianna.tistory.com/709

# 배열 값 전체 출력하기 (for, forEach, for in, for of)

## for

```
// 배열 선언
const arr = ['A', 'B', 'C'];

// 배열 출력 (for 문)
for(let i = 0; i < arr.length; i++) {
  document.write(arr[i] + '<br>');
}
/*
A
B
C
*/
```

## forEach()

배열의 element에 대해 파라미터로 입력받은 함수를 실행시키는 함수

```
// 배열 선언
const arr = ['A', 'B', 'C'];

// 배열 출력 (forEach)
arr.forEach(element => {
  document.write(element + '<br>');
})
```

## for in

객체의 속성을 순회하는 데 사용 <br>
for...in을 사용하여 객체의 key를 가져올 수 있습니다. <br>
배열에서의 key는 index <br>

```
// 배열 선언
const arr = ['A', 'B', 'C'];

// 배열 출력 (for in)
for(let index in arr) {
  document.write(arr[index] + '<br>');
}
```

## for of

배열을 포함한 iterable 객체를 순회하는 반복문 <br>
for...in이 배열의 index를 참조하는 것과 달리 <br>
for...of는 배열의 element 값을 참조할 수 있음 <br>

```
// 배열 선언
const arr = ['A', 'B', 'C'];

// 배열 출력 (for of)
for(let element of arr) {
  document.write(element + '<br>');
}
```