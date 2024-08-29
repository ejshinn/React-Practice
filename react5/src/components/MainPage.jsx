// MainPage.jsx

import {useState} from "react";
import WarningBanner from "./WarningBanner.jsx";

function MainPage() {
    // state로 관리하고 있는 변수
    const [showWarning, setShowWarning] = useState(false);

    // 이벤트 처리 함수
    const handleToggleClick = () => {
        // state로 되는 showWarning의 값 변경, 이전 값의 반대로 변환
        setShowWarning((prevShowWarning) => !prevShowWarning);
    }

    return (
        <div>
            {/* 자식 컴포넌트 호출, warning이라는 이름으로 showWarning 변수값을 전달 */}
            <WarningBanner warning={showWarning}/>
            {/* 클릭 이벤트를 적용한 버튼 */}
            {/* 삼항연산자를 사용하여 버튼의 텍스트를 상황에 따라 변경 */}
            <button type={'button'} className={'btn btn-primary'} onClick={handleToggleClick}>{showWarning ? '감추기' : '보이기'}</button>
        </div>
    );
}

export default MainPage;