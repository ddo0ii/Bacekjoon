# Date 객체로 원하는 날짜, 시간 표현하기

## new Date()
```
let today = new Date();   
document.write(today)
// Tue Mar 07 2023 02:24:17 GMT+0900 (한국 표준시)
```

# new Date(year, month, day, hours, minutes, seconds, milliseconds)

년도, 월, 일, 시, 분, 초, 밀리초
연도와 월은 필수 입력값
월은 0에서 11 사이의 숫자(0~11)

```
// year, month, day, hours, minutes, seconds, milliseconds
let date_1 = new Date(2019, 0, 2, 12, 31, 10, 22);
document.write(date_1 + '<br>');

// year, month, day, hours, minutes, seconds
let date_2 = new Date(2019, 0, 2, 12, 31, 10);
document.write(date_2 + '<br>');

// year, month, day, hours, minutes
let date_3 = new Date(2019, 0, 2, 12, 31);
document.write(date_3 + '<br>');

// year, month, day, hours
let date_4 = new Date(2019, 0, 2, 12);
document.write(date_4 + '<br>');

// year, month, day
let date_5 = new Date(2019, 0, 2);
document.write(date_5 + '<br>');

// year, month
let date_6 = new Date(2019, 0);
document.write(date_6 + '<br>');
/*
Wed Jan 02 2019 12:31:10 GMT+0900 (한국 표준시)
Wed Jan 02 2019 12:31:10 GMT+0900 (한국 표준시)
Wed Jan 02 2019 12:31:00 GMT+0900 (한국 표준시)
Wed Jan 02 2019 12:00:00 GMT+0900 (한국 표준시)
Wed Jan 02 2019 00:00:00 GMT+0900 (한국 표준시)
Tue Jan 01 2019 00:00:00 GMT+0900 (한국 표준시)
*/
```

## new Date(milliseconds)
파라미터를 1개만 지정하면 이 값은 milliseconds로 해석
 milliseconds의 기준일자는 1970년 1월 1일 0시 0분 0초 0밀리초(UTC 시간 기준)

```
// milliseconds
let date = new Date(1000);
document.write(date + '<br>');
// Thu Jan 01 1970 09:00:01 GMT+0900 (한국 표준시)
```

#### UTC시간 기준으로 시간을 표현
toUTCString() 함수를 사용
```
// milliseconds
let date = new Date(1000);
document.write(date + '<br>');
document.write(date.toUTCString())
/*
Thu Jan 01 1970 09:00:01 GMT+0900 (한국 표준시)
Thu, 01 Jan 1970 00:00:01 GMT
*/
```

## 1970년 1월 1일 이전의 날짜 표현하기
마이너스 값

```
// milliseconds
let date = new Date(-100000000);
document.write(date + '<br>');
// Wed Dec 31 1969 05:13:20 GMT+0900 (한국 표준시)
```

## new Date('date')
```
// string date
let date = new Date("August 11, 2019 22:33:44");
document.write(date + '<br>');
/*
Sun Aug 11 2019 22:33:44 GMT+0900 (한국 표준시)
*/
```