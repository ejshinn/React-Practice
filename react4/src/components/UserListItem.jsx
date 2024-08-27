// UserListItem.jsx

import {useEffect, useState} from "react";
import useUserStatus from "./useUserStatus.jsx";

// 사용자 목록에서 온라인인 회원은 회원명을 녹색으로 표현하고 오프라인이면 검정색으로 표현하는 컴포넌트(지정한 회원의 상태 확인)
function UserListItem(props) {
    // 커스텀 훅 사용
    const isOnline = useUserStatus(props.user.id);

    // 커스텀 훅 미사용
    // const [isOnline, setIsOnline] = useState(null);
    //
    // useEffect(() => {
    //     function handleStatusChange(status) {
    //         setIsOnline(status.isOnline);
    //     }
    //
    //     // 지정한 사용자가 서버에 접속 중인지 아닌지 확인하는 로직
    //     ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
    // }, []);

    return (
        <li style={{color: isOnline ? 'green' : 'black'}}>{props.user.name}</li>
    )
}

export default UserListItem;