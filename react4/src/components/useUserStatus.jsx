// useUserStatus.jsx

import {useEffect, useState} from "react";

// 훅의 사용 규칙
// 1. 훅은 함수 컴포넌트에서만 사용 가능
//     - 일반 자바스크립트 함수에서 훅은 호출하면 안됨
// 2. 훅은 무조건 최상위 레벨에서 호출해야 함(해당 컴포넌트의 최상위 레벨)
//     - if 문 및 for 문과 같은 다른 명령어 혹은 함수 안에서 훅을 사용하는 것은 불가능
// 3. 컴포넌트가 랜더링될 때마다 같은 순서로 호출되어야 함
//     - 조건에 따라서 훅의 실행여부가 결정되어서는 안됨

// 커스텀 훅 사용하기
// 리액트에서 제공하는 hook 중에서 사용자가 원하는 기능이 없을 경우 사용자가 직접 hook을 생성하여 사용할 수 있음
// 커스텀 훅은 이름이 'use'로 시작하고 함수 내부에서 다른 리액트 훅을 호출하는 자바스크립트 함수를 커스텀 훅이라고 함
// 커스텀 훅의 이름을 'use'로 시작하지 않으면 리액트 내부적으로 해당 함수가 hook을 실행하는지 일반 함수를 실행하는지 판단할 수 없기 때문에 커스텀 훅의 이름을 반드시 'use'로 시작해야 함

// 여러 가지 컴포넌트에서 반복적으로 사용되는 로직을 자바스크립트 함수로 묶어놓은 것
// 함수의 이름 첫 단어로 'use'를 사용하여 커스텀 훅임을 리액트에게 알려줌
function useUserStatus(props) {
    // 내부적으로 useState를 사용하여 해당 함수가 커스텀 훅임을 리액트에게 알려줌
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        // 지정한 사용자가 서버에 접속 중인지 아닌지 확인하는 로직
        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
    }, []);

    return isOnline;
}

export default useUserStatus;