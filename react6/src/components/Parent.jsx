// Parent.jsx

import {useState} from "react";
import Child1 from "./Child1.jsx";
import Child2 from "./Child2.jsx";

function Parent() {
    const [data2, setData2] = useState('부모에서 state로 관리되는 데이터');

    return (
        <div className={'border border-2 rounded-2 p-4'}>
            {/* 데이터는 부모 컴포넌트가 자식 컴포넌트에게 전달하는 것을 기본으로 함 */}
            {/* props를 통해서 자식 컴포넌트로 데이터를 전달 */}
            {/* 자식 컴포넌트 호출 시 속성명을 지정하고 데이터를 전달함 */}
            <h2>부모 컴포넌트 영역</h2>
            <button type={'button'} className={'btn btn-primary'} onClick={() => {
                setData2('부모에서 변경된 데이터');
            }}>클릭 시 데이터 변경
            </button>

            <h3>{data2}</h3>

            <div className={'row'}>
                <div className={'col-sm'}>
                    <Child1 data={'부모가 전달한 데이터'} data2={data2}/>
                </div>
                <div className={'col-sm'}>
                    <Child2 data={10000} data2={data2}/>
                </div>
            </div>
        </div>
    );
}

export default Parent;