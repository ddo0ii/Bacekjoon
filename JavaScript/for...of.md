출처 : https://hianna.tistory.com/373

# for...of

# 반복문(4) - 배열 반복문 for...of

배열 또는 map객체 등 iterable 객체의 값들을 순회할 수 있음 <br>

```
for(variable of object)	{
	statement
}
```
object 는 iterable 객체입니다. (배열 또는 Map, Set, String 등) <br>
variable은 iterable 객체에서 하나씩 뽑아온 값입니다. <br>

for...of를 사용하면 배열의 인덱스는 알 수 없습니다. <br>
인덱스를 알아야 한다면 다른 for 반복문을 사용해야 합니다. <br>

### 예제 1. 배열

```
const arr = [1, 2, 3];

for(element of arr) {
  document.write(element);
  document.write('<br>');
}
/*
1
2
3
*/
```

### 예제 2. 문자열

```
const str = 'apple';

for(element of str) {
  document.write(element);
  document.write('<br>');
}
/*
a
p
p
l
e
*/
```

### 예제 3. Map

for...of 구문으로 Map 객체를 순회하면 [key, value] 형태의 배열 객체를 하나씩 가져옵니다. <br>

```
const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');

for(element of map) {
  document.write(`${element[0]}, ${element[1]}`);
  document.write('<br>');
}
/*
key1, value1
key2, value2
*/
```

### 예제 4. Set 

for...of 구문으로 Set 객체를 순회하면, 각각의 값들을 하나씩 가져옵니다. <br>

```
const set = new Set();
set.add('value1');
set.add('value2');

for(element of set) {
  document.write(element);
  document.write('<br>');
}
/*
value1
value2
*/
```