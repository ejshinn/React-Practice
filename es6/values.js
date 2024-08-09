// values.js
// 가변변수와 불변변수
// ES6에서 변수를 선언하는 키워드 let, const가 추가됨
// var : 예전부터 사용하던 변수를 선언하는 키워드
    // 변수는 메모리상에 존재하는 변수의 범위를 함수를 기준으로 함
    // 변수 선언 후 값을 계속 변경할 수 있음
    // 동일한 이름으로 변수 재선언 가능함

// let : ES6에서 추가된 변수를 선언하는 키워드
    // 변수는 메모리상에 존재하는 변수의 범위를 코드 블록을 기준으로 함
    // 변수 선언 후 값을 계속 변경할 수 있음
    // 동일한 이름의 변수로 재선언할 수 없음

// const : ES6에서 추가된 상수를 선언하는 키워드
    // 상수는 메모리상에 존재하는 변수 범위를 코드 블록을 기준으로 함
    // 상수 선언 후 값을 변경할 수 없음(선언과 동시에 데이터 저장)
        // const는 상수이지만 저장된 값이 배열 혹은 object 타입일 경우 배열 및 object 타입의 요소값은 변경할 수 있음
        // const에 저장된 배열 혹은 object 타입은 값 자체가 저장되는 것이 아니고 주소가 저장되는 것이기 때문에 해당 주소가 가르키는 곳의 값은 변경할 수 있음
    // 동일한 이름의 상수를 재선언할 수 없음 

var varA = 10; // 변수 선언
let letA = 10; // 변수 선언
const constA = 10; // 상수 선언
console.log(`var로 선언한 변수 : ${varA}`);
console.log(`let으로 선언한 변수 : ${letA}`);
console.log(`const로 선언한 상수 : ${constA}\n`);

varA = 100;
letA = 100;
// constA = 100; // 오류 발생, const로 선언한 상수는 값을 변경할 수 없음
console.log(`var로 선언한 변수 값 수정 : ${varA}`);
console.log(`let으로 선언한 변수 값 수정 : ${letA}\n`);

var varA = 1000; // var로 선언한 변수는 재선언 가능
// let, const로 선언한 변수는 재선언 불가능
// let letA = 1000;
// const constA = 1000;
console.log(`var로 선언한 변수 재선언 : ${varA}\n`);

if(true) {
    var varB = 10;
    let letB = 10;
    console.log(`if 코드 블록 안에서 선언된 var 변수 : ${varB}`);
    console.log(`if 코드 블록 안에서 선언된 let 변수 : ${letB}\n`);
}

// var로 선언한 변수는 메모리상에 존재하는 범위를 함수를 기준으로 함
// if문에서 선언한 var 변수는 if문 밖에서 호출이 가능함
console.log(`if문 밖에서 호출한 var 변수 : ${varB}`);
// let으로 선언한 변수는 메모리상에 존재하는 범위를 코드 블록을 기준으로 함
// if문에서 선언한 let 변수는 if문 밖에서 호출할 수 없음
// console.log(`if문 밖에서 호출한 let 변수 : ${letB}`);

function funcA() {
    var varC = 10;
    let letC = 10;
    console.log(`함수 funcA 안에서 선언한 var 변수 : ${varC}`);
    console.log(`함수 funcA 안에서 선언한 let 변수 : ${letC}`);
}

funcA();

// var로 선언한 변수의 범위는 함수이므로 함수를 벗어나면 변수가 삭제됨
// console.log(`함수 funcA 밖에서 호출한 var 변수 : ${varC}`);
// let으로 선언한 변수의 범위는 코드 블록이므로 코드 블록을 벗어나면 변수가 삭제됨
// console.log(`함수 funcA 밖에서 호출한 let 변수 : ${letC}`);

console.log("\n----------\n");

// const로 선언한 상수에 저장된 데이터가 기본 데이터 타입이 아닌 배열이나 object 타입일 경우 값 자체가 저장되는 것이 아니라 주소가 저장됨
const info = {name: '홍길동', age: 30};
console.log(info);

// const로 선언한 상수인 info의 주소는 변경되지 않기 때문에 내부 데이터를 변경하는 것은 상관없음
info.age = 24;
console.log(info);

// const로 선언한 상수인 info가 object(혹은 배열) 타입이므로 데이터의 추가 및 삭제가 가능함
info.job = '의적';
console.log(info);

// const로 선언한 상수인 info에 다른 object(혹은 배열) 타입을 저장하는 것은 주소 자체가 변경되는 것이므로 수정이 불가능함
// info = {name: '임꺽정', age: 40};


console.log("\n----------\n");

// 무결성 내장 함수 사용

const arr1 = [10, 20, 30];
const arr2 = [10, 20, 30];

// const로 선언한 배열의 내용을 ES5 문법에서 제공하는 함수를 사용하여 데이터를 추가
// const로 선언한 배열의 데이터 무결성이 해제되는 부분이기 때문에 사용하는 것을 권장하지 않음
console.log(`원본 배열 arr1 : ${arr1}`);

arr1.push(40);
arr1.push(50);
console.log(`가변 내장함수로 수정된 배열 arr1 : ${arr1}\n`);

console.log(`원본 배열 arr2 : ${arr2}`);

const arr3 = arr2.concat(40);
const arr4 = arr3.concat(50);
console.log(`무결성 내장함수로 수정된 배열 arr4 : ${arr4}\n`);

arr1.pop();
arr1.pop();
console.log(`가변 내장함수로 수정된 배열 arr1 : ${arr1}\n`);

const arr5 = arr4.slice(0, arr4.length - 1);
const arr6 = arr5.slice(0, arr5.length - 1);
console.log(`무결성 내장함수로 수정된 배열 arr6 : ${arr6}\n`);