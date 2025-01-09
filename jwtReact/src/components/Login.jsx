import {Link} from "react-router-dom";
import {apiLogin} from "../service/ApiService.js";

function Login() {

    const handleSubmit = (e) => {
        e.preventDefault();
        // FormData() : node.js를 통해서 Form 태그를 생성함
        // submit 이벤트를 발생 시킨 대상을 가져와서 FormData 타입의 객체를 생성, JSX 문법으로 생성된 form 태그의 모든 내용을 다시 생성했다고 생각하면 됨
        const formData = new FormData(e.target);
        // get() : form 태그 안에 있는 태그 중 지정한 데이터와 동일한 값을 가지는 name 속성의 value 값을 가져옴
        // useState로 구현해도 됨
        const userId = formData.get('userId');
        const userPw = formData.get('userPw');

        // 백엔드 서버의 회원 가입 컨트롤러로 접속
        apiLogin(userId, userPw);
    }

    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-sm-4 mx-auto'}>
                    <h3 className={''}>로그인</h3>
                    {/* submit 이벤트 발생 */}
                    <form onSubmit={handleSubmit}>
                        <div className={'my-3'}>
                            <label htmlFor={'user-id'} className={'form-label'}>사용자 ID : </label>
                            <input type={'text'} className={'form-control'} id={'user-id'} name={'userId'} placeholder={'사용자 ID를 입력하세요'}/>
                        </div>
                        <div className={'my-3'}>
                            <label htmlFor={'user-pw'} className={'form-label'}>사용자 PW : </label>
                            <input type={'password'} className={'form-control'} id={'user-pw'} name={'userPw'} placeholder={'사용자 PW를 입력하세요'}/>
                        </div>
                        <div className={'my-3 d-grid gap-3'}>
                            <button type={'submit'} className={'btn btn-primary'}>로그인</button>
                            <Link to={'/auth/signup'} className={'btn btn-info'}>회원가입</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login