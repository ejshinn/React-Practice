// 함수 컴포넌트로 자식 컴포넌트 생성
function Book(props) {
    // 함수 컴포넌트에서 클래스 컴포넌트의 render() 함수와 동일한 역할을 하는 것이 return
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
            <h2>{`이 책은 총 ${props.numOfPage} 페이지로 이루어져 있습니다.`}</h2>
        </div>
    )
}

export default Book;