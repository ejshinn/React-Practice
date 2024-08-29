// MailBox.jsx

// inline if : 조건문이 필요한 JSX 문법 안에 조건식을 사용하여 조건식 렌더링을 진행하는 것
// if문을 사용하는 것이 아니라 && 연산자를 사용하여 if문과 동일한 효과를 얻음
// JSX 문법에서는 if문을 사용할 수 없음(&& 또는 삼항연산자를 사용해야 함)
// 단축 평가 : &&(논리곱) 연산 시 && 연산자 왼쪽에 있는 연산 결과가 false일 경우 && 연산자 오른쪽에 있는 연산식의 결과에 상관없이 무조건 전체 결과가 false가 되므로 && 연산자 오른쪽에 있는 연산식을 연산하지 않음
// JSX의 && 연산에서 연산 결과가 Falsy가 되면 연산식 부분을 렌더링하지 않음

function MailBox(props) {
    // 부모 컴포넌트에서 전달받은 데이터를 변수에 저장
    const unreadMessages = props.unreadMessages;
    // const count = 0;

    return(
        <div>
            <h1>안녕하세요</h1>
            {
                // JSX 문법에서는 if문을 사용할 수 없음
                // count && <h2>현재 {unreadMessages}개의 읽지 않은 메일이 있습니다.</h2>
                unreadMessages > 0 && <h2>현재 {unreadMessages}개의 읽지 않은 메일이 있습니다.</h2>
            }
        </div>
    );
}

export default MailBox;