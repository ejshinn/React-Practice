// react 모듈에서 StrictMode를 불러옴
import { StrictMode } from 'react'
// react-dom/client 모듈에서 createRoot를 불러옴
import { createRoot } from 'react-dom/client'
// App.jsx 파일에서 default export로 출력한 내용을 default import로 가져옴
import App from './App.jsx'
// index.css 파일을 가져옴
import './index.css'
import Hello from "./Hello.jsx";
import ClassComponent from "./ClassComponent.jsx";
import FuncComponent from "./FuncComponent.jsx";


// return : 리액트의 컴포넌트에서 return에 적용되는 부분은 JSX 문법을 통해서 화면을 생성함
// return되는 내용이 1 라인일 경우 () 생략 가능
// return되는 내용이 2 라인 이상일 경우 반드시 ()로 감싸야 함
// return되는 내용의 태그는 부모 태그가 반드시 1개 이어야 함

function TestPage() {
    return <div style={{background: "skyblue"}}>리액트로 만든 화면</div>
}

const TestPage2 = () => {
    return (
        <div>
            <h3>리액트로 만든 컴포넌트</h3>
            <p>한번 만들어 봤습니다.</p>
            <p>내용을 수정했습니다.</p>
        </div>
    )
}

const TestPage3 = () => {
    return (
        <div>
            <h3>화면에 출력</h3>
            <h4>화면에 추가로 출력</h4>
        </div>
    )
}

// 리액트의 virtual DOM을 생성
// id가 root인 html 태그에 App 컴포넌트를 렌더링
createRoot(document.getElementById('root')).render(
    // 문법 검사를 엄격하게 함 (기존 자바스크립트는 호환성을 위해서 자바스크립트의 문법을 유연하게 적용함)
    // JSX 문법
    // jsx 문법의 주석 : {/*  주석 내용 */} 형태로 작성함
    <StrictMode>
        {/* 미리 생성된 리액트 컴포넌트를 현재 화면에 출력함 */}
        {/*<App />*/}
        {/*<TestPage />*/}
        {/*<TestPage2 />*/}
        {/*<TestPage3 />*/}

        {/* 클래스 컴포넌트를 가져와서 화면에 출력 */}
        {/* 매개변수 toWhat에 "world"라는 데이터를 전달함 */}
        <Hello toWhat="world" />

        {/* 화면 UI를 구성하는 JSX 문법은 자바스크립트 + XML/HTML이기 때문에 기본적으로 XML 문법을 따르고 있음 */}
        {/* 시작 태그와 끝 태그가 반드시 쌍으로 존재해야 함 */}
        {/* 시작 태그만 있을 경우 시작 태그의 마지막에 종료를 뜻하는 '/'가 있어야 함 */}
        <ClassComponent />
        <FuncComponent></FuncComponent>
    </StrictMode>
)