// map.js

// ES6에서 추가된 배열 관련 함수
// forEach와 기본적으로 동일한 기능을 가지고 있는 함수
// 지정한 배열의 첫 번째 요소부터 마지막 요소까지 차례대로 반복 실행하는 함수
// forEach는 반환값이 없음, map은 반환값이 존재함
// map 함수를 통해서 실행된 내용을 모아서 새로운 배열로 출력
// map의 매개변수로 콜백 함수를 받아서 사용함

// 사용법 :
// let 변수명 = 배열명.map(function (currentValue, index, array) {
//     반복 실행할 소스코드...
//     return 반환값
// })

// currentValue(필수) : 지정한 배열에서 추출한 요소의 값
// index(옵션) : 지정한 배열에서 추출한 요소의 index 값
// array(옵션) : 지정한 배열, 원본 배열에 접근할 수 있음
// 반환값 : map 함수의 콜백 함수가 실행되고 난 후 return 키워드에 의해서 반환된 값들을 모아놓은 배열

console.log("----- map 사용하기 -----");

const numbers = [10, 20, 30, 40, 50];

console.log("----- for Each로 배열 내용 출력");

console.log("원본 배열 출력 : ");
console.log(numbers);

numbers.forEach(item => {
    console.log(`value : ${item}`);
});

console.log("----- map으로 배열 내용 단순 출력 -----");

numbers.map(function(item) {
    console.log(`value : ${item}`);
});

// numbers.map(item => {
//     console.log(`value : ${item}`);
// });

console.log(`----- forEach와 map의 차이점 -----`);

console.log("원본 배열 : ");
console.log(numbers);

let resultArray = [];

resultArray = numbers.forEach(item => {
    console.log(`forEach로 추출한 value : ${item}`);
    return item * 2;
});

console.log("forEach에서 반환한 값 : ");
console.log(resultArray);

resultArray = numbers.map(item => {
    console.log(`map으로 추출한 value : ${item}`);
    return item * 2;
});

console.log("forEach에서 반환한 값 : ");
console.log(resultArray);

console.log("\n----- map의 index, array -----");

resultArray = numbers.map((item, index, array) => {
    console.log(`index : ${index}, value : ${item}`);
    console.log(array);
    console.log("----------");
    return (index + 1) * item;
});

console.log(`map 사용 후 반환된 값 : `);
console.log(resultArray);