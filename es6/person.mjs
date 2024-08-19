// person.mjs

// 변수 export
export const name = '홍길동';
export const age = 30;

let email = 'hong@bitc.ac.kr';
let tel = '01012345678';
let addr = '부산광역시 부산진구 중앙대로';

// 미리 선언해 놓은 변수를 export로 한 번에 등록
// export 시 as를 사용하여 별칭을 사용하면 외부로 출력할 이름을 변경할 수 있음
export {email, tel as phone, addr}

// 함수를 직접 export
export function sum(num1, num2) {
    console.log(`두 수의 합은 ${num1 + num2} 입니다.`);
}

// 함수만 선언
function sub(num1, num2) {
    console.log(`두 수의 차는 ${num1 - num2} 입니다.`);
}

// 화살표 함수를 직접 export
export const multi = num1 => num1 * num1;
// 화살표 함수만 선언
const divide = (num1, num2) => num1 / num2;

// 미리 선언한 함수를 한번에 export
// as를 사용하여 함수의 이름을 변경하여 제공
export {sub, divide as div}

// 클래스 선언
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area = num1 => this.radius * this.radius * num1;
}

// 미리 선언된 클래스를 export
export {Circle}