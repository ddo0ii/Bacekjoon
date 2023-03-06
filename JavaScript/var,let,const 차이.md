출처 : https://hianna.tistory.com/314

# 1. var

es6 이전의 변수 선언 방식 <br>
'var'는 매우 유연한 방식으로 변수를 선언할 수 있는 방법 <br>

(1) scope <br>
function 단위의 scope을 가집니다. <br>
var는 {} 단위의 scope이 아닌 function 단위의 scope을 가집니다. <br>
```
var hello='hello';
if(true)  {
  var hello = 'hello in if';
}

console.log(hello); // hello in if
```
<br>

(2) 같은 변수를 두번 선언했는데도, 오류가 나지 않고 잘 동작합니다. <br>

# 2. const

(1) 상수를 선언합니다. <br>
const는 'constance'의 약자입니다.<br>
한번 선언된 상수는 다시 재정의 할 수 없습니다.<br>
```
const hello='hello';
hello='change hello'; // error
```
<br>
(2) scope은 {}블록입니다.<br>
```
const hello='hello!';
{
  const hello='inner hello!'; 
  console.log(hello); // inner hello!
}
console.log(hello); // hello! 
```
<br>
괄호 안에 hello를 선언했지만, const의 scope은 괄호 블록 안이기 때문에
<br>
괄호 바깥에 hello 상수를 또 선언할 수 있습니다.
<br>

# 3. let

(1) 변수를 선언합니다.
<br>
let으로 선언하면 값을 재정의 할 수 있습니다.
<br>
```
let hello='first hello';  // first hello
hello = 'changed hello';  // changed hello
```
<br>
(2) scope은  {}입니다.
<br>
const와 마찬가지로 scope은 괄호 변수입니다.
<br>
```
let hello='first hello';  
{
  let hello = 'inner hello';  
  console.log(hello); // inner hello
}
console.log(hello); // first hello
```
<br>
(3) var처럼 같은 변수를 두 번 선언하는 것은 불가합니다.
```
let hello='first hello';  
let hello='second hello'; // error
```

### ES6에서는 var보다는 const와 let을 사용해서 좀 더 명확한 코드를 만들어 내는 것을 권장