// AxiosRestApiServerConnect.jsx

import axios from "axios";

// SOP(Same-Origin Policy) : 동일 출처 정책, 동일한 출처의 리소스만 사용하는 정책

// CORS(Cross-Origin Resource Sharing) : 다른 출처의 자원을 공유하여 사용하는 것
// 기본적으로 하나의 출처에서 리소스를 사용 시 문제가 없으나 다른 출처에서 리소스를 가져와서 사용할 시 오류가 발생
// CORS 오류는 웹 브라우저에서 발생하는 오류

// CORS 오류 해결 방법
// 1. 리액트에서 프록시 서버 사용
// 2. 스프링 서버에서 CORS 설정
//     2.1 @CrossOrigin 애너테이션 사용(Controller 클래스, 메서드에 사용)
//     2.2 WebMvcConfigurer를 상속받아 addCorsMappings() 메서드를 오버라이딩하여 설정

function AxiosRestApiServerConnect() {

    const clickSendDataGetTest = () => {
        // 리액트에서 CORS 오류를 해결하기 위해 프록시 서버 설정을 사용했을 경우 접속할 서버 주소에서 'http://서버주소:포트번호' 부분을 생략하고 나머지 경로만 입력
        axios.get('/api/test')
            .then(res => {
                alert('Axios를 통한 비동기 통신 성공!');
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
                alert("비동기 통신 중 오류가 발생했습니다");
            });
    }

    // GET 방식으로 데이터 전송 시 파라미터가 없는 타입
    const clickSendDataGet = () => {
        // 리액트의 프록시 서버로 CORS 오류 처리 시 URL
        //axios.get('/api/async/sendDataGet')
        // 서버에서 CORS 오류 처리 시
        axios.get('http://localhost:8080/async/sendDataGet')
            .then(res => {
                alert('Axios를 통한 비동기 통신(get 방식) 성공!');
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
                alert("비동기 통신(get 방식) 중 오류가 발생했습니다");
            });
    }

    // GET 방식으로 데이터 전송 시 파라미터가 존재하는 타입
    const clickSendDataGetParam = () => {
        // 파라미터 전달 시 주소에 직접 입력하는 방식
        // axios.get('/api/async/sendDataGetParam?idx=100')
        // params 속성을 사용하여 파라미터 전달하는 방식
        // axios.get('/api/async/sendDataGetParam', {
        //     params: { idx: 100 }
        // })
        axios.get('http://localhost:8080/async/sendDataGetParam', {
            params: { idx: 100 }
        })
            .then(res => {
                alert('Axios를 통한 비동기 통신(get, 파라미터) 성공!');
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
                alert("비동기 통신(get 방식) 중 오류가 발생했습니다");
            });
    }

    const clickSendDataPost = () => {
        // axios.post('/api/async/sendDataPost', null, {
        //     params: {
        //         userId: 'testuser1',
        //         userPw: '1234',
        //     },
        // })
        axios.post('http://localhost:8080/async/sendDataPost', null, {
            params: {
                userId: 'testuser1',
                userPw: '1234',
            }
        })
            .then(res => {
                alert('Axios를 통한 비동기 통신(post 방식) 성공!');
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
                alert("비동기 통신(post 방식) 중 오류가 발생했습니다");
            });
    }

    const clickSendDataPut = () => {
        // axios.put('/api/async/sendDataPut', null, {
        //     params: { idx: 100 }
        // })
        axios.put('http://localhost:8080/async/sendDataPut', null, {
            params: { idx: 100 }
        })
            .then(res => {
                alert('Axios를 통한 비동기 통신(put 방식) 성공!');
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
                alert("비동기 통신(put 방식) 중 오류가 발생했습니다");
            });
    }

    const clickSendDataDelete = () => {
        // axios.delete('/api/async/sendDataDelete', {
        //     params: { idx: 100 }
        // })
        axios.delete('http://localhost:8080/async/sendDataDelete', {
            params: { idx: 100 }
        })
            .then(res => {
                alert('Axios를 통한 비동기 통신(delete 방식) 성공!');
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
                alert("비동기 통신(delete 방식) 중 오류가 발생했습니다");
            });
    }
    return(
        <div className={'mt-3'}>
            <h3 className={'text-center'}>Axios를 이용한 비동기 통신</h3>
            <div className={'row'}>
                <div className={'col-sm-8 mx-auto'}>
                    <div className={'mt-3 d-flex justify-content-center'}>
                        <button type={'button'} className={'btn btn-primary me-2'} onClick={clickSendDataGetTest}>Spring RestAPI 서버에 접속 테스트</button>
                        <button type={'button'} className={'btn btn-primary me-2'} onClick={clickSendDataGet}>GET 방식 사용</button>
                        <button type={'button'} className={'btn btn-primary me-2'} onClick={clickSendDataGetParam}>GET 방식 파라미터 사용</button>
                        <button type={'button'} className={'btn btn-primary me-2'} onClick={clickSendDataPost}>POST 방식 파라미터 사용</button>
                        <button type={'button'} className={'btn btn-primary me-2'} onClick={clickSendDataPut}>PUT 방식 파라미터 사용</button>
                        <button type={'button'} className={'btn btn-primary me-2'} onClick={clickSendDataDelete}>DELETE 방식 파라미터 사용</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AxiosRestApiServerConnect;