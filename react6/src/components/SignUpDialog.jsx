// SignUpDialog.jsx

import {useState} from "react";
import Dialog3 from "./Dialog3.jsx";

function SignUpDialog() {
    const [nickName, setNickName] = useState('');

    const handleNickName = (e) => setNickName((e.target.value));
    const handleSignUp = () => alert(`어서오세요, ${nickName}님!`);
    const handleCheckboxChange = () => alert('체크되었습니다.');

    return (
        <div>
            {/* 부모 컴포넌트에서 자식 컴포넌트를 호출 시 containment 방식을 사용하여 html 태그를 자식 태그에 포함시켜서 전달 후 호출함 */}
            <Dialog3 title={'화성 탐사 프로그램'} message={'닉네임을 입력하세요'} color={'primary'}>
                {/* input 태그가 type=text로 사용됨 */}
                <input type="text" className={'form-control mb-3'} value={nickName} onChange={handleNickName}/>
                <button type={'button'} className={'btn btn-primary'} onClick={handleSignUp}>가입하기</button>
            </Dialog3>

            <Dialog3 title={'심해 탐사 프로그램'} message={'닉네임을 입력하세요'} color={'success'}>
                {/* input 태그가 type=checkbox로 사용됨 */}
                <label className={'form-label me-3'}>18세 이상 :
                    <input type={'checkbox'} className={'form-check-input'} onChange={handleCheckboxChange}/>
                </label>
                <button type={'button'} className={'btn btn-primary'} onClick={handleSignUp}>가입하기</button>
            </Dialog3>
        </div>
    );
}

export default SignUpDialog;