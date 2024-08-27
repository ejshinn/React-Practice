// 리액트에서 이벤트 사용 시 일반적인 웹 형태처럼 eventListener 방식을 사용할 수 없음
// 리액트에서 이벤트는 inline 방식을 사용함
// 이벤트를 위한 속성은 JSX 문법에 의해서 카멜명명법으로 지정되어 있음
// inline 이벤트 사용 시 콜백 함수를 선언하여 사용
// 1. html 태그의 이벤트 속성에 직접 콜백 함수를 선언하여 사용
// 2. 컴포넌트에 이벤트 처리를 위한 함수를 생성하고 html 태그의 이벤트 속성에는 해당 함수명만 입력하여 사용
// 이벤트 함수 사용 시 매개변수로 이벤트 객체를 제공함
// 이벤트 객체를 사용하면 실제 이벤트가 발생한 태그의 정보를 가져올 수 있음
function Events() {

    const clickEvent = () => {
        alert('이벤트 처리함수를 미리 생성하고 html 태그의 이벤트 속성에 함수명만 입력하여 처리');
    }

    const clickEvent2 = (e) => {
        alert('이벤트 처리함수를 미리 생성하고 html 태그의 이벤트 속성에 함수명만 입력하여 처리');
        alert(`이벤트가 발생한 태그의 id : ${e.target.id}`);
    }

    return (
        <div>
            {/* button 태그에 inline 방식으로 click 이벤트 설정 */}
            {/* function 키워드를 사용하는 콜백함수를 직접 입력 */}
            <button type={'button'} className={'btn btn-primary'} onClick={function () {
                alert('콜백함수를 직접 선언하여 이벤트 처리');
            }}>클릭</button>

            {/* button 태그에 inline 방식으로 click 이벤트 설정 */}
            {/* 화살표 함수를 사용하는 콜백함수를 직접 입력 */}
            <button type={'button'} className={'btn btn-primary'} onClick={() => alert('콜백함수로 화살표 함수를 사용하여 이벤트 처리')}>클릭</button>

            <button type={'button'} className={'btn btn-primary'} onClick={() => {
                alert('콜백함수로 화살표 함수를 사용하여 이벤트 처리');
            }}>클릭</button>

            {/* 미리 생성해 놓은 함수를 이벤트 속성에 입력하여 이벤트를 처리 */}
            {/* 하나의 함수로 여러 개 태그의 이벤트 처리를 진행할 수 있음 */}
            <button type={'button'} className={'btn btn-primary'} onClick={clickEvent}>클릭</button>
            <button type={'button'} className={'btn btn-info'} onClick={clickEvent}>클릭</button>

            {/* 이벤트 객체 사용 */}
            <button type={'button'} className={'btn btn-primary'} id={'btn6'} onClick={
                (event) => {
                    alert('클릭 이벤트 발생');
                    console.log(event);
                    console.log(event.target);
                    console.log(event.target.id);
            }}>이벤트 객체 사용 클릭</button>
            <button type={'button'} className={'btn btn-primary'} id={'btn7'} onClick={clickEvent2}>이벤트 객체 사용 클릭</button>
        </div>
    );
}

export default Events;