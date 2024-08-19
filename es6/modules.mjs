// modules.mjs

// 자바스크립트에서 소스코드를 별도의 파일로 나누어서 사용할 수 있음
// 기본적으로는 html 파일에서 나누어진 자바스크립트 파일을 호출하여 사용
// 모듈이라는 개념이 추가되면서 자바스크립트끼리 파일을 호출하여 사용하는 것이 가능
// require 키워드를 사용하여 자바스크립트 파일에서 다른 자바스크립트 파일을 불러와서 사용

// ES6에서는 import/export가 추가되어 조금 더 쉽게 다른 자바스크립트의 소스를 가져올 수 있음
    // 자바스크립트에서 모듈 사용의 기본값은 'require'이며, import/export를 사용하려면 추가 설정이 필요
    // 확장자가 mjs인 파일은 추가 설정 없이 import/export를 사용할 수 있음


// as : import/export 사용 시 변수, 함수, 클래스의 이름에 별칭을 설정할 수 있음

// import : 다른 자바스크립트 모듈에서 제공하는 변수, 함수, 클래스를 가져와서 사용할 수 있음
    // named import, default import 2가지 방식이 있음

    // default import : 다른 자바스크립트 모듈에서 default export로 지정한 변수, 함수, 클래스를 가져오는 import 방식
        // import 모듈명 from "모듈경로";
        // 사용할 모듈명에 {}가 없음

    // named import : 다른 자바스크립트 모듈에서 export로 지정한 변수, 함수, 클래스를 가져오는 import
        // import {변수명, 함수명, 클래스명} from "모듈경로";
            // export로 지정된 것만 가져올 수 있음
            // 현재 모듈의 멤버인 것처럼 사용 가능
        // import * as 별칭 from "모듈경로";
            // 다른 자바스크립트 모듈에서 export로 제공하는 모든 변수, 함수, 클래스를 한 번에 다 가져옴
            // 가져온 모듈 사용 시 '별칭명.변수명', '별칭명.클래스명'으로 사용
        // import {원본명 as 별칭} from "모듈경로";
            // 여러 개의 모듈을 import 시 중복되는 모듈이 있을 경우 as를 통해서 별칭을 설정하여 사용


// export : 현재 자바스크립트 모듈에서 지정한 변수, 함수, 클래스를 다른 자바스크립트 모듈에서 사용할 수 있도록 제공

    // default export : 해당 모듈 안에서 단 1개만 설정할 수 있는 export, 다른 자바스크립트에서 사용 시 이름을 지정할 필요가 없음
        // export default 모듈명;

    // named export : 다른 자바스크립트에서 사용할 수 있도록 변수, 함수, 클래스에 export로 설정한 것
        // export {변수명, 함수명, 클래스명}
            // 다른 자바스크립트 모듈에 제공할 변수, 함수, 클래스를 현재 자바스크립트 파일의 마지막 부분에 한 번에 등록
            // 여러 개의 변수, 함수, 클래스를 한 번에 등록 가능
        // export const 변수명, export function 함수명() {...}, export class 클래스명 {...}
        // 현재 자바스크립트 파일에서 외부로 제공할 변수, 함수, 클래스에 export 키워드를 직접 붙여서 선언

console.log("----- import/export 사용하기 -----");

// export된 변수 가져오기
import {name, age, email, phone, addr} from "./person.mjs";

console.log(`name 값 : ${name}`);
console.log(`age 값 : ${age}`);
console.log(`email 값 : ${email}`);
console.log(`phone 값 : ${phone}`);
console.log(`addr 값 : ${addr}`);

// export된 함수 가져오기
import {sum, sub, multi, div} from "./person.mjs";

sum(10, 20);
sub(20, 10);
let result = multi(10);
console.log(`두 수의 곱셈은 ${result}`);
result = div(10, 3);
console.log(`두 수의 나눗셈은 ${result}`);

// export된 클래스 가져오기
import {Circle} from "./person.mjs";

const circle = new Circle(10);
result = circle.area(10);
console.log(`클래스 사용하기 : ${result}`);



console.log("\n----------");

// * 기호를 사용하여 지정한 모듈의 모든 export 가져오기
import * as cal from "./person2.mjs";

console.log(cal.name2);
console.log(cal.email2);
cal.sum2(10, 20);
cal.sub(20, 10);

const circle2 = new cal.Circle2(10);
result = circle2.area(10);
console.log(`클래스 사용하기 2 : ${result}`);

console.log("\n---------");

// 가져온 모듈에 as를 사용하여 별칭을 설정
// 이미 가져온 다른 모듈과 이름이 겹치는 것을 방지
import {sub as sub2} from "./person2.mjs";
// person.mjs 모듈에서 제공하는 sub 함수
sub(20, 10)
// person2.mjs 모듈에서 제공하는 sub 함수, import 시 as를 사용하여 별칭 사용
sub2(20, 10)

console.log("\n---------");

// default export로 지정한 변수, 함수, 클래스 가져오기
import multi2 from "./person2.mjs";
result = multi2(10);
console.log(`default export로 제공 : ${result}`);