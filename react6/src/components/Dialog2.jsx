// Dialog2.jsx

import FancyBorder2 from "./FancyBorder2.jsx";

// 범용적으로 사용할 수 있는 컴포넌트로 구성
function Dialog2(props) {
    return (
        <div>
            <FancyBorder2 color={'blue'}>
                <h1 className={'Dialog-title'}>{props.title}</h1>
                <p className={'Dialog-message'}>{props.message}</p>
            </FancyBorder2>
        </div>
    );
}

export default Dialog2;