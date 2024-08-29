// NameForm.jsx

import {useState} from "react";

// 리액트에서는 사용자의 데이터 입력을 받는 form 태그 부분을 모두 state로 관리하고 있음
// 변경되는 데이터를 사용자가 실시간으로 입력하면서 확인해야 하기 때문에 state로 관리

function NameForm() {
    // state로 관리하는 변수 선언, form 태그에서 사용자의 이름을 받기 위한 변수로 사용
    const[value, setValue] = useState('');

    // form 태그에서 사용자의 이메일 주소를 입력받기 위한 변수로 사용
    let email = '';

    // 이벤트 처리 함수
    const handleChange = (e) => {
        // state로 관리되는 변수 value의 값을 변경하기 위해서 setValue() 함수 호출
        setValue(e.target.value); // value 값 변경 요청, 화면 UI 재렌더링 요청
        // 이벤트로 받아온 값과 state로 관리되는 value 값이 불일치
        // setState() 함수가 비동기로 동작하기 때문에 이벤트로 받아온 값과 현재 value 값이 일치하지 않음
        console.log(`받아온 값 : ${e.target.value}, 현재 value : ${value}`);
    }

    // 이벤트 처리 함수
    const handleEmailChange = (e) => {
        // state로 관리되는 변수가 아닌 일반 변수에 값을 직접 저장
        email = e.target.value; // 일반 자바스크립트 변수이므로 이벤트로 받아온 값을 바로 대입
        // 이벤트로 받아온 값과 변수에 저장된 값이 일치함
        console.log(`받아온 값 : ${e.target.value}, 현재 email : ${email}`);
    }

    // 이벤트 처리 함수
    const handleSubmit = (e) => {
        alert(`입력한 이름 : ${value}\n입력한 이메일 : ${email}`);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={'mt-3'}>
                    <label htmlFor={'user-name'} className={'form-label'}>이름 : </label>
                    {/* input 태그의 value 속성에 state로 관리되고 있는 변수 value를 사용 */}
                    <input type={'text'} className={'form-control'} id={'user-name'} value={value} onChange={handleChange}/>
                </div>
                <div className={'mt-3'}>
                    <label htmlFor="user-email" className={'form-label'}>이메일 : </label>
                    {/* input 태그의 value 속성에 일반 변수 email을 사용 */}
                    {/* 사용자 입력을 받는 input 태그에 일반 변수 사용 시 이벤트 자체는 동작하지만 UI 업데이트가 발생하지 않기 때문에 처음 화면에 출력되었던 값으로 계속 되돌아감 */}
                    <input type={'email'} className={'form-control'} id={'user-email'} value={email} onChange={handleEmailChange}/>
                </div>
                <div className={'mt-3'}>
                    <button type={'submit'} className={'btn btn-primary'}>제출</button>
                </div>
            </form>
        </div>
    );
}

export default NameForm;