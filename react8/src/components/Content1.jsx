// useContext는 리액트에서 제공하는 Hooks이기 때문에 사용 전 import 필수
import {useContext} from "react";
// 사용하려는 Context를 import 함
import ThemeContext from "../contexts/ThemeContext.jsx";
import ProfilePage1 from "./ProfilePage1.jsx";

function Content1() {
    // useContext() : 리액트에서 상태 관리를 위해서 자체적으로 제공하는 Hooks
    // 선언해놓은 컨텍스트를 쉽게 사용하도록 함
    // 기존에 선언한 컨텍스트의 데이터를 쉽게 가져올 수 있음

    // 사용법 :
    // const 변수명 = useContext(사용할 컨텍스트);
    const themeValue = useContext(ThemeContext);

    return (
        <div className={'mt-3 p-3 border border-primary'}>
            {/* useContext() Hooks를 통해서 가져온 데이터를 props를 사용하여 자식 컴포넌트에 전달 */}
            <ProfilePage1 theme={themeValue} />
        </div>
    );
}

export default Content1;