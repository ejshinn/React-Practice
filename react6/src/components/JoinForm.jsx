// JoinForm.jsx

import {useState} from "react";

// 부모 컴포넌트로 데이터를 전달하는 방법
// 자식 컴포넌트의 데이터를 부모 컴포넌트로 전달하려면 부모 컴포넌트의 함수를 대신 실행해야 함
// 부모 컴포넌트에서 state로 관리되는 변수를 생성하고, 해당 변수의 값을 변경하는 setState() 함수를 자식 컴포넌트에 전달
// 전달받은 함수를 자식 컴포넌트에서 대신 실행
function JoinForm(props) {
    // 자식 컴포넌트인 JoinForm에서 state로 설정한 변수
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');

    // input 태그의 값이 변경될 때 setState() 함수를 호출하여 데이터를 변경 및 화면 업데이트
    const changeUserId = e => setUserId(e.target.value);
    const changeUserPw = e => setUserPw(e.target.value);
    const changeUserEmail = e => setUserEmail(e.target.value);
    const changeUserName = e => setUserName(e.target.value);

    // form 태그의 submit 이벤트 발생 시 실행되는 함수
    const submitClick = e => {
        let msg = `User Id : ${userId}
User Pw : ${userPw}
User Email : ${userEmail}
User Name : ${userName}`;
        alert(msg);

        // 부모 컴포넌트에서 전달받은 함수(부모 컴포넌트의 setState() 함수)를 자식 컴포넌트가 대신 호출하여 부모 컴포넌트의 데이터를 수정
        props.setId(userId);
        props.setPw(userPw);
        props.setEmail(userEmail);
        props.setName(userName);

        // 현재이벤트 정지, 서버로 전달할 데이터가 없으므로 submit 이벤트를 중지
        e.preventDefault();
    }

    const resetClick = () => {
        setUserId('');
        setUserPw('');
        setUserEmail('');
        setUserName('');
    }

    return(
        <form onSubmit={submitClick} className={'text-start'}>
            <div className={'mt-3'}>
                <label htmlFor={'user-id'} className={'form-label'}>User ID : </label>
                <input type={'text'} className={'form-control'} id={'user-id'} value={userId} onChange={changeUserId}/>
            </div>
            <div className={'mt-3'}>
                <label htmlFor="user-pw" className={'form-label'}>User PW : </label>
                <input type={"text"} className={'form-control'} id={'user-pw'} value={userPw} onChange={changeUserPw}/>
            </div>
            <div className={'mt-3'}>
                <label htmlFor={'user-email'} className={'form-label'}>User Email : </label>
                <input type={"text"} className={'form-control'} id={'user-email'} value={userEmail} onChange={changeUserEmail}/>
            </div>
            <div className={'mt-3'}>
                <label htmlFor={'user-name'} className={'form-label'}>User Name : </label>
                <input type={"text"} className={'form-control'} id={'user-name'} value={userName} onChange={changeUserName}/>
            </div>
            <div className={'mt-3 d-grid gap-2'}>
                <button type={'submit'} className={'btn btn-primary'}>확인</button>
                <button type={'reset'} className={'btn btn-secondary'} onClick={resetClick}>취소</button>
            </div>
        </form>
    );
}

export default JoinForm;