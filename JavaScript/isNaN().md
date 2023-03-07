출처 : https://hianna.tistory.com/385

# 문자열이 숫자인지 체크하기, isNaN() 함수

isNaN(value)

여기에서 NaN은 'Not a Number'의 약자


파라미터가 숫자가 아닐 경우 true를 리턴하고,

파라미터가 숫자일 경우 false를 리턴

```
document.writeln(isNaN("123")); // false
document.writeln(isNaN("123.1")); // false
document.writeln(isNaN(123)); // false
document.writeln(isNaN(-123)); // false
document.writeln(isNaN(.1)); // false

document.writeln(isNaN("abc")); // true
document.writeln(isNaN("123+123")); // true
document.writeln(isNaN(undefined)); // true
document.writeln(isNaN({})); // true

document.writeln(isNaN('')); // false
document.writeln(isNaN(' ')); // false
document.writeln(isNaN(null)); // false
document.writeln(isNaN(true)); // false
document.writeln(isNaN([])); // false

document.writeln(isNaN(new Date())); // false
document.writeln(isNaN(new Date().toString())); // true
```
▶ '123', '123.1', 123, -123, .1

문자열 타입이든 숫자 타입이든 숫자가 입력되면 isNaN() 함수는 false를 리턴합니다.

 

▶ 'abc'

문자열이 입력되면 true를 리턴합니다.

 

▶ '123+123'

숫자로 이루어진 문자열 안에 숫자가 아닌 '+' 기호가 있기 때문에 true를 리턴합니다.

 

▶ undefined, {}

undefined, {} 는 true를 리턴합니다.

 

▶ '', ' ', null, true, false, []

빈 문자열, null, boolean 값, 배열은 false를 리턴합니다.

 

▶ new Date(), new Date().toString()

new Date()는 false를 리턴합니다.

new Date().toString()은 문자를 리턴하므로 true를 리턴합니다.




