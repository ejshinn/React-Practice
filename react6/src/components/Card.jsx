// Card.jsx

// 컴포넌트 합성 기법 중 Specialization을 사용하여 Card 컴포넌트를 생성
function Card(props) {
    // 부모 컴포넌트에서 전달한 데이터인 props를 ES6의 객체 분할 할당 방식을 사용하여 자식 컴포넌트의 변수에 할당
    // children은 원래 자식 컴포넌트의 props에 존재하며, 부모 컴포넌트에서 children에 html 태그를 추가해서 전달
    const {title, backgroundColor, children} = props;

    return (
        <div style={{
            margin: 8,
            padding: 8,
            borderRadius: 8,
            // ||를 사용하면 || 연산자 왼쪽에 데이터가 존재할 경우(true) 해당 데이터를 사용
            // 연산자 왼쪽에 데이터가 없을 경우(false) || 오른쪽에 입력한 데이터를 기본값으로 사용
            backgroundColor: backgroundColor || 'white'
        }}>
            {title && <h1>{title}</h1>}
            {children}
        </div>
    );
}

export default Card;