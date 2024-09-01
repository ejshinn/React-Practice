// EX3ContactForm.jsx

import {useState} from "react";

function EX3ContactForm() {
    const [dateTime, setDateTime] = useState('2024-09-01 12:00:00');

    function handleChange(event) {
        setDateTime(event.target.value); // 날짜 및 시간 업데이트
    }

    return (
        <form onSubmit={() => {
            alert('send message 버튼 클릭');
        }}>
            <div>
                <input type="text" className="form-control-plaintext mt-3 border-bottom py-3 px-2" placeholder="Name"/>
            </div>
            <div>
                <input type="number" className="form-control-plaintext mt-3 border-bottom py-3 px-2" placeholder="How many people"/>
            </div>
            <div>
                <input type="datetime-local" className="form-control-plaintext mt-3 border-bottom py-3 px-2" value={dateTime} onChange={handleChange}/>
            </div>
            <div>
                <input type="text" className="form-control-plaintext mt-3 border-bottom py-3 px-2" placeholder="Message / Special requirements"/>
            </div>
            <div>
                <button type={'submit'} className={'btn btn-secondary mt-3'}>SEND MESSAGE</button>
            </div>
        </form>
    );
}

export default EX3ContactForm;