// ProfileCard.jsx

import Card from "./Card.jsx";

function ProfileCard() {
    return (
        // 부모 컴포넌트인 ProfileCard에서 자식 컴포넌트인 Card를 호출
        // 자식 컴포넌트 호출 시 title, backgroundColor 속성을 추가하고 데이터를 전달
        // 컴포넌트 합성 기법 중 포함(Containment)을 사용하여 html 태그를 자식 컴포넌트에 전달
        <div>
            <Card title={'홍길동'} backgroundColor={'#1E90FF'}>
                <p>안녕하세요. 홍길동입니다.</p>
                <p>리액트 처음 해봅니다.</p>
            </Card>
            <Card title={'홍길동'} backgroundColor={'DeepPink'}>
                <p>안녕하세요. 홍길동입니다.</p>
                <p>리액트 처음 해봅니다.</p>
            </Card>
            <Card title={'홍길동'}>
                <p>안녕하세요. 홍길동입니다.</p>
                <p>리액트 처음 해봅니다.</p>
            </Card>
            <Card backgroundColor={'#1E90FF'}>
                <p>안녕하세요. 홍길동입니다.</p>
                <p>리액트 처음 해봅니다.</p>
            </Card>
        </div>
    );
}

export default ProfileCard;