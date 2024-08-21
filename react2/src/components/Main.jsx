import {Button} from "react-bootstrap";

function Main() {
    return (
        <main className={'container mt-5'}>
            <h3 className={'text-center'}>Main 컴포넌트 영역입니다.</h3>
            <h4 className={'text-center'}>콘텐츠 입력</h4>
            <Button variant={"primary"} type={'button'}>리액트 부트스트랩 버튼</Button>
            <button type={'button'} className={'btn btn-primary'}>부트스트랩 버튼</button>
        </main>
    );
}

export default Main;