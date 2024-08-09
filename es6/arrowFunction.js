// arrowFunctions.js

// 화살표 함수
// ES6에서는 람다식을 사용하여 함수를 선언하는 화살표 함수를 제공함
// 화살표 함수는 ES5 문법에서 함수를 변수에 저장하는 방식과 비슷한 방식으로 사용함
// 'function' 키워드를 생략하고, 매개변수를 입력 후 화살표(=>) 기호를 사용함
// 화살표(=>) 기호 다음에 코드 블록 {}를 사용하여 소스코드를 입력
// 함수의 내용이 return 한 줄일 경우 코드 블록 생략 가능
// 매개변수가 1개일 경우 () 생략 가능
// 매개변수가 없을 경우에는 반드시 ()를 입력해야 함
// 반환값이 object 타입일 경우 반드시 ()로 감싸야 함

console.log('----- ES5 방식의 함수 -----');

// ES5 방식의 함수 선언 방법 1
function add1(num1, num2) {
    return num1 + num2;
}
console.log(`함수 add1 실행 : ${add1(10, 20)}`);

// ES5 방식의 함수 선언 방법 2
var add2 = function(num1, num2) {
    return num1 + num2;
}
console.log(`함수 add2 실행 : ${add2(100, 200)}`);


console.log('\n----- ES6 방식의 함수 -----');


// ES6 방식의 함수 선언 방법
const add3 = (num1, num2) => {
    return num1 + num2;
}
console.log(`화살표 함수 add3 실행 : ${add3(10, 20)}`);

// ES6 방식의 화살표 함수 선언 시 소스코드가 하나의 라인이면 {} 생략 가능
// num1 + num2를 반환
const add4 = (num1, num2) => num1 + num2;
console.log(`화살표 함수 add4 실행 : ${add4(10, 20)}`);

// 매개변수가 1개이고 소스코드가 반환값 1개인 화살표 함수
const add5 = (num1) => num1 * num1;
console.log(`화살표 함수 add5 실행 : ${add5(10)}`);

// 매개변수가 1개일 경우 () 생략 가능
// 매개변수가 1개이고, 소스코드가 반환값 1개인 화살표 함수
const add6 = num1 => num1 * num1;
console.log(`화살표 함수 add6 실행 : ${add6(10)}`);

// 매개변수가 없을 경우 ()를 반드시 입력해야 함
const add7 = () => { console.log('매개변수가 없는 화살표 함수'); }
const add8 = () => console.log('매개변수가 없는 화살표 함수');
add7();
add8();

// 반환값이 object 타입일 경우
const add9 = (num1, num2) => {
    return {add: num1 + num2, multi: num1 * num2};
}

let result = add9(10, 20);
console.log('반환값이 object 타입일 경우 : ');
console.log(result);

// 반환값이 object 타입일 경우 ()를 사용하여 object 타입을 감쌈
const add10 = (num1, num2) => ({add: num1 + num2, multi: num1 * num2});
resutl = add10(10, 20);
console.log('반환값이 object 타입일 경우 : ');
console.log(result);


console.log("\n----- 함수의 반환타입이 함수일 경우 -----");

// 함수의 반환타입이 함수일 경우
function fun1(num) {
    let value = num;

    // 익명 함수를 반환
    return function(value) {
        return num + value;
    }
}

console.log(fun1(10));
let result1 = fun1(10);
console.log(result1(10));


console.log("\n----- 위의 내용을 ES6로 변환 -----");

const func2 = num => value => num + value;

console.log(func2(10));
result1 = func2(10);
console.log(result1(10));

// fun2()의 반환값인 익명함수를 변수에 저장하고 저장한 익명함수를 다시 실행하는 소스코드를 한번에 표현
console.log(func2(10)(10));