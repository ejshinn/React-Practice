// promise.js

// 프로미스 : 자바스크립트에서 비동기 함수의 동기 방식 처리를 위해서 제공하는 객체
// 자바스크립트는 기본적으로 싱글 스레드 방식으로 프로그램을 처리하고 있음
// 자바스크립트는 비동기 방식으로 프로그램을 처리하고 있음
// 비동기 방식으로 프로그램을 실행 중 반드시 동기 방식으로 프로그램의 실행이 필요할 경우 callback 함수를 사용하여 동기 방식처럼 처리함
// callback을 여러 번 사용하게 될 경우 프로그램의 복잡도가 급상승함
// 이러한 콜백 지옥을 처리하기 위해서 ES6에서 프로미스를 추가함


// 프로미스는 비동기 처리를 위해서 3가지 상태를 제공함
    // Pending(대기) : 비동기 처리 로직이 완료되지 않은 상태
    // Fulfilled(실행) : 비동기 처리가 완료되어 프로미스가 결괏값에 반환한 상태
    // Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태
// 프로미스는 상태에 따른 실행 함수 4가지를 제공함
    // resolve(매개변수) : 프로미스 객체 생성 시 콜백 함수의 매개변수로 추가하는 첫 번째 함수, 프로미스의 상태가 Fulfilled일 경우 호출할 수 있음
    // reject(매개변수) : 프로미스 객체 생성 시 콜백 함수의 매개변수로 추가하는 두 번째 함수, 프로미스의 상태가 Rejected일 경우 호출할 수 있음
    // then(콜백함수) : 프로미스에서 resolve()를 실행했을 경우 프로미스 객체 외부에서 자동으로 실행되는 함수
    // catch(콜백함수) : 프로미스에서 reject()를 실행했을 경우 프로미스 객체 외부에서 자동으로 실행되는 함수

    // 사용법 : 
    // 선언 : 
    // function 프로미스를 사용할 함수명(매개변수) {
    //     return new Promise(function(resolve, reject) {
    //         비동기 방식 실행 소스
    //         비동기 방식 실행 결과에 따라 resolve(), reject() 실행
    //     });
    // }

    // 실행 : 
    // 프로미스를 사용한 함수명().
    // .then(function(매개변수) {
    //     성공 시 실행할 소스코드...    
    // })
    // .catch(function(매개변수) {
    //     실패 시 실행할 소스코드...
    // });


    // async/await : 자바스크립트 비동기 처리 패턴 중 최신 방법으로 콜백 함수와 프로미스의 단점을 보완한 방식
    // 사용법 :
    // async function 비동기처리함수명(매개변수) {
    //     let 변수 = await 비동기처리소스코드;
    // }

    // 실행 :
    // 비동기처리함수명();

// 비동기 방식으로 동작되는 함수
function getData() {
    return new Promise(function(resolve, reject) {
        const data = 100;

        resolve(data);
    });
}

getData()
.then(function(data) {
    console.log(`프로미스 사용 반환값 : ${data}`);
})
.catch(function(err) {
    console.log(`프로미스 사용 오류 시 출력 메시지 : ${err}`);
});


function getData2() {
    return new Promise(function(resolve, reject) {

        $.ajax({
            url: "http://localhost:8080/async/data1",
            type: "get",
            success: function(data) {
                resolve(data);
            },
            error: function() {
                reject("ajax 통신 실패");
            }
        });
    });
}


getData2()
    .then(function(data) {
        console.log("데이터 통신 성공");
        console.log(`가져온 데이터 : ${data}`);
    })
    .catch(function(err) {
        console.log("데이터 통신 실패");
        console.log(err);
    });