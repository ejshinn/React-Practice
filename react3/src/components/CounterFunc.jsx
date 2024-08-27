function CounterFunc() {
    let count = 0;

    return (
        <div>
            <p>총 {count}번 클릭 했습니다</p>
            <button type={'button'} className={'btn btn-primary'} onClick={() => {
                count++;
                console.log(`function count : ${count}`);
            }}>클릭</button>
        </div>
    );
}

export default CounterFunc;