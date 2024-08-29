// FruitSelect.jsx

import {useState} from "react";

const selectList = ['apple', 'peach', 'grape', 'banana', 'watermelon'];

function FruitSelect() {
    // multiple 속성 미사용 select 태그용, multiple 속성을 사용하지 않으면 저장하는 값이 1개이므로 문자열로 데이터를 받으면 됨 
    const [value1, setValue1] = useState('peach');
    // multiple 속성 사용 select 태그용, multiple 속성을 사용하면 저장하는 값이 배열로 들어오기 때문에 초깃값을 빈 배열로 설정
    const [value2, setValue2] = useState([]);

    // select에 multiple 속성 미사용 시 이벤트 처리 함수
    const handleChange = e => {
        setValue1(e.target.value);
    }

    // select에 multiple 속성 사용 시 이벤트 처리 함수
    const handleChangeMultiple = e => {
        // e.target.selectedOptions는 선택된 option 태그들을 배열로 반환
        // ... (전개 연산자)를 사용하여 배열에 있는 모든 데이터 출력
        const options = [...e.target.selectedOptions];
        // 배열 options에서 map()을 사용하여 배열의 요소 중 value 값만 출력
        const values = options.map(item => item.value);
        // state로 관리되고 있는 변수 value2에 배열을 저장
        setValue2(values);
    }

    const handleSubmit = e => {
        alert(`선택한 과일(한 개) : ${value1}`);
        alert(`선택한 과일(여러 개) : ${value2}`);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={'mt-3'}>
                    <label htmlFor={'fruitSelect'} className={'form-label'}>좋아하는 과일 선택 :
                        {/* select 태그의 value에 state로 관리되고 있는 변수를 사용 */}
                        <select id={'fruitSelect'} className={'form-control'} value={value1} onChange={handleChange}>
                            {/* option 태그는 배열 사용 시 map() 함수를 사용하여 출력해도 상관없음 */}
                            <option value={'apple'}>사과</option>
                            <option value={'peach'}>복숭아</option>
                            <option value={'grape'}>포도</option>
                            <option value={'banana'}>바나나</option>
                            <option value={'watermelon'}>수박</option>
                        </select>
                    </label>
                </div>

                <div className={'mt-3'}>
                    <label htmlFor={'fruitSelectMultiple'} className={'form-label'}>좋아하는 과일 선택(다중 선택) :
                        <select id={'fruitSelectMultiple'} className={'form-control'} value={value2} onChange={handleChangeMultiple} multiple={true}>
                            {
                                selectList.map((item, index) => {
                                    return <option value={item} key={index}>{item}</option>
                                })
                            }
                        </select>
                    </label>
                </div>

                <div className={'mt-3'}>
                    <button type={'submit'} className={'btn btn-primary'}>확인</button>
                </div>
            </form>
        </div>
    );
}

export default FruitSelect;