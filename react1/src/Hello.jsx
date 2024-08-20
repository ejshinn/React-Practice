import React from "react";

// 클래스 컴포넌트는 React.Component 클래스를 상속받아서 만들어짐
// 기본적으로 클래스 컴포넌트는 자바스크립트의 클래스임
// 클래스 컴포넌트에서 자바스크립트의 클래스 문법을 다 사용함
class Hello extends React.Component {
    // 필드와 메서드를 추가하여 사용할 수 있음
    name = '짱구';
    age = 5;

    printInfo() {
        console.log(`이름은 ${this.name}이고 나이는 ${this.age}입니다.`);
    }

    // render() 메서드는 화면에 UI를 그리는 메서드
    render() {
        // props는 부모 컴포넌트에서 전달받은 데이터
        // props에 담겨 있는 데이터의 이름은 부모 컴포넌트에서 지정함
        return <div>Hello {this.props.toWhat}</div>;
    }
}

export default Hello;