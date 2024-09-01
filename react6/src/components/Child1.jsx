// Child1.jsx

function Child1(props) {
    return (
        <div className={'border border-2 border-primary rounded-2 m-4 p-4'}>
            {/* 부모 컴포넌트에서 전달받은 데이터는 모두 props.속성명으로 데이터를 가져옴 */}
            {/* props로 전달받은 데이터는 읽기 전용 */}
            <h2>왼쪽 자식 컴포넌트 영역</h2>
            <h3>첫 번째로 전달받은 값 : {props.data}</h3>
            <h3>두 번째로 전달받은 값 : {props.data2}</h3>
        </div>
    );
}

export default Child1;