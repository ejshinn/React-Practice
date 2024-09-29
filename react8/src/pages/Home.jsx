import {Link} from "react-router-dom";

function Home() {
    return (
        <div className={'container mt-5'}>
            <h1>Home 페이지</h1>
            <p>접속 시 가장 먼저 보이는 페이지</p>

            {/* html 태그의 a 태그로 동작, a 태그의 href 속성과 같은 기능을 하는 것이 to 속성임 */}
            {/* to 속성에 사용할 수 있는 주소는 Route 컴포넌트의 path 속성으로 지정한 주소만 가능 */}
            <Link to={'about'} >소개 페이지로 이동</Link>
        </div>
    );
}

export default Home;