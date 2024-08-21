import Library from "./components/Library.jsx";
import Layout from "./components/Layout.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ClassComponent from "./components/ClassComponent.jsx";
import FuncComponent from "./components/FuncComponent.jsx";
import Welcome from "./components/Welcome.jsx";
import OriComponent from "./components/OriComponent.jsx";
import DivComponent from "./components/DivComponent.jsx";
import CommentList from "./components/CommentList.jsx";
import Clock from "./components/Clock.jsx";

const data = {
    name: '짱구',
    avatarUrl:'https://upload.wikimedia.org/wikipedia/ko/thumb/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png/230px-%EC%8B%A0%EC%A7%B1%EA%B5%AC.png'
}

function App2() {
    return (
        <div>
            <Library/>
            {/* 자식 컴포넌트(Layout)를 사용하여 화면을 그려줌 */}
            {/* width, height 속성에 숫자 데이터를 전달 */}
            {/* header, footer 속성에 Header, Footer 컴포넌트를 전달 */}
            {/* 자식 컴포넌트인 Layout의 props에 width, height, header, footer라는 이름으로 데이터가 전달됨 */}
            <Layout width={1920}
                    height={1080}
                    header={<Header title={'리액트로 만든 페이지'}/>}
                    footer={<Footer/>}
            />

            <hr/>

            <ClassComponent/>
            <FuncComponent/>

            <br/><hr/><br/>

            <div>
                <h3>컴포넌트 합성</h3>
                {/* 컴포넌트 합성 :  여러 개의 컴포넌트를 합하여 하나의 컴포넌트를 만드는 것, 리액트는 컴포넌트 안에 다른 컴포넌트를 포함할 수 있기 때문에 컴포넌트 합성을 통하여 복잡한 화면을 여러 개의 컴포넌트로 나누어서 구현할 수 있음 */}
                
                <Welcome name={'짱구'}/>
                <Welcome name={'철수'}/>
                <Welcome name={'맹구'}/>
            </div>

            <br/><hr/><br/>

            <div>
                <h3>컴포넌트 추출</h3>
                {/* 컴포넌트 추출 : 하나의 복잡한 컴포넌트에서 작은 크기의 컴포넌트를 여러 개 만들어서 화면을 구성하는 것 */}
                
                <h4>원본 컴포넌트</h4>
                <OriComponent text={'외부이미지 사용'} date={new Date()} author={data}/>

                <hr/>
                
                <h4>추출된 컴포넌트</h4>
                <DivComponent text={'컴포넌트 추출'} date={new Date()} author={data}/>
            </div>

            <br/><hr/><br/>

            <div>
                <h3>실습, 댓글 컴포넌트 만들기</h3>

                <CommentList/>
            </div>
        </div>
    );
}

export default App2;