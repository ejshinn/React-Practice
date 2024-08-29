// RequestForm.jsx

import {useState} from "react";

function RequestForm() {
    const [value, setValue] = useState('요청사항을 입력하세요');
    
    const handleChange = e => {
        setValue(e.target.value);
    }
    
    const handleSubmit = e => {
        alert(`입력한 요청사항 : ${value}`);
        e.preventDefault();
    }
    
    return (
        <div className={'row'}>
            <div className={'col-6 mx-auto'}>
                <form onSubmit={handleSubmit}>
                    <div className={'mt-3'}>
                        <label htmlFor={`comments`} className={'form-label'}>요청사항 : </label>
                        {/* JSX 문법으로 만들어진 textarea는 value 속성을 사용할 수 있음 */}
                        <textarea rows={5} className={'form-control'} value={value} onChange={handleChange} placeholder={'요청사항을 입력하세요'}></textarea>
                        {/* 기본 html 태그의 textarea는 value 속성이 없기 때문에 시작 태그와 끝 태그 사이에 데이터를 입력해야 함 */}
                        {/*<textarea rows={5} className={'form-control'} onChange={handleChange} placeholder={'요청사항을 입력하세요'}>{value}</textarea>*/}
                    </div>
                    <div className={'mt-3 d-grid gap-2'}>
                        <button type={'submit'} className={'btn btn-primary'}>확인</button>
                        <button type={'reset'} className={'btn btn-secondary'}>취소</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RequestForm;