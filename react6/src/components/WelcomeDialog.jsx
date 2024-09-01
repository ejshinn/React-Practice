// WelcomeDialog.jsx

import FancyBorder1 from "./FancyBorder1.jsx";
import FancyBorder2 from "./FancyBorder2.jsx";

function WelcomeDialog() {
    return (
        <div className={'border border-2 border-primary p-3'}>
            <h3>부모 컴포넌트 영역</h3>
            
            <h3>기존 방식 사용</h3>
            <FancyBorder1 color={'blue'}/>

            <hr/>


            <h3>Containment 사용</h3>
            {/* 부모 컴포넌트인 WelcomeDialog에서 자식 컴포넌트인 FancyBorder를 호출하여 UI 구성 */}
            {/* 부모 컴포넌트에서 자식 컴포넌트를 호출할 때 html을 추가하여 호출할 수 있음 */}
            <FancyBorder2 color={'blue'}>
                {/* 부모 컴포넌트가 자식 컴포넌트를 호출할 때 자식 컴포넌트의 자식 태그로 html 태그를 입력하여 UI 구성 */}
                {/* props를 통해서 부모 컴포넌트에서 입력한 html 태그가 자식 컴포넌트에게 전달됨 */}
                <h1 className={'Dialog-title'}>안녕하세요</h1>
                <p className={'Dialog-message'}>우리 사이트에 방문하신 것을 환영합니다.</p>
            </FancyBorder2>
        </div>
    );
}

export default WelcomeDialog;