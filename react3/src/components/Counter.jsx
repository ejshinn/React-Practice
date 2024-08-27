function Counter() {
    let count = 0;

    return (
        <div>
            <button type={'button'} className={'btn btn-primary'} onClick={()=> {
                count++;
                console.log(`count : ${count}`);
                alert(`count : ${count}`);
            }}>클릭</button>
            <p>총 {count}번 클릭했습니다.</p>
        </div>
    );
}

export default Counter;