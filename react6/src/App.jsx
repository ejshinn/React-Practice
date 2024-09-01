import './App.css'
import Parent from "./components/Parent.jsx";
import Parent2 from "./components/Parent2.jsx";
import Join from "./components/Join.jsx";
import WelcomeDialog from "./components/WelcomeDialog.jsx";
import SplitPane from "./components/SplitPane.jsx";
import Chat from "./components/Chat.jsx";
import Contacts from "./components/Contacts.jsx";
import WelcomeDialog2 from "./components/WelcomeDialog2.jsx";
import SignUpDialog from "./components/SignUpDialog.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import Exercise from "./components/Exercise.jsx";

function App() {
    return (
        <div>
            <h3>상태 공유하기</h3>
            <Parent/>

            <br/>
            <hr/>
            <br/>

            <h3>상태 끌어올리기(자식 컴포넌트의 데이터를 부모 컴포넌트로 전달)</h3>
            <Parent2/>

            <br/><br/>

            <Join/>

            <br/>
            <hr/>
            <br/>

            <h3>합성과 상속</h3>
            <WelcomeDialog/>
            <br/><br/>

            {/* 부모 컴포넌트인 App에서 자식 컴포넌트인 SplitPane을 호출 */}
            {/* 자식 컴포넌트에 left, right 속성에 다른 컴포넌트를 전달 */}
            <SplitPane left={<Contacts/>} right={<Chat/>}/>

            <br/><br/>

            <WelcomeDialog2/>

            <br/><br/>
            <SignUpDialog/>

            <br/><br/>
            <ProfileCard/>

            <br/><hr/><br/>
            <Exercise/>
        </div>
    );
}

export default App