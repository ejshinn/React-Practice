import Content1 from "./Content1.jsx";

// 자식 컴포넌트, 부모 컴포넌트에서 전달받은 데이터 없음
function Layout1() {
    return (
        <div className={'mt-3 p-3 border'}>
            {/* 자식 컴포넌트 Content1 호출, 데이터 전달 없음 */}
            <Content1 />
        </div>
    );
}

export default Layout1;