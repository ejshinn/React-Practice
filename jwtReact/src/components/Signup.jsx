import {useNavigate} from "react-router-dom";
import {apiSignup} from "../service/ApiService.js";

function Signup() {
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const userId = formData.get("userId");
        const userPw = formData.get("userPw");
        const userNick = formData.get("userNick");
        const userEmail = formData.get("userEmail");
        apiSignup({ userId: userId, userPw: userPw, userNick: userNick, userEmail: userEmail });
    }

    const btnCancel = () => navigate(-1)

    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-sm-4 mx-auto'}>
                    <form onSubmit={handleSubmit}>
                        <h3 className={''}>회원가입</h3>
                        <div className={'my-3'}>
                            <label htmlFor={'user-id'} className={'form-label'}>사용자 ID : </label>
                            <input type={'text'} className={'form-control'} id={'user-id'} name={'userId'} placeholder={'사용자 ID를 입력하세요'}/>
                        </div>
                        <div className={'my-3'}>
                            <label htmlFor={'user-pw'} className={'form-label'}>사용자 PW : </label>
                            <input type={'password'} className={'form-control'} id={'user-pw'} name={'userPw'} placeholder={'사용자 PW를 입력하세요'}/>
                        </div>
                        <div className={'my-3'}>
                            <label htmlFor={'user-nick'} className={'form-label'}>사용자 이름 : </label>
                            <input type={'text'} className={'form-control'} id={'user-nick'} name={'userNick'} placeholder={'사용자 이름를 입력하세요'}/>
                        </div>
                        <div className={'my-3'}>
                            <label htmlFor={'user-email'} className={'form-label'}>사용자 이메일 : </label>
                            <input type={'email'} className={'form-control'} id={'user-email'} name={'userEmail'} placeholder={'사용자 이메일를 입력하세요'}/>
                        </div>
                        <div className={'my-3 d-grid gap-3'}>
                            <button type={'submit'} className={'btn btn-primary'}>회원가입</button>
                            <button type={'button'} className={'btn btn-secondary'} onClick={btnCancel}>취소</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup