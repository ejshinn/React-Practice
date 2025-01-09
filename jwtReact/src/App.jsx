import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Main from "./components/Main.jsx";
import BoardDetail from "./components/BoardDetail.jsx";


function App() {

    return (
        <div>
            <Header />
            {/*리액트 라우터를 사용하여 MPA로 사용*/}
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Main />} />
                    <Route path={'/board/boardDetail'} element={<BoardDetail />} />
                    <Route path={'/auth/login'} element={<Login />} />
                    <Route path={'/auth/signup'} element={<Signup />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App