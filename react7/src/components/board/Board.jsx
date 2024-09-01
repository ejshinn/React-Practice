// Board.jsx

import {useState} from "react";
import BoardList from "./BoardList.jsx";

function Board() {
    const [viewState, setViewState] = useState('list');

    let view = <BoardList/>;

    const getBoardList = () => {
        view = <BoardList/>;
        setViewState('list');
    }

    return (
        <div className={'container mt-5'}>
            <div className={'mt-3 d-flex justify-content-center'}>
                <button type={'button'} className={'btn btn-primary me-2'} onClick={getBoardList}>게시글 목록 화면</button>
                {/*<button type={'button'} className={'btn btn-primary me-2'}>게시글 상세 화면</button>*/}
                {/*<button type={'button'} className={'btn btn-primary'}>게시글 쓰기 화면</button>*/}
            </div>
            <hr/>
            <div className={'mt-3'}>
                {view}
            </div>
        </div>
    );
}

export default Board;