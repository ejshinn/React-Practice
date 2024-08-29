// 문제 1) 회원가입 페이지를 작성하세요
// id, 비밀번호, 이름, email, 휴대전화, 성별 정보를 입력받고 확인 버튼 클릭 시 console.log()나 alert()를 통하여 화면에 출력하는 컴포넌트를 작성하세요
// 컴포넌트명 : Join.jsx

import {useState} from "react";

function Join() {
    const[id, setId] = useState('');
    const[pw, setPw] = useState('');
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');
    const[gender, setGender] = useState('');

    const handleSubmit = (e) => {
        alert(`id : ${id}, 비밀번호 : ${pw}, 이름 : ${name}, 휴대전화 : ${phone}, 성별 : ${gender}`);
        e.preventDefault();
    }

    const handleIdChange = (e) => {
        setId(e.target.value);
    }

    const handlePwChange = (e) => {
        setPw(e.target.value);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }

    return (
        <div className={'row'}>
            <div className={'col-sm-6'}>
                <form onSubmit={handleSubmit}>
                    <div className={'mt-3'}>
                        <label htmlFor={'user-id'} className={'form-label'}>id :
                            <input type={'text'} className={'form-control'} id={'user-id'} value={id} onChange={handleIdChange}/>
                        </label>
                    </div>

                    <div className={'mt-3'}>
                        <label htmlFor={'user-pw'} className={'form-label'}>비밀번호 :
                            <input type={'password'} className={'form-control'} id={'user-pw'} value={pw} onChange={handlePwChange}/>
                        </label>
                    </div>

                    <div className={'mt-3'}>
                        <label htmlFor={'name'} className={'form-label'}>이름 :
                            <input type={'text'} className={'form-control'} id={'name'} value={name} onChange={handleNameChange}/>
                        </label>
                    </div>

                    <div className={'mt-3'}>
                        <label htmlFor={'email'} className={'form-label'}>이메일 :
                            <input type={'email'} className={'form-control'} id={'email'} value={email} onChange={handleEmailChange}/>
                        </label>
                    </div>

                    <div className={'mt-3'}>
                        <label htmlFor={'user-phone'} className={'form-label'}>휴대전화 :
                            <input type={'text'} className={'form-control'} id={'user-phone'} value={phone} onChange={handlePhoneChange}/>
                        </label>
                    </div>

                    <label htmlFor={'rdo'} className={'form-label'}>성별 :
                        <input type={'radio'} id={'rdo'} value={'남성'} checked={gender === '남성'} onChange={handleGenderChange}/>남성
                        <input type={'radio'} id={'rdo'} value={'여성'} checked={gender === '여성'} onChange={handleGenderChange}/>여성
                    </label>

                    <div className={'mt-3 d-grid gap-2'}>
                        <button type={'submit'} className={'btn btn-primary'}>확인</button>
                        <button type={'reset'} className={'btn btn-secondary'}>취소</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Join;