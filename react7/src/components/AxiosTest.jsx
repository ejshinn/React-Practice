// AxiosTest.jsx

// axios : ajax 비동기 통신을 하기 위한 자바스크립트 라이브러리
// 리액트는 jQuery를 사용하지 않기 때문에 비동기 통신을 위해서 axios를 사용함
// 사용 시 해당 컴포넌트에 import하여 사용
// 단축 메서드를 제공하고 있음(get, post, put, delete)
// then(콜백함수) : 데이터 통신 성공 시 자동 동작하는 부분
// catch(콜백함수) : 데이터 통신 실패 시 자동 동작하는 부분

// 문법:
// axios({
//     url: '접속 주소',
//     method: '통신 방식',
//     data: { 파라미터 값으로 보낼 데이터 }
// });

// 사용법 :
// 설치 : npm install axios

// 선언 :
// import axios from 'axios';

// 사용 :
// axios.단축메서드(접속주소, 매개변수)
// .then(response => { 접속 성공 시 실행할 소스코드 })
// .catch(error => { 접속 실패 시 실행할 소스코드 });

// response의 status
// 200: 정상 통신 성공
// 300: 리다이렉트
// 400: 리소스 없음
// 500: 서버 내부 오류

// 예시 :
// axios.get('http://localhost:8080/login?id=asdf&pw1234')
// .then(res => { 성공 시 처리할 소스 })
// .catch(err => { 실패 시 처리할 소스 });

// axios.get('http://localhost:8080/login', {
//     params: {
//       id: 'asdf',
//       pw: '1234'
//     }})
//  .then(res => { 성공 시 처리할 소스 })
//  .catch(err => { 실패 시 처리할 소스 });

// axios.post('http://localhost:8080/login', {
//     id: 'asdf',
//     pw: '1234'
//     })
//  .then(res => { 성공 시 처리할 소스 })
//  .catch(err => { 실패 시 처리할 소스 });

// axios.put('http://localhost:8080/login', {
//    id: 'asdf',
//    pw: '1234'
//    }})
//  .then(res => { 성공 시 처리할 소스 })
//  .catch(err => { 실패 시 처리할 소스 });

// axios.delete('http://localhost:8080/login?id=asdf')
//  .then(res => { 성공 시 처리할 소스 })
//  .catch(err => { 실패 시 처리할 소스 });

// axios.delete('http://localhost:8080/login', {
//    data: {
//      id: 'asdf',
//      pw: '1234'
//    }})
//  .then(res => { 성공 시 처리할 소스 })
//  .catch(err => { 실패 시 처리할 소스 });

import axios from "axios";

function AxiosTest() {

    const getKobisData = () => {
        axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20240831')
            .then(res => {
                console.log('비동기 통신 성공!');

                // axios를 통해서 전달받은 전체 데이터 가져오기
                // axois를 통해서 전달되는 데이터는 object 타입으로 전달됨
                // config, data, headers, request, status, statusText의 속성을 가지고 있음
                // 서버가 전달한 실제 데이터는 data 속성에 담겨 있음
                // console.log(res);

                // 전체 데이터 중에서 필요한 데이터만 가져오기
                // 객체 분할 할당 방법을 사용하여 필요한 데이터만 가져옴
                // const { boxOfficeResult } = res.data;
                // const { boxofficeType, dailyBoxOfficeList, showRange } = boxOfficeResult;
                // console.log(boxofficeType);
                // console.log(showRange);

                const { dailyBoxOfficeList } = res.data.boxOfficeResult;
                console.log(dailyBoxOfficeList);

                // for(let i = 0; i < dailyBoxOfficeList.length; i++) {
                //     let boxOfficeList = "";
                //     boxOfficeList += "순위 : " + dailyBoxOfficeList[i].rank + "\n";
                //     boxOfficeList += "영화명 : " + dailyBoxOfficeList[i].movieNm + "\n";
                //     boxOfficeList += "개봉일 : " + dailyBoxOfficeList[i].openDt;
                //     console.log(boxOfficeList);
                // }

                dailyBoxOfficeList.forEach(item => {
                    let boxOfficeList = "";
                    boxOfficeList += "순위 : " + item.rank + "\n";
                    boxOfficeList += "영화명 : " + item.movieNm + "\n";
                    boxOfficeList += "개봉일 : " + item.openDt;
                    console.log(boxOfficeList);
                })
            })
            .catch(err => {
                console.log('비동기 통신 중 오류가 발생했습니다.');
            });
    }

    return (
        <div>
            <button type={'button'} className={'btn btn-primary'} onClick={getKobisData}>클릭 시 데이터 가져오기</button>
        </div>
    );
}

export default AxiosTest;