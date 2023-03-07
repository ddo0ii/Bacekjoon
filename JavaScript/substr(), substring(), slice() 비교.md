출처 : https://hianna.tistory.com/340

# substr(), substring(), slice() 비교


## substr() 
```
string.substr(start, length)
```
파라미터로 입력받은 start index부터 length 길이만큼 string을 잘라내어 반환하는 함수

첫번째 글자의 index는 0에서 시작

```
let str = "안녕하세요?"

let first_char = str.substr(0, 1);
let second_char = str.substr(1, 1);
let last_char = str.substr(str.length-1, 1);

document.write("첫번째 문자 : ", first_char, '<br/>');
document.write("두번째 문자 : ", second_char, '<br/>');
document.write("마지막 문자 : ", last_char, '<br/>');
/*
첫번째 문자 : 안
두번째 문자 : 녕
마지막 문자 : ?
*/
```

## substring()

```
string.substring(start, end)
```

substr() 함수와 같이 특정 문자열을 잘라내여 반환

substr() 함수와 다른 점은 매개변수로 잘라내고 싶은 문자열의 start index와 last index를 전달한다는 것

substr() 함수와 마찬가지로 index는 0부터 시작

```
let str = "안녕하세요?"

let first_char = str.substring(0, 1);
let second_char = str.substring(1, 2);
let last_char = str.substring(str.length-1, str.length);

document.write("첫번째 문자 : ", first_char, '<br/>');
document.write("두번째 문자 : ", second_char, '<br/>');
document.write("마지막 문자 : ", last_char, '<br/>');
```

## slice()

slice() 함수는 substring() 함수와 사용법이 같습니다.

substring() 함수와 마찬가지로 파라미터로 자를 문자열의 start index와 end index를 전달

```
let str = "안녕하세요?"

let first_char = str.slice(0, 1);
let second_char = str.slice(1, 2);
let last_char = str.slice(str.length-1, str.length);

document.write("첫번째 문자 : ", first_char, '<br/>');
document.write("두번째 문자 : ", second_char, '<br/>');
document.write("마지막 문자 : ", last_char, '<br/>');
```

## substring() vs slice()

그렇다면 두 함수의 차이점은 무엇일까요?

#### start > end 일 경우 처리
```
let str = "안녕하세요?"

let slice = str.slice(1, 0);
let substring = str.substring(1, 0);


document.write("slice(1,0) : ", slice, '<br/>');
document.write("substring(1,0) : ", substring, '<br/>');
/*
slice(1,0) :
substring(1,0) : 안
*/
```
start > end 인 경우,

##### substring() : 

start 값과 end 값을 바꾸어서 처리합니다.

위 예제에서 substring(1, 0)은 실제로는 substring(0, 1)로 처리되어 string의 첫번째 글자 하나를 리턴합니다.

##### slice() :

그냥 비어있는 string, 즉 ""을 리턴합니다.



#### start 또는 end 값이 음수인 경우

```
let str = "안녕하세요?"

let slice_1 = str.slice(-2, 6);
let substring_1 = str.substring(-2, 6);
let slice_2 = str.slice(0, -2);
let substring_2 = str.substring(0, -2);


document.write("slice(-2, 6) : ", slice_1, '<br/>');
document.write("substring(-2, 6) : ", substring_1, '<br/>');
document.write("slice(0, -2) : ", slice_2, '<br/>');
document.write("substring(0, -2) : ", substring_2, '<br/>');
/*
slice(-2, 6) : 요?
substring(-2, 6) : 안녕하세요?
slice(0, -2) : 안녕하세
substring(0, -2) :
*/
```
##### slice() :

string의 가장 뒤에서 음수의 절대값만큼 내려온 index로 취급합니다.

slice(-2, 6) 예제의 경우 start값이 -2로 음수입니다.

이 경우 string의 뒤에서 2번째자리를 start값으로 취급하여 계산하게 됩니다.

즉, '안녕하세요?' string의 뒤에서 2번째 자리 글자는 '요'입니다.

내부적으로 slice(-2, 6)의 start 매개변수의 값은 '요'의 index인 '4'값으로 취급되어

slice(4, 6)으로 계산되게 됩니다.

 

start값이 음수인 경우와 마찬가지로, end값이 음수인 경우에도

end값은 string의 가장 뒤에서 음수의 절대값만큼 내려온 index로 취급합니다.

위 예제에서 slice(0, -2)의 경우

뒤에서 2번째 자리 글자는 '요'이고, '요'의 index는 4이므로

내부적으로는 slice(0, 4)로 처리되게 됩니다.

 

##### substring() : 

start값이 음수인 경우, start값은 0으로 취급됩니다.

위 예제에서 substring(-2, 6)의 start값은 0으로 취급되어,

내부적으로는 substring(0, 6)으로 계산되게 됩니다.

end값이 음수인 경우에도, start값과 마찬가지로 end값은 0으로 취급됩니다.

### slice() : start 또는 end값이 음수이고, 음수의 절대값이 전체 string 길이보다 클때

```
let str = "안녕하세요?"

let slice_1 = str.slice(-10, 6);
let slice_2 = str.slice(0, -10);


document.write("slice(-10, 6) : ", slice_1, '<br/>');
document.write("slice(0, -10) : ", slice_2, '<br/>');
/*
slice(-10, 6) : 안녕하세요?
slice(0, -10) :
*/
```

위에서 slice() 함수의 파라미터로 음수값이 전달되면, 

string의 가장 뒤에서부터 음수의 절대값만큼 내려온 index로 취급된다고 하였습니다.

그렇다면, string의 길이보다 파라미터로 전달된 음수의 절대값이 더 크다면 어떻게 될까요?

 

이 경우, 음수는 단순히 0으로 처리됩니다.

 

위 예제와 같이 slice(-10, 6)의 -10의 절대값은 string의 길이인 6보다 크므로

내부적으로는 slice(0, 6)과 같이 처리됩니다.

slice(0, -10) 예제도 마찬가지입니다.

이는 내부적으로 slice(0, 0)으로 처리됩니다.

