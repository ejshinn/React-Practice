import Info from "./components/info.jsx";
import CounterUseEffect from "./components/CounterUseEffect.jsx";
import LifecycleClass from "./components/LifecycleClass.jsx";
import LifecycleFunc from "./components/LifecycleFunc.jsx";
import VolumeControl from "./components/VolumeControl.jsx";
import HookUseMemo from "./components/HookUseMemo.jsx";
import HookUseMemo2 from "./components/HookUseMemo2.jsx";
import HookUseRef from "./components/HookUseRef.jsx";
import Accommodate from "./components/Accommodate.jsx";

function App() {
    return (
        <div className={'container mt-5'}>
            <h3>useState 여러 개 사용</h3>
            <Info/>

            <br/><hr/><br/>

            <h3>useEffect 사용하기</h3>
            <CounterUseEffect/>
            <br/>
            <LifecycleClass/>
            <br/>
            <LifecycleFunc/>
            <br/>
            <h3>문제 1) useState, useEffect로 볼륨 조절기 만들기</h3>
            <VolumeControl/>

            <br/><hr/><br/>
            
            <h3>useMemo 사용하기</h3>
            <HookUseMemo/>
            <HookUseMemo2/>

            <br/><hr/><br/>
            <h3>useRef 사용하기</h3>
            <HookUseRef/>

            <br/><hr/><br/>

            <h3>커스텀 훅 사용하기</h3>
            <Accommodate/>
        </div>
    );
}

export default App