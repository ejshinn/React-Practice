// templateString.js

// 템플릿 문자열
// ES6 문법에서 문자열을 연산식과 함께 사용 시 조금 더 쉽게 사용할 수 있도록 하는 템플릿 문자열을 제공함
// 큰 따옴표(" "), 작은 따옴표(' ') 대신 백틱(` `)으로 문자열을 감싸서 문자열을 표현함
// 템플릿 문자열 사용 시 문자열 내부에 ${변수명}을 사용하여 문자열 연결 연산자 없이 바로 문자열과 변수를 함께 사용할 수 있음
// ${ } 안에서 간단한 연산도 가능함

console.log('----- ES5 방식에서 문자열 사용 -----');

var string1 = '안녕하세요';
var string2 = "반갑습니다";
// ES5 방식에서는 문자열 연결 연산자 '+'를 사용하여 변수의 내용과 문자열을 연결함 
var greeting = string1 + '  ' + string2;

var product = {name: '도서', price: '4,200원'};
// object 타입과 문자열을 문자열 연결 연산자 '+'를 사용하여 연결함
var message = '제품' + product.name + '의 가격은 ' + product.price + '입니다.';

var value1 = 1;
var value2 = 2;
var booValue = false;
// 문자열 연결 연산자를 사용하여 문자열과 변수를 연결 시 변수끼리 연산이 있을 경우 연산자의 우선 순위에 따라서 연산이 발생함
var operator1 = '곱셈값은 ' + value1 * value2 + '입니다.';
// 문자열 연결 연산 사용 시 ()를 사용하여 간단한 연산을 진행
var operator2 = '불리언값은 ' + (booValue ? '참' : '거짓') + '입니다.';
// 여러줄에 대한 입력을 진행 시 \n을 사용함
var multiLine = '문자열 1\n문자열 2';

console.log(greeting);
console.log(message);
console.log(operator1);
console.log(operator2);
console.log(multiLine);


console.log('\n----- ES6 방식으로 템플릿 문자열 사용 -----');
var string1 = '안녕하세요';
var string2 = '반갑습니다';
// 문자열 연결 연산자 없이 ${변수명}으로 문자열과 변수의 내용을 표현
var greeting = `${string1}  ${string2}`;

var product = {name: '도서', price: '4,200원'};
// object 타입과 문자열을 ${변수명}으로 내용을 출력
var message = `제품 ${product.name}의 가격은 ${product.price}입니다.`;

var value1 = 1;
var value2 = 2;
var booValue = false;
// 문자열 내부에서 연산식 사용 시 ${연산식} 형태로 사용
var operator1 = `곱셈값은 ${value1 * value2}입니다.`;
var operator2 = `불리언값은 ${booValue ? '참' : '거짓'}입니다.`;
// 줄바꿈 기호없이 그대로 줄바꿈을 하면 실제로 적용
var multiLine = `문자열 1
문자열 2`;

console.log(greeting);
console.log(message);
console.log(operator1);
console.log(operator2);
console.log(multiLine);