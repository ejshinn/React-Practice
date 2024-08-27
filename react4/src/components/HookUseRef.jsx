import {useRef} from "react";

function HookUseRef() {
    // useRef : 특정 컴포넌트에 접근할 수 있도록 해주는 리액트 Hook
    // 사용법 :
    // const 변수명 = useRef(초깃값);
    
    // useRef()를 사용하여 사용할 태그를 지정, 초깃값으로 null을 지정하여 빈 태그로 설정
    const inputBox = useRef(null);

    const onButtonClick = () => {
        console.log('클릭 이벤트 발생!');
        inputBox.current.focus();
    }

    return (
        <div>
            <input type={'text'} className={'form-control mb-2'}/>
            {/* jsx 문법으로 useRef를 태그에 지정 */}
            <input type={'text'} className={'form-control mb-2'} ref={inputBox} placeholder={'아래 버튼 클릭 시 포커스를 받는 태그'}/>
            <button type={'button'} className={'btn btn-primary'} onClick={onButtonClick}>클릭 시 포커스 이동</button>
        </div>
    );
}

export default HookUseRef;