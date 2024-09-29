// Context API : 리액트는 기본적으로 단방향(부모 -> 자식)으로 데이터를 전달
// 조상 컴포넌트에서 자손 컴포넌트로 데이터를 전달 시 props 객체를 이용하여 데이터를 전달
// 조상 컴포넌트와 타깃 컴포넌트 사이에 있는 자손 컴포넌트들을 사용하지 않는 props 데이터를 가지고 있어야 함
// 조상 컴포넌트와 타깃 컴포넌트 간의 거리가 멀면 멀수록 데이터의 관리가 어렵기 때문에 전역 변수로 사용할 수 있는 Context를 생성하여 데이터를 저장하고 필요한 부분에서 해당 Context를 호출하여 한 번에 데이터를 전달함

// React.createContext(기본값) : Context API를 사용하기 위해서 Context를 생성하는 함수, 기본값 설정 가능
// Provider를 사용하지 않았을 경우 createContext()를 통해 설정된 기본값을 Consumer가 사용
// 초깃값을 undefined 사용 시 기본값을 사용할 수 없음
// 사용법 :
// const Context변수명 = React.createContext(기본값);

// Context.Provider : createContext()를 통해서 생성된 Context에 사용자가 원하는 데이터를 설정함
// value 속성에 전달하고자 하는 데이터를 입력
// value 속성은 필수, value 속성의 이름은 고정
// 전달할 Context가 여러 개일 경우 Provider를 겹쳐서 사용함
// 사용법 :
// <MyContext.Provider value={전달할 데이터}>
//     자식 컴포넌트...
// </MyContext.Provider>

// Context.Consumer : Context.Provider를 통해서 저장된 데이터를 가져옴
// provider에서 value 속성에 저장한 값을 가져옴, 속성명은 value로 고정
// 사용법 : 
// <MyContext.Consumer>
//     { value => 출력할 컴포넌트 }
// </MyContext.Consumer>

// Context.displayName : 개발자 도구에서 확인 시 사용하는 Context의 이름 설정
// Context는 여러 개를 중복하여 사용할 수 있기 때문에 개발자 도구에서 사용자가 쉽게 확인하기 위해서 사용

import React from "react";

// Context API를 사용하여 Context 객체 생성, 기본값으로 'primary'로 설정
const ThemeContext = React.createContext('primary');
ThemeContext.displayName = '테마컨텍스트'; // 선택사항

// 데이터 전달의 시작점
function App2() {
    return (
        <div className={'container mt-5'}>
            {/* Provider를 사용하여 전달할 데이터를 설정 */}
            {/* Provider에서 사용하는 value 속성명을 고정 */}
            {/* Provider 하나에 데이터 1개 저장, 동시에 여러 개의 데이터를 저장하려면 배열, object 타입을 사용 혹은 Context를 여러 개 생성 */}
            {/* Provider는 여러 개를 중복하여 사용할 수 있음 */}
            <ThemeContext.Provider value={'warning'}>
                {/* 자식 컴포넌트 Toolbar2 호출 */}
                <Toolbar2 />
            </ThemeContext.Provider>
        </div>
    );
}

// 자식 컴포넌트
function Toolbar2() {
    // 부모 컴포넌트에서 전달받은 데이터 없음, 자식 컴포넌트 ThemeButton2 호출, 자식 컴포넌트에 전달하는 데이터 없음
    return <ThemeButton2 />
}

// 자식 컴포넌트, 부모 컴포넌트에서 전달받은 데이터 없음
function ThemeButton2() {
    return (
        // Consumer : Provider를 통해서 Context에 저장된 내용을 가져옴
        // 콜백 함수 형태로 동작, 매개변수로 Provider에서 저장한 value 속성의 값을 사용함
        // 타깃 컴포넌트의 한 단계 부모 컴포넌트에 Consumer를 사용함
        <ThemeContext.Consumer>
            {/* Provider에서 설정한 데이터를 가져온 후 자식 컴포넌트에 전달 시 props를 통해서 전달함 */}
            { value => <Button2 theme={value} /> }
        </ThemeContext.Consumer>
    );
}
// 타깃 컴포넌트
function Button2(props) {
    const clickButton = () => alert(`사용한 부트스트랩 테마 : ${props.theme}`);

    // 부모 컴포넌트에서 Consumer를 통해서 가져온 데이터를 props를 통해서 전달받아 사용함
    return <button type={'button'} className={`btn btn-${props.theme}`} onClick={clickButton}>{props.theme} 테마 버튼</button>
}

export default App2;