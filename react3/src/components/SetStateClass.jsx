import React from "react";

// React.Component를 상속받아 클래스 컴포넌트로 생성
class SetStateClass extends React.Component {

    // 자바스크립트 ES6 문법에서 제공하는 자바스크립트 클래스의 생성자
    // 자바스크립트 클래스의 생성자는 이름이 고정, 생성자는 단 1개만 존재해야 함
    constructor(props) {
        // 자바에서의 super()와 같은 의미, 부모 클래스의 생성자 호출
        super(props);

        // 자바스크립트는 this.변수명 사용 시 클래스의 필드(클래스의 멤버변수)로 사용
        // 클래스 컴포넌트 SetStateClass의 멤버 변수 state를 선언, 데이터 타입은 object 타입
        // 리액트에서 클래스 컴포넌트를 사용 시 현재 컴포넌트의 상태정보를 저장하는 state 객체를 선언
        this.state = {
            // 컴포넌트의 상태 정보를 저장할 변수 StateString 선언
            // 리액트의 state는 현재 컴포넌트의 상태 정보를 저장하고 있지만, 해당 정보를 직접 수정 시 화면에 반영하지 않음
            // UI 화면에 반영하면서 수정하려면 setState() 함수를 반드시 사용해야 함
            StateString: 'Click',
        }
    }

    // SetStateClass 클래스의 멤버 메서드 StateChange 선언
    StateChange = flag => {
        if(flag == 'direct') {
            // 컴포넌트의 상태 정보를 저장하는 state의 요소 중 StateString의 값을 = 연산자를 사용하여 직접 변경
            // 리액트에서는 Virtual DOM을 사용하기 때문에 state의 값을 직접 수정 시 Virtual DOM에만 적용되고, 실제 DOM에는 적용되지 않음
            console.log(`원본 내용 : ${this.state.StateString}`);
            // state 객체에 값을 직접 대입
            this.state.StateString = '멤버 변수인 StateString의 값을 직접 변경';
            // 현재 state 객체의 내용을 출력
            console.log(`수정 내용 : ${this.state.StateString}`);
        }
        else if(flag == 'setState') {
            // 컴포넌트의 상태 정보를 저장하는 state의 요소 중 StateString의 값을 setState() 함수를 사용하여 변경
            // setState()를 사용하여 내용 수정 시 Virtual DOM에 적용된 내용을 실제 DOM과 동기화하여 화면에 반영
            console.log(`원본 내용 : ${this.state.StateString}`);
            // setState() 함수를 사용하여 StateString의 값을 변경
            this.setState({StateString: 'setState() 함수로 멤버 변수인 StateString의 값 변경'});
            // 현재 state 객체의 내용을 출력
            console.log(`수정 내용 : ${this.state.StateString}`);
        }
    }

    // 클래스 컴포넌트에서 UI를 그려주는 메서드
    render() {
        return (
            <div>
                {/* jsx 문법에서 문자열은 {} 없이 사용 가능, {} 사용 시 자바스크립트 코드 사용 가능 */}
                {/* jsx 문법에서 css 속성 사용 시 '-' 기호를 생략하고, 카멜명명법을 사용하여 속성명 입력 */}
                {/* jsx 문법에서 css 사용 시 object 타입으로 설정해야 함 */}
                {/* jsx 문법은 기본적으로 모든 html 태그 및 html 태그의 속성을 제공하지만 용어가 겹치는 것들이 존재하기 때문에 몇몇 속성은 다른 이름을 사용하고 있음 */}
                <button type={'button'} className={'btn btn-primary'} onClick={(e) => {
                    this.StateChange('direct', e)
                }}>state 직접 수정</button>
                <button type={'button'} style={{marginLeft: '10px'}} className={'btn btn-success'} onClick={e=>
                    this.StateChange('setState', e)}>setState로 변경</button>
                <br/>
                [state 변경하기] StateString: {this.state.StateString}
            </div>
        );
    }
}

export default SetStateClass;