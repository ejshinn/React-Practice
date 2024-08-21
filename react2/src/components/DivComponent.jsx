import UserInfo from "./UserInfo.jsx";

function formatDate(date) {
    return date.toLocaleDateString();
}

function DivComponent(props) {
    return (
        <div className={'container mt-4'}>
            {/* 컴포넌트 추출 */}
            {/* UI 구성이 복잡한 컴포넌트를 컴포넌트 추출을 통해서 간소화된 형태의 컴포넌트로 UI를 구성할 수 있음 */}
            {/* 기능 단위, 재사용이 가능한 형태로 추출하는 것이 좋음 */}

            {/* 원본 컴포넌트 내용, 컴포넌트 추출로 인하여 자식 컴포넌트로 새로 생성함 */}
            {/*<div className={'mt-3'}>*/}
            {/*    <img className={'img-thumbnail'} src={props.author.avatarUrl} alt={props.author.name}/>*/}
            {/*    <div className={'mt-2 px-3 fs-3'}>{props.author.name}</div>*/}
            {/*</div>*/}
            {/*<div className={'mt-3 px-3 fs-3'}>{props.text}</div>*/}
            {/*<div className={'mt-3 px-3 fs-3'}>{formatDate(props.date)}</div>*/}

            {/* 컴포넌트 추출로 인하여 자식 컴포넌트로 새로 생성된 컴포넌트를 사용하여 UI를 구성함 */}
            {/* UI 구성에 필요한 데이터를 자식 컴포넌트의 props로 전달함(이름은 userData) */}
            <UserInfo userData={props.author}/>
            <div className={'mt-3 px-3 fs-3'}>{props.text}</div>
            <div className={'mt-3 px-3 fs-3'}>{formatDate(props.date)}</div>
        </div>
    );
}

export default DivComponent;