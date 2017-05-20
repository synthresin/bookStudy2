# Chapter2 배열



### 1) 배열의 생성과 초기화

배열 생성 방법 mdn 참고

```javascript
var test1 = new Array();
var test1 = new Array(7);
var test1 = new Array(1,2,3,4,5,6,7);

var test1 = [];
var test1 = [1,2,3,4,5,6,7];

```



출력

```javascript
test1.map( x => console.log(x));
test1.forEach( x => console.log(x));

for( var i = 0; i < test1.length; i++ ) {
  console.log( test1[i] );
}
```



```javascript
/* 배열을 이용한 피보나치 */

function fibo(number) {
  var result = [0, 1];
  for( var i = 2; i <= number; i++ ) {
    result[i] = result[i-1] + result[i-2];
  }
  return result[number]
}
```



### 2) 원소 추가와 삭제

```javascript
var test1 = [1,2,3,4,5,6];

/* 뒷 부분에 원소 추가 */
test1[test1.length] = 7;
test1.push(8);
test1.push(9,10);

// [119, 120, 121, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* 앞 부분에 원소 추가 */
test1.unshift(121);
test1.unshift(119, 120);

for( var i = test1.length; i > 0; i-- ) {
  test1[i] = test1[i-1];
}
test1[0] = 212;

/* 뒷 부분 원소 삭제 */
test1.pop();
test1.length = test1.length -1;

/* 앞 부분 원소 삭제 */
for( var i = 0; i < test1.length; i++ ) {
  test1[i] = test1[i+1];
} // 이렇게 하면 맨마지막 원소는 undefined가 되고 길이는 여전히 같다. 이것은 배열의 원래 값들이 덮어쓰인 것이지 실제로 값이 삭제된 것은 아니다. 이럴때는 test1.length를 test1.length-1 하면 배열 자체가 줄어든 것을 볼수 있다.

test1.shift();
// pop() 과 shift() 는 각각 삭제하면서 삭제되는 대상을 반환한다.
```



### 3) 특정위치에 추가/삭제

```javascript
test1 = [1,2,3,4,5]
test1.splice(4);	// 인덱스 4 이상 모든 값을 반환 하고 지움
test1.splice(3,2)	// 인덱스 3를 기준으로 2개의 값을 반환, 지움
test1.splice(3,2,111,222) // 인덱스 3을 기준으로 2개 값을 반환 및 지우고 인덱스 3부터 111,222채워 넣는다. 만약 2대신 0을 넣으면 인덱스 3자리부터 111,222 를 채워넣고 그 자리에 있던 것들은 인덱스 뒷 번호로 밀어낸다.
```



### 4) 2차원과 다차원 배열

- 자바스크립트는 1차원 배열만 지원할뿐 행렬 기능은 따로 없다.
- 배열의 배열을 응용해서 다차원 배열이 구현가능하다.

```javascript
var test2 = [[1,2,3,4,5],[6,7,8,9,10]];
// n차원 배열일 경우 loop를 n번 중첩 사용해야 한다.
```



### 5) 자바스크립트 배열 메소드 정리

| 메소드         | 설명                                       |
| ----------- | ---------------------------------------- |
| concat      | 다수의 배열을 합치고, 병합된 배열의 사본을 반환한다.           |
| every       | false가 반환되기 전까지 배열의 각 원소별로 함수를 호출한다.     |
| filter      | 지정된 함수의 결과 값을 true로 만드는 우너소들로만 구성된 별도의 배열을 반환한다. |
| forEach     | 배열의 각 원소별로 지정된 함수를 실행한다.                 |
| join        | 배열 원소 전부를 하나의 문자열로 합친다.                  |
| indexOf     | 특정 원소의 인덱스를 찾아 반환한다.                     |
| lastIndexOf | 검색 조건에 부합하는 가장 마지막에 위치한 원소를 찾아 그 인덱스를 반환한다. |
| map         | 배열의 각 원소별로 지정된 함수를 실행한 결과로 구성된 새로운 배열을 반환한다. |
| reverse     | 배열의 우너소 순서를 거꾸로 바꾼다.                     |
| slice       | 지정된 인덱스로부터 우너소를 잘라 새로운 배열을 반환한다.         |
| some        | 지정된 함수의 결과 값을 true로 만드는 원소 각각을 전달한다.     |
| sort        | 배열의 원소를 알파벳순으로, 또는 지정된 함수에 따른 순서로 정렬한다.  |
| toString    | 배열을 문자열로 바꾸어 반환한다.                       |
| valueOf     | 배열을 문자열로 반환한다.                           |



