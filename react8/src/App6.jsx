// react-router-dom : SPA 방식인 리액트 프로젝트를 MPA 방식으로 사용할 수 있도록 해주는 라이브러리

// 사용법 :
// 설치 :
// npm install react-router-dom

// 리액트 라우터 컴포넌트
// <BrowserRouter> : SPA 페이지를 MPA 페이지로 만들어지는 컴포넌트, 라우터 기본 컴포넌트
// <Routes> : 페이지 컴포넌트를 여러 개 가질 수 있는 컴포넌트
// <Route> : 화면에 그려지는 페이지 객체, Route 컴포넌트의 자식 컴포넌트로 Route 컴포넌트를 사용 시 부모 Route 컴포넌트의 주소를 기본 주소로 사용함
//     path : 웹 브라우저에 표시되는 url 주소를 설정, 절대 경로 / 상대 경로 다 사용 가능, '*' 사용 시 모든 페이지를 뜻함('*' 주로 에러 페이지 설정 시 사용함)
//     element : path 속성으로 지정한 url과 매칭되는 리액트 컴포넌트를 설정
// <Link> : 리액트 라우터에서 사용되는 링크 전용 컴포넌트, html의 <a> 태그와 같은 기능
//     to : 이동할 url 주소를 설정, Route 컴포넌트의 path 속성에 입력한 url을 설정
// <Outlet> : 현재 선택된 경로의 컴포넌트를 화면에 표시

// 쿼리 스트링 : 기존의 get 방식으로 웹 브라우저의 주소창에 파라미터를 함께 전달하는 방식
// <Route> 컴포넌트의 path 속성의 변경이 없음
// element 속성에서 지정한 컴포넌트에서 몇 가지 옵션 사항을 사용할 수 있음
// 옵션 : 
//     pathname : 쿼리스트링을 제외한 현재 주소의 경로
//     search : 맨 앞의 ? 문자를 포함한 쿼리 스트링 값 전체
//     hash : 주소의 # 문자열 뒤의 값(구형 브라우저에서만 동작)
//     state : 페이지 이동 시 임의로 추가할 상태 값
//     key : location 객체의 고유한 값

// useLocation(), useSearchParams() 훅을 사용하여 데이터를 가져올 수 있음
// useLocation() 훅을 사용하여 데이터를 가져오면 원하는 파라미터값을 가져오기 위해 직접 파싱을 해야 함
// useSearchParams() 훅을 사용하여 데이터를 가져오면 파라미터 데이터만 따로 가져올 수 있음
// 사용법 :
//     기존url?파라미터1=값1&파라미터2=값2

// URL파라미터 : RestAPI 방식의 주소형태로 구성되는 파라미터
// Route 컴포넌트의 path 속성값 뒤에 '/'와 ':파라미터명'을 사용하여 데이터를 전달하는 방식
// rest 방식으로 구성되어있을 경우 사용
// 연결된 컴포넌트에서 useParams() 훅을 사용해야 함
// 사용법 :
//     기존url/:파라미터명1/:파라미터명2
//     <Route path={url/:test1/:test2} element={<url />}>

// useNavigate() : Link 컴포넌트를 사용하지 않고 다른 페이지로 이동하는 훅
// 사용법 : 
//     const navigate = useNavigate();
//     navigate(-1); // History를 사용하여 이전 페이지로 이동, 음수 사용 시 이전 페이지로 이동, 양수 사용 시 다음 페이지로 이동
//     navigate(url); // 지정한 URL로 이동

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Signup from "./pages/Signup.jsx";
import Profile1 from "./pages/Profile1.jsx";
import Logout from "./pages/Logout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Login from "./pages/Login.jsx";
import Profile2 from "./pages/Profile2.jsx";

function App6() {
    return (
        <div className={'container mt-5'}>
            {/* 리액트 라우터를 시작하는 컴포넌트 */}
            <BrowserRouter>
                {/* 리액트 라우터의 Route 컴포넌트를 설정하는 컴포넌트 */}
                <Routes>
                    {/* 웹브라우저의 주소창에 입력할 url을 설정하는 컴포넌트 */}
                    {/* path 속성의 url은 절대 경로, 상대 경로 모두 사용 가능 */}
                    {/* 상대 경로 사용 시 부모 컴포넌트(Route 컴포넌트)의 주소가 존재해야 함 */}
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/about'} element={<About />} />
                    {/* 절대 경로를 사용하여 url을 설정 */}
                    <Route path={'/pages/login'} element={<Login />} />
                    {/* Route를 사용하여 지정한 url을 제외한 모든 url을 의미함 */}
                    <Route path={'*'} element={<ErrorPage />} />
                    <Route path={'/profile1'} element={<Profile1 />} />
                    {/* 부모 컴포넌트로써의 Route 컴포넌트, 기본 주소만 있음 */}
                    <Route path={'/pages'}>
                        {/* 자식 컴포넌트로써의 Route 컴포넌트, 상세 주소를 가지고 있음 */}
                        {/* 실제 접속 주소는 부모의 주소 + 자식의 주소 */}
                        {/* 자식 컴포넌트로써의 Route 사용 시 path 속성의 시작 부분에 '/'가 있으면 안됨 */}
                        {/* index 속성은 부모 컴포넌트의 url을 자신의 url로 사용한다는 의미 */}
                        {/* http://localhost:5173/pages */}
                        <Route index element={<Signup />} />
                        {/* http://localhost:5173/pages/logout */}
                        <Route path={'logout'} element={<Logout />} />
                        {/* URL 파라미터 방식으로 데이터 전달 */}
                        <Route path={'profile2/:username/:age'} element={<Profile2 />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App6;