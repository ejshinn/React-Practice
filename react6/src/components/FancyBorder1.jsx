// FancyBorder1.jsx

// 자식 컴포넌트에서 필요한 화면 부분을 모두 구현
function FancyBorder1(props) {
    return (
        <div className={'border border-2 border-info m-3 p-3 FancyBorder1 FancyBorder1-' + props.color}>
            <h4 className={'mb-3'}>자식 컴포넌트 영역</h4>
            <h1 className={'Dialog-title'}>어서오세요</h1>
            <p className={'Dialog-message'}>우리 사이트에 방문하신 것을 환영합니다.</p>
        </div>
    );
}

export default FancyBorder1;