import {useState} from "react";
import Child from "./Child.jsx";

// 현재 Parent 컴포넌트의 전역 변수 선언
let data1 = 100;

// 함수 컴포넌트로 Parent 컴포넌트 선언
function Parent() {
    // Parent 컴포넌트의 지역 변수로 선언
    // useState를 사용하여 Parent 컴포넌트의 상태 정보를 저장하는 state로 선언
    let [data2, setData2] = useState(200);

    // 클릭 이벤트 발생 시 동작할 함수 선언
    const firstDataChange = () => {
        console.log(`부모 컴포넌트 data1 : ${++data1}`);
    }

    const secondDataChange = () => {
        // setState를 실행하여 state로 관리되고 있는 data2 변수의 값 변경
        setData2(++data2);
        console.log(`부모 컴포넌트 data2 : ${data2}`);
    }
    
    return (
        <div className={'border border-2 rounded-3 p-3'}>
            <h3>부모 컴포넌트</h3>
            
            <button type={'button'} className={'btn btn-primary me-2'} onClick={firstDataChange}>부모 첫 번째 데이터 수정</button>
            <button type={'button'} className={'btn btn-primary'} onClick={secondDataChange}>부모 두 번째 데이터 수정</button>

            <h4 className={'my-3'}><span>data1 : {data1}, data2 : {data2}</span></h4>
            <hr/>

            <Child data1={data1} data2={data2} />
        </div>
    );
}

export default Parent;