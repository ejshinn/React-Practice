// 컴포넌트 추출로 인하여 새로 생성된 자식 컴포넌트
function UserInfo(props) {
    return (
        <div className={'mt-3'}>
            {/* 부모 컴포넌트가 UserInfo 컴포넌트 호출 시 props에 전달된 데이터의 key명이 userData임 */}
            <img className={'img-thumbnail'} src={props.userData.avatarUrl} alt={props.userData.name}/>
            <div className={'mt-2 px-3 fs-3'}>{props.userData.name}</div>
        </div>
    );
}

export default UserInfo;