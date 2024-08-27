import React from "react";
import Notification from "./Notification.jsx";

// 화면에 출력할 데이터 설정
const reservedNotifications = [
    {message: '안녕하세요. 메시지 테스트입니다.', key: 1},
    {message: '안녕하세요. 두 번째 메시지 테스트입니다.', key: 2},
    {message: '세 번째 메시지 테스트입니다.', key: 3},
    {message: '네 번째 메시지 테스트입니다.', key: 4},
    {message: '안녕하세요. 메시지 테스트 5입니다.', key: 5},
    {message: '안녕하세요. 메시지 테스트 6입니다.', key: 6},
];

// 자바스크립트 타이머 객체를 저장할 변수
let timer;

// 클래스 컴포넌트 방식으로 컴포넌트 선언
class NotificationList extends React.Component {
    // 클래스 컴포넌트의 생성자 선언
    constructor(props) {
        super(props);
        // state 객체 선언
        this.state = {
            // notifications라는 이름의 배열을 state로 상태 관리
            notifications: [],
        };
    }

    // 현재 컴포넌트의 UI 화면을 구성하고 부모 컴포넌트에 붙이고 난 후 동작하는 메서드
    componentDidMount(){
        // state로 관리되고 있는 객체를 componentDidMount 메서드의 지역변수로 선언
        // 객체 분해 할당 방식으로 state 객체의 요소를 지역 변수인 notifications에 대입
        const {notifications} = this.state;

        // 타이머 생성, 2초마다 실행되는 타이머
        timer = setInterval(() => {
            // 지역 변수 notifications 배열의 크기와 전역 변수 reservedNotifications 배열의 크기 비교  
            if(notifications.length < reservedNotifications.length) {
                // 지역 변수 notifications 배열의 크기를 index 변수에 저장
                const index = notifications.length;
                // 위에서 지정한 index 값을 사용하여 전역 변수 reservedNotifications 배열의 데이터를 꺼내어 지역 변수 notifications 배열에 추가
                notifications.push(reservedNotifications[index]);
                // setState() 함수를 사용하여 state 객체의 요소를 수정
                // setState() 함수가 호출되면 render() 함수가 자동 실행되어 화면 UI가 재렌더링 됨
                this.setState({notifications: notifications})
            }
            else {
                // clearInterval() 함수를 사용하여 설정된 타이머 삭제 
                clearInterval(timer);
            }
        }, 2000);
    }

    // 클래스의 생성자 실행 후 UI를 그려주는 메서드
    // render() 함수 실행 이후에 componentDidMount() 함수가 실행
    // setState() 함수가 실행되면 render() 함수가 다시 실행
    render() {
        return (
            <div>
                {/* 첫 render() 호출 시 state에서 관리되고 있는 배열인 notifications가 빈 배열이기 때문에 map() 함수가 실행되지 않음 */}
                {/* setState()가 실행 후 자동으로 render() 함수가 실행됨 */}
                {/* state가 관리하고 있는 배열 notifications에 이제는 데이터가 있으므로 map() 함수를 실행함 */}
                {this.state.notifications.map((item) => {
                    // key : 자식 컴포넌트를 반복(map, forEach 등)하여 호출할 경우 리액트는 호출한 자식 컴포넌트를 구분하지 못함
                    // 반복 호출한 컴포넌트의 순서를 지정하기 위해서 사용하는 속성이 key임
                    // key는 중복되지 않는 값을 입력해야 함
                    // 배열의 index 값을 key로 사용할 수 있으나 권장하지 않음
                    return <Notification message={item.message} key={item.key}/>
                })}
            </div>
        );
    }
}

export default NotificationList;