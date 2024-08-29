// LandingPage.jsx

import {useState} from "react";
import Toolbar from "./Toolbar.jsx";

function LandingPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    }

    const onClickLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <Toolbar isLoggedIn={isLoggedIn} onLoginClick={onClickLogin} onLogoutClick={onClickLogout}/>
            <div className={'p-3'}>로그인 여부 확인하기</div>
        </div>
    );
}

export default LandingPage;