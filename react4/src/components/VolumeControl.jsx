import {useEffect, useState} from "react";

// 문제 1) 버튼 2개를 생성하고 (+, -) useState와 useEffect를 사용하여 볼륨값을 변경하는 프로그램을 작성하세요

function VolumeControl() {
    // 현재 볼륨값을 저장할 변수 선언
    // useState() 함수를 사용하여 state 객체로 관리
    const [volume, setVolume] = useState(0);

    // useEffect의 componentDidMount() 함수 역할 수행, 사용자가 원하는 값으로 초깃값 설정
    // 컴포넌트 호출 시 처음 한 번만 실행
    useEffect(() => {
        // volume 변수 값을 5로 변경
        setVolume(5);
    }, []);

    // useEffect의 componentDidUpdate() 함수 역할 수행
    // 의존성 배열의 요소가 변경될 때마다 실행
    useEffect(() => {
        console.log(`볼륨이 ${volume}으로 변경되었습니다.`);
    }, [volume]);

    return (
        <div className={'border border-2 rounded-3 m-4 p-5 d-flex justify-content-center'}>
            {/* 클릭 이벤트 시 삼항연산자를 사용하여 변경된 volume 값이 0보다 작거나 10보다 클 수 없도록 함 */}

            <button type={'button'} className={'btn btn-success'} onClick={() => {
                (volume - 1) < 0 ? setVolume(0) : setVolume(volume - 1)
            }}> - </button>

            <p><span className={'fs-3 mx-3'}>{volume}</span></p>

            <button type={'button'} className={'btn btn-info'} onClick={() => {
                (volume + 1) > 10 ? setVolume(10) : setVolume(volume + 1)
            }}> + </button>
        </div>
    );
}

export default VolumeControl;