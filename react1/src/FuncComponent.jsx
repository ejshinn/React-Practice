// FuncComponent.jsx

// 함수 컴포넌트는 자바스크립트의 함수를 생성하고 return 부분에 JSX 문법으로 UI 코드를 입력하여 사용함
// export default로 해당 함수를 export하여 사용
// 매개변수의 props는 부모 컴포넌트로부터 전달받은 데이터임
// 전달받은 데이터가 없을 경우 생략 가능
function FuncComponent(props) {
    return (
        <div>
            <h4>함수 컴포넌트 방식으로 컴포넌트 생성</h4>
            <p>함수 컴포넌트로 생성한 자식 컴포넌트입니다.</p>
        </div>
    );
}

export default FuncComponent;