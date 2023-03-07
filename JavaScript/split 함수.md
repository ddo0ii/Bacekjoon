출처 : https://hianna.tistory.com/377

# 문자열을 배열로 변환 (split 함수)

## split() 함수 

##### string.split(separator, limit)

- split() 함수는,
문자열을 'separator'로 잘라서,
'limit' 크기 이하의 배열에 잘라진 문자열을 저장하여 리턴합니다.
- separator
필수 아님
문자열을 잘라 줄 구분자 (문자열 또는 정규식)
값이 입력되지 않으면 문자열 전체를 배열에 담아서 리턴합니다.
- limit
필수 아님
최대 분할 갯수

### 예제 1. 파라미터를 입력하지 않을 경우 

파라미터로 아무것도 전달하지 않으면 문자열 전체를 length 1인 배열에 담아서 리턴

```
const str = "apple banana orange";

const arr = str.split();

document.writeln(arr); // apple banana orange
document.writeln(arr.length); // 1
```

### 예제 2. 단어별로(separator=" ") 잘라서 배열에 담기 

```
const str = "apple banana orange";

const arr = str.split(" ");

document.writeln(arr.length); // 3
document.writeln(arr[0]); // apple
document.writeln(arr[1]); // banana
document.writeln(arr[2]); // orange
```

### 예제 3. 글자별로(separator="") 잘라서 배열에 담기 
separator로 ""(length가 0인 문자열)을 전달하면,
문자열을 각각의 문자별로 잘라서, 한 글자씩(공백 포함) 배열에 저장하여 리턴
```
const str = "a b c";

const arr = str.split("");

document.writeln(arr.length); // 5
document.writeln(arr[0]); // a
document.writeln(arr[1]); // ' '(space)
document.writeln(arr[2]); // b
document.writeln(arr[3]); // ' '(space)
document.writeln(arr[4]); // c
```

### 예제 4. 특정 구분자로 잘라서 배열에 담기 
separator(여기서는 ',')를 지정하여, 
문자열을 separator로 잘라서 만들어진 조각들을 배열에 담아서 리턴
```
const str = "apple,banana,orange";

const arr = str.split(",");

document.writeln(arr.length); // 3
document.writeln(arr[0]); // apple
document.writeln(arr[1]); // banana
document.writeln(arr[2]); // orange

```

### 예제 5. limit 값 지정하기
두번째 파라미터인 limit 값을 지정하였습니다.
위의 예제에서 문자열을 ','로 자르면 총 3개의 배열이 만들어지지만, 
limit 값을 2로 지정하였기 때문에
2개의 배열만 생성되었습니다.

```
const str = "apple,banana,orange";

const arr = str.split(",", 2);

document.writeln(arr.length); // 2
document.writeln(arr[0]); // apple
document.writeln(arr[1]); // banana
document.writeln(arr[2]); // undefined
```