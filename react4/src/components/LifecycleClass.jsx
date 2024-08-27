import React from "react";

class LifecycleClass extends React.Component {
    // 클래스의 필드 선언
    num1;

    constructor(props) {
        super(props);

        // state 객체로 관리되는 변수 num2, 선언, 초깃값은 null
        this.state = {
            num2: null,
        }
    }

    componentDidMount() {
        this.num1 = 100;
        // state 객체로 관리되는 변수를 직접 수정할 수 없음
        // this.state.num2 = 200;
        this.setState({num2: 2000});
        console.log(this.num1);
        console.log(this.state.num2);
    }

    componentDidUpdate() {
        console.log('setState() 실행 후 동작하는 componentDidUpdate() 함수');
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <p>num1 : {this.num1}</p>
                {console.log(this.num1)}
                <p>num2 : {this.state.num2}</p>
                {console.log(this.state.num2)}
            </div>
        );
    }
}

export default LifecycleClass;