import {useEffect, useMemo, useState} from "react";

function HookUseMemo2() {
    // state 객체로 관리하는 변수 number, isType 선언
    const [number, setNumber] = useState(0);
    const [isType, setIsType] = useState(true);

    // setState()가 동작하여 UI 화면을 새로 그릴 때 isType의 값을 확인하여 object 타입의 변수 food의 데이터를 연산하여 가져옴
    // useEffect의 의존성 배열에 변수 food를 등록하였기 때문에 화면이 업데이트될 때마다 useEffect가 호출됨

    // useMemo() 함수를 사용하지 않고 사용 시
    // 화면이 렌더링되어 새로 그려질 때마다 새로 연산하여 가져옴
    // const food = {type: isType ? '부먹' : '찍먹'};

    // useMemo() 함수를 사용하여 실행 시
    // useMemo의 의존성 배열에 포함된 변수의 값이 변경되었을 경우에만 콜백 함수로 지정된 소스코드를 실행하여 메모리에 저장함
    // useMemo의 의존성 배열에 포함된 변수의 값이 변경되지 않을 경우  기존에 저장된 데이터를 사용하여 화면에 출력함
    const food = useMemo(() => {
        console.log('useMemo() 함수 호출');
        return {type: isType ? '부먹' : '찍먹'};
    }, [isType]);

    // useEffect의 두 번째 매개변수인 의존성 배열에 등록된 변수의 데이터가 변경되면 useEffect 함수가 호출됨
    useEffect(() => {
        console.log('componentDidMount() 함수 역할의 useEffect() 함수 호출');
    }, [food]);

    return (
        <div>
            <h3>숫자 카운트</h3>
            <input type={'number'} className={'form-control'} value={number} onChange={
                (e) => {
                    setNumber(e.target.value);
                }}/>

            <br/>

            <h3>boolean 값 변경</h3>
            <p>부먹 VS 찍먹 : <span className={'fs-3'}>{food.type}</span></p>
            <button type={'button'} className={'btn btn-primary'} onClick={() => {
                // state 객체로 관리하고 있는 isType의 값을 반대로 입력
                setIsType(!isType);
            }}>클릭</button>
        </div>
    );
}

export default HookUseMemo2;