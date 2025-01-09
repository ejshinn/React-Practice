import {Link} from "react-router-dom";
import {apiBoardList, apiBoardWrite, apiBoardEdit, logout} from "../service/ApiService.js";

function Main() {

    const clickBtnBoardList = () => {
        apiBoardList();
    }

    const clickBtnBoardWrite = () => {
        apiBoardWrite();
    }

    const clickBtnBoardEdit = () => {
        apiBoardEdit(10);
    }

    const clickBtnLogout = () => {
        logout();
    }

    return (
        <div className={'container mt-5 p-5'}>
            <button type={'button'} className={'btn btn-primary me-2'} onClick={clickBtnBoardList}>글 목록 페이지 접속</button>
            <button type={'button'} className={'btn btn-primary me-2'} onClick={clickBtnBoardWrite}>글쓰기 페이지 접속</button>
            <button type={'button'} className={'btn btn-primary me-2'} onClick={clickBtnBoardEdit}>글 수정 페이지 접속</button>
            <Link to={'/board/boardDetail'}>상세 글 보기</Link>
            <div className={'mt-3'}>
                <Link to={'/auth/login'}>로그인 페이지</Link>
                <button type={'button'} className={'btn btn-primary ms-2'} onClick={clickBtnLogout}>로그아웃</button>
            </div>
        </div>
    );
}

export default Main