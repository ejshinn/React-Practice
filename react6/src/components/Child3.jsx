// Child3.jsx

// 자식 컴포넌트인 Child3은 부모 컴포넌트인 Parent2에서 전달받은 데이터가 data1, setData2가 됨
// data1에는 부모 컴포넌트의 parentValue1의 값이 들어있음
// setData2에는 부모 컴포넌트의 parentValue2의 값을 변경할 수 있는 setParentValue2() 함수가 들어있음
function Child3(props) {
    // 자식 컴포넌트에서 가지고 있는 일반 변수
    let childValue = 1000;

    // 버튼 이벤트를 처리하기 위해서 미리 선언해놓은 함수
    const sendData = () => {
        // 부모 컴포넌트에서 전달받은 데이터 setData2를 실행
        // setData2는 사실 부모 컴포넌트가 전달해준 함수
        // setData2는 부모 컴포넌트의 parentValue2를 변경할 수 있는 setParentValue2() 함수
        // 따라서 setData2() 함수를 실행하면 부모 컴포넌트의 setParentValue2() 함수를 실행하는 것과 동일함
        // 따라서 부모 컴포넌트의 parentValue2를 변경할 수 있음
        // 자식 컴포넌트의 데이터를 부모 컴포넌트로 전달할 수 있음
        props.setData2(2000);
    }

    return (
        <div className={'border border-2 border-info m-3 p-3'}>
            <h3>자식 컴포넌트</h3>

            <h4>부모 컴포넌트가 전달한 데이터1 : {props.data1}</h4>
            <h4>자식 컴포넌트가 가지고 있는 데이터 : {childValue}</h4>
            {/* 버튼의 클릭 이벤트 실행 시 미리 선언해놓은 함수 sendData()를 실행 */}
            <button type={'button'} className={'btn btn-primary'} onClick={sendData}>부모 컴포넌트로 데이터 전달</button>
        </div>
    );
}

export default Child3;