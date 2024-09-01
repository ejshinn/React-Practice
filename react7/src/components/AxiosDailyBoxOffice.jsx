// AxiosDailyBoxOffice.jsx

// 문제 1) 영화진흥원 openAPI 중 일별 박스오피스 정보를 가져와서 화면에 표로 출력하는 컴포넌트를 작성하세요
// axios를 사용하여 데이터 통신
// state를 사용하여 데이터 저장

import axios from "axios";
import {useState} from "react";

function AxiosDailyBoxOffice() {
    // state 선언, 초깃값은 빈 배열
    const [boxOfficeList, setBoxOfficeList] = useState([]);

    // 이벤트 처리 함수 선언
    const getDailyBoxOffice = () => {
        axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20240827')
            .then(res => {
                // 서버에서 전달한 데이터를 단계적으로 확인하여 원하는 데이터를 가져옴
                // const {data} = res;
                // const {boxOfficeResult} = data;
                // const {dailyBoxOfficeList} = boxOfficeResult;

                // 한 번에 가져오기
                const boxOfficeList = res.data.boxOfficeResult.dailyBoxOfficeList;

                // state로 관리하고 있는 boxOfficeList 배열에 데이터 저장, 화면 업데이트
                setBoxOfficeList(boxOfficeList);
            })
            .catch(err => {
                console.log(err);
                alert('통신 중 오류가 발생했습니다.');
            });
    };

    return (
        <div className={'mt-3'}>
            <div className={'row'}>
                <div className={'col-sm mx-auto'}>
                    <table className={'table table-hover table-striped'}>
                        <colgroup>
                            <col width={'10%'}/>
                            <col width={'40%'}/>
                            <col width={'15%'}/>
                            <col width={'20%'}/>
                            <col width={'15%'}/>
                        </colgroup>
                        <thead>
                        <tr>
                            <th>순위</th>
                            <th>제목</th>
                            <th>개봉일</th>
                            <th>당일 관람객</th>
                            <th>누적 관람객</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            // state에 저장된 데이터를 map() 함수를 사용하여 출력
                            // 컴포넌트가 처음 렌더링될 경우에는 boxOfficeList 배열이 빈 배열이기 때문에 화면에 출력되는 내용이 없음
                            boxOfficeList.length === 0
                                ? (
                                    <tr>
                                        <td colSpan={5} className={'text-center'}>조회된 내용이 없습니다.</td>
                                    </tr>
                                )
                                : (
                                    boxOfficeList.map(item => {
                                        return (
                                            <tr key={item.rnum}>
                                                {/* 생성된 요소를 구분하기 위해서 key 속성을 사용 */}
                                                <td>{item.rank}</td>
                                                <td>{item.movieNm}</td>
                                                <td>{item.openDt}</td>
                                                <td>{item.audiCnt}</td>
                                                <td>{item.audiAcc}</td>
                                            </tr>
                                        )
                                    })
                                )
                        }
                        </tbody>
                    </table>

                    <div className={'mt-3 d-flex justify-content-end'}>
                        <button type={'button'} className={'btn btn-primary'} onClick={getDailyBoxOffice}>일일 영화 순위 조회</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AxiosDailyBoxOffice;