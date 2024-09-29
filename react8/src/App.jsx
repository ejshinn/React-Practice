// 리액트에서 사용자가 원하는 최종 컴포넌트로 데이터를 전달 시 중간에 있는 모든 컴포넌트를 통해서 데이터를 전달해야 함
// 중간에 있는 컴포넌트들은 사용하지 않는 속성을 받아서 자식 컴포넌트로 그대로 전달

// 시작점
function App() {
    return (
        <div className={'container mt-5'}>
            {/* 자식 컴포넌트를 호출, theme라는 속성을 선언하고 데이터를 전달 */}
            {/*<Toolbar theme={'dark'} />*/}
            <Toolbar theme={'primary'} />
        </div>
    );
}

// 자식 컴포넌트, 부모 컴포넌트에서 데이터를 전달받음
// 전달받은 데이터를 직접 사용하지 않고 바로 자식 컴포넌트에게 전달
function Toolbar(props) {
    return (
        // 자식 컴포넌트인 ThemeButton 컴포넌트를 호출, 부모 컴포넌트인 App 컴포넌트에서 전달받은 데이터 theme를 자식 컴포넌트에게 전달
        <ThemeButton theme={props.theme} />
    );
}

// 자식 컴포넌트
function ThemeButton(props) {
    return (
        // 자식 컴포넌트인 Button 컴포넌트 호출
        // 부모 컴포넌트인 Toolbar 컴포넌트에서 전달받은 데이터 theme를 자식 컴포넌트에게 전달
        <Button theme={props.theme} />
    );
}

// 최종 컴포넌트
function Button(props) {
    const clickButton = () => alert(`사용한 부트스트랩 테마 : ${props.theme}`);

    return (
        // 부모 컴포넌트에서 전달받은 데이터 theme를 사용
        <button type={'button'} className={`btn btn-${props.theme}`} onClick={clickButton}>{props.theme} 테마 버튼</button>
    );
}

export default App