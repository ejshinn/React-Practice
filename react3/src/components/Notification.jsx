import React from "react";

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log('constructor() 호출됨');
    }

    componentDidMount() {
        console.log('componentDidMount() 호출됨');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate() 호출됨');
    }

    // 생성자 실행 후 render() 함수 실행
    render() {
        return (
            // 부모 컴포넌트에서 전달받은 데이터로 화면 UI 구성
            <div className={'m-2 p-2 d-flex border rounded-3'}>
                <span className={'text-black fs-4'}>{this.props.message}</span>
                {console.log('render() 호출됨')}
            </div>
        );
    }
}

export default Notification;