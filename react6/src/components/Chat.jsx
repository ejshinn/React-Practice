// Chat.jsx

function Chat() {
    return(
        <div>
            <h3>오른쪽 화면</h3>
            <p>오른쪽 화면에 들어가는 p 태그</p>
            <button type={'button'} className={'btn btn-primary'} onClick={() => alert('클릭!')}>확인</button>
        </div>
    );
}

export default Chat;