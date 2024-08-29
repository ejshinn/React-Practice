// LoginControl2.jsx

import {useState} from "react";
import Greeting from "./Greeting.jsx";

// function 키워드로 자식 컴포넌트 선언
function LoginButton(props) {
    return <button type={'button'} className={'btn btn-primary'} onClick={props.onClick}>로그인</button>
}

// 화살표 함수로 자식 컴포넌트 선언
const LogoutButton = (props) => <button type={'button'} className={'btn btn-warning'} onClick={props.onClick}>로그아웃</button>

function LoginControl2() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => setIsLoggedIn(true)
    const handleLogoutClick = () => setIsLoggedIn(false)

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {/* inline if ~ else : if ~ else문이 필요한 JSX 문법 부분에 삼항연산자를 사용하여 조건식 렌더링을 진행 */}
            {/* 엘리먼트 변수 없이 삼항연산자로 조건에 따라 자식 컴포넌트를 호출 */}
            {
                isLoggedIn == true
                    ? <LogoutButton onClick={handleLogoutClick}/>
                    : <LoginButton onClick={handleLoginClick}/>
            }
        </div>
    );
}

export default LoginControl2;