import {useState} from "react";

function Child(props) {
    // 부모 컴포넌트에서 전달한 값을 자식 컴포넌트의 변수에 단순 대입
    // 부모 컴포넌트에서 데이터가 변경되면 자식 컴포넌트의 값도 함께 변경됨
    let data1 = props.data1;
    let data2 = props.data2;

    // 자식 컴포넌트의 state로 선언
    let [data3, setData3] = useState(300);
    // 부모 컴포넌트에서 전달한 값을 자식 컴포넌트의 state에 전달
    // 자식 컴포넌트의 state 객체에서 관리하므로 부모 컴포넌트의 데이터 변경과 상관없이 사용할 수 있음
    let [data4, setData4] = useState(props.data2);

    // 부모 컴포넌트에서 전달받은 데이터를 변수에 저장하고 해당 변수를 수정하는 이벤트 함수
    const btn1Event = () => {
        console.log(`자식 컴포넌트 data1 : ${++data1}`);
    }

    // 부모 컴포넌트에서 전달받은 데이터를 변수에 저장하고 해당 변수를 수정하는 이벤트 함수
    const btn2Event = () => {
        console.log(`자식 컴포넌트 data2 : ${++data2}`);
    }

    // 부모 컴포넌트에서 전달받은 props의 데이터를 직접 수정
    const btn3Event = () => {
        // props의 데이터는 부모 컴포넌트에서 전달받은 읽기 전용의 데이터인데 이를 수정하려고 하기 때문에 오류 발생
        props.data1 += props.data1;
        console.log(`자식 컴포넌트 props.data1 : ${props.data1}`);
    }

    // 부모 컴포넌트에서 전달받은 props의 데이터를 직접 수정
    const btn4Event = () => {
        // props의 데이터는 부모 컴포넌트에서 전달받은 읽기 전용의 데이터인데 이를 수정하려고 하기 때문에 오류 발생
        props.data2 += props.data2;
        console.log(`자식 컴포넌트 props.data2 : ${props.data2}`);
    }

    // 현재 컴포넌트에서 직접 선언하고 state로 관리하고 있는 변수의 값을 setState() 함수로 수정
    const btn5Event = () => {
        setData3(++data3);
        console.log(`자식 컴포넌트 data3 : ${data3}`);
    }

    // 부모 컴포넌트에서 전달받은 데이터를 현재 컴포넌트에서 state로 관리하도록 설정하고, setState() 함수로 값 수정
    const btn6Event = () => {
        setData4(++data4);
        console.log(`자식 컴포넌트 data4 : ${data4}`);
    }

    return (
        <div className={'border border-2 border-primary rounded-2 p-3'}>
            <h3>자식 컴포넌트</h3>

            <h4>data1 : {data1}, data2 : {data2}</h4>
            <h4>props.data1 : {props.data1}, props.data2 : {props.data2}</h4>
            <h4>data3 : {data3}, data4 : {data4}</h4>
            <hr/>

            <button type={'button'} className={'btn btn-info me-2'} onClick={btn1Event}>props.data1의 값을 받은 data1 수정</button>
            <button type={'button'} className={'btn btn-info'} onClick={btn2Event}>props.data2의 값을 받은 data2 수정</button>
            <br/>
            <button type={'button'} className={'btn btn-success me-2'} onClick={btn3Event}>자식 컴포넌트가 props.data1 직접 수정</button>
            <button type={'button'} className={'btn btn-success'} onClick={btn4Event}>자식 컴포넌트가 props.data2 직접 수정</button>
            <br/>
            <button type={'button'} className={'btn btn-primary me-2'} onClick={btn5Event}>자식 컴포넌트의 state 값 수정</button>
            <button type={'button'} className={'btn btn-primary'} onClick={btn6Event}>props.data2의 값을 자식 컴포넌트의 state로 받고 setState로 수정</button>
        </div>
    );
}

export default Child;