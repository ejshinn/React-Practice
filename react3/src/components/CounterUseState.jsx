import {useState} from "react";

// 리액트는 UI 화면을 Virtual DOM이라는 것을 사용하여 먼저 UI를 만들고, 실제 사용자가 보고 있는 DOM 화면과 교체함
// 리액트를 통해서 UI를 그리는 시점은 컴포넌트가 가지고 있는 render() 함수가 실행될 때 UI 화면을 그림
// render() 함수가 동작하는 상황은 부모 컴포넌트가 전달해준 props의 값이 변경되거나 현재 컴포넌트의 state에서 관리하는 데이터가 변경되거나 forceUpdate() 함수가 실행될 때 render() 함수가 실행됨

// react hooks : 리액트의 state와 생명주기 기능에 갈고리를 걸어서 원하는 시점에 정해진 함수를 실행하도록 만든 것
// useState() : state 상태 관리를 쉽게 하기 위해서 사용
// useEffect() : 생명주기 함수를 쉽게 사용하기 위해서 사용
// useNavigate() : React Router를 사용하여 MPA 방식 웹을 만드는 것처럼 하기 위해서 사용
// useMemo() : 기존에 수행된 결과값을 저장해두고, 동일한 입력이 들어왔을 경우 해당 데이터를 재활용하여 로딩 속도를 높임
// useCallback() : useMemo()와 동일한 기능이지만 useMemo()는 결과값을 재활용하지만 useCallback()은 함수를 재활용함
// useRef() : 특정 컴포넌트에 접근할 수 있도록 해줌
const CounterUseState = () => {
    // useState() hook을 사용하기 위해서 설정
    // 변수는 const 키워드를 사용하여 직접 수정하지 못하도록 막음
    // 변수값을 변경하기 위해서 setCount() 함수를 선언
    // setState() 함수에 매개변수로 0을 초기값으로 설정
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button type={'button'} className={'btn btn-primary'} onClick={() => {
                // setCount()를 호출하여 useState로 관리되고 있는 변수 count의 값을 변경 요청
                // useState는 비동기 방식으로 동작하기 때문에 화면에 표시되는 값과 console에 출력되는 값이 다르게 출력될 수 있음
                setCount(count + 1);
                console.log(`useState() count : ${count + 1}`);
            }}>클릭</button>
        </div>
    );
}

export default CounterUseState;