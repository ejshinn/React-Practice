// Context로 선언한 파일을 import로 불러와서 사용함
import MemberContext from "./contexts/MemberContext.jsx";
import ThemeContext from "./contexts/ThemeContext.jsx";
import Layout1 from "./components/Layout1.jsx";

function App4() {
    return (
        <div className={'container mt-5'}>
            {/* 데이터 입력 시 Provider로 입력 */}
            <ThemeContext.Provider value={'danger'}>
                <MemberContext.Provider value={'짱구'}>
                    {/* 자식 컴포넌트 호출 */}
                    <Layout1 />
                </MemberContext.Provider>
            </ThemeContext.Provider>
        </div>
    );
}

export default App4;