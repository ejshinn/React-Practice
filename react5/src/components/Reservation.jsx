// Reservation.jsx

import {useState} from "react";

function Reservation() {
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(2);

    const handleSubmit = (e) => {
        alert(`아침 식사 여부 : ${haveBreakfast}, 방문객 수 : ${numberOfGuest}`);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor={'chk'} className={'form-label'}>아침 식사 여부 :
                    {/* checkbox는 value 속성 사용하지 않음, checked 속성값을 true/false로 입력하여 사용 */}
                    {/* checked 속성값을 state 객체로 관리하고 있는 변수를 사용 */}
                    <input type={'checkbox'} checked={haveBreakfast} id={'chk'} className={'form-check-input ms-2'} onChange={e => setHaveBreakfast(e.target.checked)}/>
                </label>

                <lebel htmlFor={'count'} className={'form-label ms-3'}>방문객 수 :
                    <input type={'number'} value={numberOfGuest} id={'count'} className={'form-control'} onChange={e => setNumberOfGuest(e.target.value)} />
                </lebel>

                <button type={'submit'} className={'btn btn-primary ms-2'}>확인</button>
            </form>
        </div>
    );
}

export default Reservation;