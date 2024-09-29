import Layout2 from "./components/Layout2.jsx";
import useThemeStore from "./Stores/ThemeStore.jsx";
import useMemberStore from "./Stores/MemberStore.jsx";
import {useCallback, useEffect} from "react";

// zustand : 리액트에서 사용할 수 있는 상태 관리 라이브러리
// Context API 훅은 useContext와 같이 데이터를 전역 변수로 저장하고 사용을 원하는 위치에서 호출하여 사용하는 방식
// 전역으로 동작하기 때문에 props와 상관없이 어느 컴포넌트에서든 호출할 수 있음
// create()를 사용하여 object 타입의 객체를 생성하고 상태 관리를 위한 key와 value를 저장함
// 상태 관리 중인 객체의 데이터를 변경하기 위한 상태 변경 함수를 추가하여 외부에서 데이터를 수정할 수 있도록 함
// 단순히 데이터 전달용으로 사용 시 데이터 수정용 함수를 추가하지 않아도 됨

// create() : zustand에서 제공하는 함수로 zustand 상태 관리 객체를 생성
// set() : zustand에서 제공하는 함수로 zustand에서 관리 중인 객체의 데이터를 수정

// 사용법 :
// 설치 :
// npm install zustand

// 선언 :
// import { create } from 'zustand';

// const use변수명Store = create((set) => ({
//     변수명: '초깃값',
//     데이터수정용함수명: (newValue) => set(() => ({ 변수명: newValue })),
// }));

// export default use변수명Store;

// 사용 :
// import use변수명Store from '경로/변수명Store';

// const { 변수명, 데이터수정용함수명 } = use변수명Store();

// useEffect(() => {
//     데이터수정용함수명(수정할데이터);
// }, [데이터수정용함수명]);

// 사용(출력) :
// import use변수명Store from '경로/변수명Store';

// const {변수명, 데이터수정용함수명} = use변수명Store();
// console.log(변수명);

function App5() {
    // zustand로 만든 객체를 가져올 경우 반드시 ()를 붙여서 실행해야 함
    // const { theme, setTheme } = useThemeStore();
    const { setTheme } = useThemeStore();
    const { setMember } = useMemberStore();

    // useEffect와 의존성 배열에 수정용 함수명을 입력하여 데이터가 수정되는 것을 리액트가 확인할 수 있도록 해야 함
    // useEffect(() => {
    //     setTheme('warning');
    //     setMember('철수');
    // }, [setTheme, setMember])

    // useMemo, useCallback 훅을 사용하여 zustand 객체를 메모이제이션하여 사용하는 것이 좋음
    const memoSetTheme = useCallback(() => {
        setTheme('info');
    }, [setTheme]);

    const memoSetMember = useCallback(() => {
        setMember('맹구');
    }, [setMember]);

    useEffect(() => {
        memoSetTheme();
        memoSetMember();
    }, [memoSetTheme, memoSetMember]);

    return (
        <Layout2 />
    );
}

export default App5;