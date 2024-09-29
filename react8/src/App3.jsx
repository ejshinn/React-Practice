import React from "react";

// createContext()를 사용하여 Context 2개 생성
const ThemeContext = React.createContext("light");
ThemeContext.displayName = '테마 컨텍스트';
const MemberContext = React.createContext('Guest');
MemberContext.displayName = '사용자 컨텍스트';

function App3() {
    const theme = 'dark';
    const signedInUser = '홍길동';

    return (
        <div className={'container mt-5'}>
            {/* 2개의 Context를 전달해야 하기 때문에 Provider 2개를 겹쳐서 사용 */}
            <ThemeContext.Provider value = {theme}>
                <MemberContext.Provider value={signedInUser}>
                    <Toolbar3 />
                </MemberContext.Provider>
            </ThemeContext.Provider>
        </div>
    );
}

// 자식 컴포넌트, 부모 컴포넌트에서 전달받은 데이터 없음
function Toolbar3() {
    return <ThemeButton3 />
}

// 자식 컴포넌트, 부모 컴포넌트에서 전달받은 데이터 없음
function ThemeButton3() {
    return (
        // Consumer를 호출하여 Provider로 저장한 데이터 가져옴
        // Provider를 겹쳐 사용했으므로 Consumer도 겹쳐 사용 가능함
        // Provider로 저장 시 사용한 value 속성명을 Consumer에서 사용자가 원하는 이름으로 변경할 수 있음
        <ThemeContext.Consumer>
            { theme => (
                <MemberContext.Consumer>
                    {member => (
                        // Consumer를 통해서 Context에 저장된 정보를 자식 컴포넌트에 props를 통해서 전달
                        <Button theme = {theme} username = {member} />
                    )}
                </MemberContext.Consumer>
            ) }
        </ThemeContext.Consumer>
    );
}

// 타깃 컴포넌트, 부모 컴포넌트에서 Consumer를 통해서 가져온 데이터를 props를 통해서 전달받아 사용함
function Button(props) {
    const {theme, username} = props;
    const clickButton = () => alert(`전달받은 데이터 : ${theme}, ${username}`);

    return (
        <div className={'p-3 mt-3'}>
            <button type={'button'} className={`btn btn-${theme}`} onClick={clickButton}>{theme} 테마 버튼</button>
            <input type={'text'} className={'form-control mt-3'} value={username} />
        </div>
    );
}

export default App3;