// Parent2.jsx

import {useState} from "react";
import Child3 from "./Child3.jsx";

function Parent2() {
    // 부모 컴포넌트가 가지고 있는 일반 변수
    let parentValue1 = 100;
    // 부모 컴포넌트가 state로 관리하는 변수
    // state로 관리하는 데이터는 반드시 setState() 함수를 사용해서 변경해야 함
    const [parentValue2, setParentValue2] = useState(200);

    return (
        <div className={'border border-2 border-primary p-3'}>
            <h3>부모 컴포넌트 2</h3>
            <h4>부모 컴포넌트가 가지고 있는 데이터 1 : {parentValue1}</h4>
            <h4>부모 컴포넌트가 가지고 있는 데이터 2 : {parentValue2}</h4>
            <br/>
            {/* 자식 컴포넌트 호출 */}
            {/* 자식 컴포넌트에 데이터 2개를 전달 */}
            {/* data1이라는 이름으로 부모 컴포넌트의 일반 변수 전달 */}
            {/* setData2라는 이름으로 부모 컴포넌트에서 state로 관리 중인 변수를 수정할 수 있는 setState() 함수를 전달 */}
            <Child3 data1={parentValue1} setData2={setParentValue2}/>
        </div>
    );
}

export default Parent2;