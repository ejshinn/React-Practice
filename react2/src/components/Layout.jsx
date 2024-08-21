import Main from "./Main.jsx";

// 함수 컴포넌트 방식으로 생성된 Layout 컴포넌트
// 부모 컴포넌트에서 props를 통하여 데이터를 전달받음
// 전달받은 props는 컴포넌트 안에서 변수로 받아서 사용하거나 직접 사용이 가능함
function Layout(props) {
    // props로 전달받은 데이터를 변수로 따로 받아서 사용
    const height = props.height;
    const header = props.header;

    return (
        // props로 전달받은 데이터를 직접 사용
        // style 속성을 사용하는 html 태그가 jsx 문법이므로 진짜 html이 아니기 때문에 jsx 방식의 css를 사용해야 함
        // jsx 방식의 css 코드는 자바스크립트의 object 타입으로 입력해야 함
        <div style={{width: props.width, height: height, background: "skyblue"}}>
            {/* html 태그 안에서 {} 사용 시 자바스크립트 소스코드 사용 가능 */}
            {/* 원래는 자바스크립트의 변수 header의 내용이 출력되지만 변수 header에 저장된 값이 Header 컴포넌트이므로 Header 컴포넌트를 화면에 출력함 */}
            {header}
            <Main/>
            {/* props로 전달받은 footer가 Footer 컴포넌트이므로 화면에 Footer 컴포넌트를 출력함 */}
            {props.footer}
        </div>
    );
}

export default Layout;