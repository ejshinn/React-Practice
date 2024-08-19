// person2.mjs

const name2 = '짱구';
let email2 = 'shin@bitc.ac.kr';

function sum2(num1, num2) {
    console.log(`두 수의 합은 ${num1 + num2}`);
}

const sub = (num1, num2) => {
    console.log(`person2에서 제공하는 함수`);
    console.log(`두 수의 뺄셈은 ${num1 - num2}`);
    return num1 - num2;
}

const multi2 = num1 => num1 * num1;

class Circle2 {
    constructor(radius) {
        this.radius = radius;
    }

    area = num1 => this.radius * this.radius * num1;
}

export {name2, email2, sum2, sub, Circle2}

export default multi2;