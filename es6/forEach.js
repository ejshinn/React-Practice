// forEach.js

// ES6에서 배열 관련 함수로 추가된 함수
// 지정한 배열의 첫 번째 요소에서 마지막 요소까지 차례대로 반복 실행하는 함수
// 매개변수로 콜백 함수를 받아서 사용함
// 자바의 향상된 for 문과 동일한 역할을 하는 함수

// 사용법 : 
// 배열명.forEach(function (currentValue, index, array) {
//     반복 실행할 소스코드...
// })

// currentValue(필수) : 지정한 배열에서 추출한 요소의 값
// index(옵션) : 지정한 배열에서 추출한 요소의 index 값, 0부터 시작
// array(옵션) : 지정한 배열, 원본 배열에 접근 가능

console.log("----- ES5에서의 배열 출력 -----");

const numbers = [10, 20, 30, 40, 50];

console.log("----- 배열의 내용을 for문으로 출력 -----");

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("----- 배열의 내용을 for ~ in문으로 출력 -----");

for(let item in numbers) {
    console.log(numbers[item]);
}

console.log("----- ES6의 forEach로 출력 -----");

numbers.forEach(function(item) {
    console.log(item);
});

console.log("----- forEach를 화살표 함수로 표현 -----");
numbers.forEach(item => {
    console.log(item);
});

// numbers.forEach(item => console.log(item));

console.log("----- forEach의 index -----");

console.log(numbers);
numbers.forEach(function(item, index) {
    console.log(`현재값 : ${item}, index : ${index}`);
});

console.log("----- forEach의 array -----");

console.log(numbers);
numbers.forEach(function(item, index, array) {
    console.log(`index : ${index}, value : ${item}`);
    console.log(`배열(array) 내용 : `);
    console.log(array);
    console.log("-----");
});

// 화살표 함수로 변환
// numbers.forEach((item, index, array) => {
//     console.log(`index : ${index}, value : ${item}`);
//     console.log(`배열(array) 내용 : `);
//     console.log(array);
//     console.log("-----");
// });