import {useState} from "react";

function Event1() {
    const [isToggleOn, setIsToggleOn] = useState(false);
    
    // 이벤트 처리 함수를 미리 선언
    // 기존의 function 키워드를 사용하여 함수 선언
    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }
    
    // 화살표 함수를 사용하여 함수 선언
    const handleDelete = (id, event) => {
        alert(`id : ${id}, target : ${event.target.innerText}`);
    }
    
    return (
        <div>
            {/* 리액트에서는 이벤트 속성을 카멜명명법으로 사용 */}
            {/* 미리 선언해 놓은 이벤트 처리 함수의 이름만 등록 */}
            <button type={'button'} className={'btn btn-primary'} onClick={handleClick}>{isToggleOn ? '켜짐' : '꺼짐'}</button>
            {/* 리액트의 이벤트 속성에 이벤트 처리 함수를 직접 입력하여 이벤트 처리 */}
            {/* 직접 이벤트 처리 함수를 입력 시 화살표 함수를 사용 */}
            <button type={'button'} className={'btn btn-primary'} onClick={() => {
                setIsToggleOn((isToggleOn) => !isToggleOn);
            }}>{isToggleOn ? '켜짐' : '꺼짐'}</button>
            <br/><br/>

            {/* 매개변수를 전달하기 위해서는 화살표 함수를 사용하여 지정한 함수명을 입력하고 해당 함수의 () 안에 매개변수를 입력 */}
            {/* 이벤트를 발생시킨 대상에 대한 정보가 필요할 경우 익명함수의 매개변수를 추가하여 실행하고, 익명 함수 내부에서 실행하는 이벤트 처리 함수에 익명함수의 event 객체명을 입력하여 실행 */}
            <button type={'button'} className={'btn btn-primary'} onClick={(event) => {
                handleDelete(1, event);
            }}>매개변수가 있는 버튼 이벤트</button>
            
        </div>
    );
}

export default Event1;