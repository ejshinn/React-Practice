// objectsExtension1.js

// 객체확장표현식

console.log('----- ES5 객체 표현식 -----');

var x = 10;
var y = 20;
// ES5 형식으로 object 타입 생성과 동시에 데이터 입력
var obj = {x: x, y: y};
console.log(obj);

var randomKeyString = "other";
// 빈 obejct 타입 생성
var combined = {};
console.log(combined);

// object 타입의 변수에 새로운 key와 value를 추가
combined['one' + randomKeyString] = "some value";
console.log(combined)

// object 타입 선언과 동시에 데이터 추가, 함수도 추가
var obj2 = {
    x: x,
    methodA: function() {
        console.log('method A');
    },
    methodB: function() {
        return 0;
    }
};

console.log(obj2);
console.log(obj2.x);
obj2.methodA();
console.log(obj2.methodB());


console.log('\n----- ES6의 객체 표현식 -----');
var x = 10;
var y = 20;
// ES6 방식으로 object 타입을 선언과 동시에 데이터를 입력 시 value로 이미 선언된 변수를 사용할 경우 key를 생략할 수 있음
// value로 사용하는 변수의 이름을 key명으로 사용하고, 변수에 저장된 값을 value로 사용함
var obj = {x, y};
console.log(obj);

var randomKeyString = "other";
// object 타입을 선언과 동시에 데이터 입력
// 구조분해할당 방식을 사용하여 object 타입의 변수를 선언과 동시에 데이터 입력
var combined = {['one' + randomKeyString] : "some value"};
console.log(combined);

// object 타입을 선언과 동시에 데이터 입력
// object 타입의 요소 선언 시 key 생략
// 함수의 경우 key를 생략하고 함수명을 가지는 함수 입력(함수명이 key명이 됨)
var obj2 = {
    x,
    methodA() {
        console.log('method A');
    },
    methodB() {
        return 0;
    }
};

console.log(obj2);
console.log(obj2.x);
obj2.methodA();
console.log(obj2.methodB());