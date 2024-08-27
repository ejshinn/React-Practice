import Counter from "./components/Counter.jsx";
import SetStateClass from "./components/SetStateClass.jsx";
import SetStateFunction from "./components/SetStateFunction.jsx";
import Parent from "./components/Parent.jsx";
import NotificationList from "./components/NotificationList.jsx";
import Events from "./components/Events.jsx";
import CounterFunc from "./components/CounterFunc.jsx";
import CounterClass from "./components/CounterClass.jsx";
import CounterUseState from "./components/CounterUseState.jsx";

function App() {
    return (
        <div>
            <div className={'container mt-5'}>
                <h3>state 없이 버튼 클릭 시 count 값 변경해보기</h3>
                <Counter />

                <hr/>

                <h3>클래스 컴포넌트에서 state 사용하기</h3>
                <SetStateClass />
                <br/>

                <h3>함수 컴포넌트에서 state 사용하기</h3>
                <SetStateFunction />

                <br/><hr/><br/>

                <h3>props와 state의 차이</h3>
                <Parent />

                <br/><hr/><br/>

                <h3>컴포넌트 생명주기</h3>
                <NotificationList />

                <br/><hr/><br/>

                <h3>이벤트 사용하기</h3>
                <Events/>

                <br/><hr/><br/>

                <h2>React Hooks 사용하기</h2>
                <br/>

                <h3>함수 컴포넌트에서 Hooks 없이 그냥 사용할 경우</h3>
                <CounterFunc />
                <hr/>

                <h3>클래스 컴포넌트에서 그냥 사용할 경우</h3>
                <CounterClass />
                <hr/>

                <h3>함수 컴포넌트에서 useState() 사용</h3>
                <CounterUseState />
            </div>
        </div>
    );
}

export default App