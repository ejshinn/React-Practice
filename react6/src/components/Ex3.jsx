// Ex3.jsx

import EX3Navigate from "./EX3Navigate.jsx";
import EX3About from "./EX3About.jsx";
import EX3Menu from "./EX3Menu.jsx";
import EX3Contact from "./EX3Contact.jsx";
import EX3Footer from "./EX3Footer.jsx";

function Ex3() {
    return (
        <div>
            {/* 네비게이션바 컴포넌트 */}
            <EX3Navigate/>
            {/* header 부분을 부모 컴포넌트에서 직접 그려줌 */}
            <header className={'d-flex justify-content-center'}>
                <div className={'position-relative'}>
                    <img src={'https://www.w3schools.com/w3images/hamburger.jpg'} className={'mw-100'} alt={''}/>
                    <div className={'position-absolute'} style={{top: '89%', left: '2%'}}>
                        <h1>Le Catering</h1>
                    </div>
                </div>
            </header>
            {/* main 부분 */}
            <main className={'container'}>
                {/* 소개 부분을 컴포넌트로 호출 */}
                <EX3About/>
                <hr/>
                {/* 메뉴 부분을 컴포넌트로 호출 */}
                <EX3Menu/>
                <hr/>
                {/* 예약 부분을 컴포넌트로 호출 */}
                <EX3Contact/>
            </main>
            {/* Footer 컴포넌트 호출 */}
            <EX3Footer/>
        </div>
    );
}

export default Ex3;