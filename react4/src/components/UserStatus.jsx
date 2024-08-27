// UserStatus.jsx

import {useEffect, useState} from "react";
import useUserStatus from "./useUserStatus.jsx";

// 현재 사용자 상태가 온라인인지 아닌지를 표시하는 컴포넌트(사용자 본인의 상태 확인)
function UserStatus(props) {
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

    if(isOnline == null) {
        return '대기 중...';
    }

    return isOnline ? '온라인' : '오프라인';
}

export default UserStatus;