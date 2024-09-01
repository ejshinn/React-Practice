// FancyBorder2.jsx

// 자식 컴포넌트의 UI 일부분을 부모 컴포넌트에서 전달받아 사용함
function FancyBorder2(props) {
    return (
        // 부모 컴포넌트에서 전달한 html 태그는 props를 통해서 사용할 수 있음
        // html 태그는 props.children을 통해서 사용할 수 있음
        <div className={'border border-2 border-info m-3 p-3 FancyBorder2 FancyBorder2-' + props.color}>
            <h4 className={'mb-3'}>자식 컴포넌트 영역</h4>
            {props.children}
        </div>
    );
}

export default FancyBorder2;