출처 : https://hianna.tistory.com/372

# for in 루프

# 객체의 모든 key, value 값 가져오기

## 기본 문법 

```
for (variable in object) {
  // 코드블럭
}
```
variable : object에서 순차적으로 하나씩 꺼내온 property(속성)의 key(이름) <br>
object : 탐색할 object <br>

```
const person = {
  name : 'Anna',
  age : 20,
  id : 'hianna'
};

for(prop in person)  {
  document.write(prop + " : "  + person[prop] + '<br>');
}
/*
name : Anna
age : 20
id : hianna
*/
```
##### line 1~5 

person 이라는 객체를 만들고, nama, age, id 속성을 정의하였습니다. <br>

##### line 7~9 

for...in 반복문을 사용하여, 객체 안의 속성을 하나씩 탐색하면서 key, value를 출력합니다. <br>

##### line 7 

for..in 구문을 이용하여, person 객체에서 prop 이라는 이름으로 속성을 하나씩 추출합니다. <br>

이제 for...in 구문의 블록 안에서, prop이라는 이름으로 객체의 각각의 속성명에 접근할 수 있습니다. <br>

##### line 8 

속성명(key) 출력 : prop은 객체의 속성명을 출력합니다. <br>

속성값(value) 출력 : person[속성명] 구문을 사용하였습니다. <br>

































