import Book from "./Book.jsx";

// props : 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 때 사용하는 객체
// props의 속성은 부모 컴포넌트에서 자식 컴포넌트를 사용 시 속성명을 통해서 지정함
// 사용자지정속성명={데이터} 형식으로 사용
// 데이터 타입은 숫자, 문자('', ""로 감싸서 입력), object, 논리형 등 모든 데이터 타입을 사용할 수 있음
// 문자열은 {"문자열"} 형식이나 "문자열" 형식으로 사용할 수 있음

function Library() {
    return (
        <div>
            <Book name="풀스택 자바" numOfPage={500}></Book>
            <Book name={"풀스택 스프링"} numOfPage={300}></Book>
            <Book name={"소플의 처음만난 리액트"} numOfPage={400}/>
        </div>
    );
}

export default Library;











