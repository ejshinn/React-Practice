import {useEffect, useState} from "react";

function LifecycleFunc() {
    // 변수 선언, 선언만 하고 초깃값은 할당하지 않음
    let num1;
    // state 객체로 관리되는 변수 num2 선언, 초깃값은 undefined
    const [num2, setNum2] = useState();

    // useEffect를 사용하여 componentDidMount(), componentDidUpdate() 함수의 역할을 수행하도록 설정
    useEffect(() => {
        num1 = 100;
        // setState를 실행하여 state 객체로 관리되는 변수 num2의 값을 변경 요청, 화면 update 요청
        setNum2(2000);
        console.log(`num1 : ${num1}, num2 : ${num2}`);
    }, []);

    useEffect(() => {
        console.log('화면 업데이트 후 자동 실행되는 useEffect() 함수');
    }, [num2]);

    return (
        <div>
            <button type={'button'} className={'btn btn-primary'} onClick={() => {
                setNum2(num2 + 1);
                console.log(num2);
            }}>화면 업데이트</button>
            <p>num1 : {num1}</p>
            {console.log(num1)}
            <p>num2 : {num2}</p>
            {console.log(num2)}
        </div>
    );
}

export default LifecycleFunc;