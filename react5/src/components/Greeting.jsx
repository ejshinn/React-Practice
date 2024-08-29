import UserGreeting from "./UserGreeting.jsx";
import GuestGreeting from "./GuestGreeting.jsx";

// 조건부 렌더링 : 어떠한 조건에 따라서 렌더링이 달라지는 것
// 자바스크립트에서 조건식으로 데이터를 구분할 경우 true 및 false 2가지로 구분할 수 있음
// 여기서 데이터에 따라 Truthy로 구분하거나 Falsy로 구분할 수 있음
// 간단하게 데이터가 있으면 Truthy, 없으면 Falsy로 구분할 수 있음
// Truthy : true(Boolean 값 true), {}(빈 object 타입), [](빈 배열), 100, -200(0이 아닌 숫자), "0", "false"(빈 문자열이 아닌 문자열)
// Falsy : false(Boolean 값 false), 0, -0, 0.0(양수, 음수 상관없이 숫자 0), 0n(BigInt 타입의 0), '', "", ``(빈 문자열), null(데이터 없음), undefined(초기화되지 않음), NaN(Not a Number, 숫자가 아님)

// let a; // 변수 선언과 동시에 초기화하지 않았기 때문에 undefined 상태가 되어 falsy로 인식
// let b = []; // 변수 선언과 동시에 배열 타입으로 선언했기 때문에 변수 b에 데이터가 저장되어 있음, truthy로 인식
// let c = {}; // 변수 선언과 동시에 객체 타입으로 선언했기 때문에 변수 c에 데이터가 저장되어 있음, truthy로 인식
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn == true) {
        return <UserGreeting/>;
    }
    else {
        return <GuestGreeting/>;
    }
}

export default Greeting;