### 6) 여러배열 합치기

- 다수의 배열을 합칠때에는 ```concat``` 메소드를 이용하면 된다.

```javascript
var t1 = [1,2,3];
var t2 = [4,5,6];
var t3 = t1.concat(t2);
// 배열, 객체, 원소가 몇개가 되었든 인자로 넘겨주면 그 순서대로 병합된다.
```



### 7) 반복자 함수

- every : 함수의 결과 값이 false가 될 때까지 배열의 모든 원소를 반복
- some : 지정된 함수의 결과가 true가 될때가지 배열의 원소를 반복
- forEach : 조건에 상관없이 배열의 모든 원소를 반복한다.
- map : 배열의 모든 원소를 반복하며 그 결과를 새 배열 객체로 반환
- filter : 배열의 모든 원소를 반복하며 함수의 결과값을 true로 만드는 원소로만 구성된 새 배열을 반환
- reduce : 배열의 모든 원소를 반복하며 previousValue, currentValue, index, array를 인자로 받는 함수를 지정하는데, 이 함수로 이전값에 이후 값을 반영하여 최종 결과 값을 얻을수 있다. 



### 8) 검색과 정렬

- JS 배열에는 정렬/ 검색 기능을 수행하는 메소드가 내장되어 있다.
- sort() 메소드는 모든 원소를 문자열로 취급해서 사전적으로 정렬한다.
- Array.sort 함수는 비교 함수를 인자로 받는다.

#### 사용자 정의 정렬

- 원소의 타입과 상관없이 배열은 정렬할수 있으며 함수로 필요에 맞게 정렬 로직을 구현한다.

```javascript
var friends = [
  {name:'Jonh', age:34 },
  {name:'Camila', age:21 },
  {name:'Jack', age:30 }
];

function comparePerson(a, b) {
  if ( a.age < b.age ) {
    return -1;
  }
  if ( a.age > b.age ) {
    return 1;
  }
  return 0;
}
console.log( friends.sort(comparePerson) );
```



#### 문자열 정렬

```javascript
var names = ['Ana', 'ana', 'john', 'John'];
console.log( names.sort() );

// ["Ana", "John", "ana", "john"]
```

위와 같이 나오는 이유는 A, J, a, j의 아스키 값이 각각 65, 74, 97, 106 이기 때문이다.

[아스키표 참고](http://www.asciitable.com)

```javascript
// compareFunction : 대소문자 구별 없이 문자를 비교 
var names = ['Ana', 'ana', 'john', 'John'];

names.sort( function( a, b ) {
  if ( a.toLowerCase() < b.toLowerCase() ) {
    return -1;
  }
  if ( a.toLowerCase() > b.toLowerCase() ) {
    return 1;
  }
  return 0;
});

// 악센트 부호가 있을경우에는 localeCompare 메소드를 사용한다.
var names2 = ['Máeve', 'Maeve']; // 악센트 표기의 유무 차이
console.log( names2.sort( function(a, b) {
  return a.localeCompare(b);
}));
// ["Maeve", "Máeve"]
```



#### 검색

- 검색의 첫번째 원소 인덱스는 indexof, 마지막 원소 인덱스는 lastIndexOf로 구할수 있다.





### 9) 배열을 문자열로 변환

- ```join``` 은 문자열로 만들때 각 배열 원소 사이에 separator 구분자를 두고 싶을때 사용한다.
- ```toString``` 은 배열의 모든 원소를 단일 문자열로 바꿀 때 사용한다.