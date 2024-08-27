// useCounter.jsx

import {useState} from "react";

// 커스텀 훅으로 사용하기 위해서 생성한 함수
// 커스텀 훅 사용 조건
// 1. 함수명이 'use'로 시작
// 2. 함수 내부에서 다른 리액트 훅을 사용
function useCounter(initValue) {
    // useState를 사용하여 변수 count를 state 객체로 관리, 초깃값으로 매개변수를 받아와서 사용함
    const [count, setCount] = useState(initValue);

    const incrementCount = () => setCount((count) => count + 1);
    // const incrementCount = () => {
    //     return (
    //         setCount((count) => {
    //             return count + 1;
    //         })
    //     );
    // }

    // Math.max() : 매개변수로 입력받은 값 중 최대값을 구하여 반환하는 함수
    const decrementCount = () => setCount((count) => Math.max(count - 1, 0));
    // const decrementCount = () => {
    //     return (
    //         setCount((count) => {
    //             return Math.max(count - 1, 0);
    //         })
    //     );
    // }

    // state 객체로 관리 중인 변수와 함수를 배열에 저장한 후 반환
    return [count, incrementCount, decrementCount];
}

export default useCounter;