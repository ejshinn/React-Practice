import {useLocation, useSearchParams} from "react-router-dom";

function Profile1() {
    const profile = useLocation();

    console.log(`useLocation()으로 가져온 데이터`);

    // pathname : 해당 컴포넌트의 url을 가져옴
    // search : ? 기호 뒤에 있는 모든 쿼리 스트링을 가져옴
    const {pathname, search} = profile;
    console.log(pathname);
    console.log(search);

    // 사용자가 직접 데이터 파싱을 진행해야 함
    let data = search.substring(1);
    data = data.split('&');
    console.log(data);

    const splitData1 = data[0].split('=');
    const splitData2 = data[1].split('=');

    // useSearchParams() 훅 사용 시 파라미터 값을 자동으로 가져옴
    // 가져온 데이터를 출력하려면 get(파라미터명)을 사용하여 출력

    const [params] = useSearchParams();
    console.log('----- useSearchParams()로 가져온 데이터 -----');
    console.log(params);
    console.log(params.get('param1'));
    console.log(params.get('param2'));

    return (
        <div>
            <h1>Profile1 페이지</h1>
            <p>쿼리 스트링을 통해서 데이터를 가져오는 페이지</p>
            <hr/>
            <h4>useLocation() 사용 파라미터1 : {splitData1[1]}</h4>
            <h4>useLocation() 사용 파라미터2 : {splitData2[1]}</h4>
            <hr/>

            <h4>useSearchParams() 사용 파라미터1 : {params.get('param1')}</h4>
            <h4>useSearchParams() 사용 파라미터2 : {params.get('param2')}</h4>
        </div>
    );
}

export default Profile1;