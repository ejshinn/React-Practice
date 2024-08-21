function Clock() {
    return (
        <div>
            <h1>안녕하세요</h1>
            <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;