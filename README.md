# React_Practice

### 1. es6
* 템플릿 문자열 사용하기<br>
* 전개연산자 사용하기<br>
* 객체확장표현식 사용하기<br>
* 구조분해할당 사용하기<br>
* 가변 변수, 불변 변수 (var, let, const의 차이점)<br>
* class 사용하기<br>
* 화살표 함수 사용하기<br>


### 2. promiseTest, react1
* 자바스크립트의 비동기 방식 실행
* 프로미스를 사용한 비동기 방식 실행
* 모듈 사용하기
* 배열 함수 forEach, map
* 리액트 프로젝트 생성하기
* 리액트 컴포넌트 사용하기


### 3. react2
* JSX 문법
* 엘리먼트 렌더링
* props란?
* 컴포넌트란?
* 컴포넌트 합성, 컴포넌트 추출


### 4. react3
* state란
*  props와 state의 차이
*  컴포넌트의 생명주기와 생명주기 함수
*  react hooks란, useState 사용하기


### 5. react4
* useEffect 사용하기
* useMemo 사용하기
* useRef 사용하기
* 커스텀 훅 사용하기


### 6. react5
* 이벤트 사용하기 (매개변수 사용)
* 조건부 렌더링, 엘리먼트 변수, 인라인 조건식, 삼항연산자, 렌더링 막기
* 연습문제
* 리스트와 키
* form 사용하기 (text, textarea, select, checkbox, 문제 풀이)


### 7. react6
* state 공유하기
* 상태 끌어올리기 (자식 컴포넌트의 데이터를 부모 컴포넌트로 전달)
* 자식 컴포넌트 호출 시 html 태그 전달하기
* 자식 컴포넌트 호출 시 props의 데이터로 다른 컴포넌트 전달하기
* 컴포넌트 합성 통합 사용
* 기존 사이트를 클론코딩하기


### 8. react7, RestApiServer, BoardApiServer
* Axios 사용하기
* Axios로 영화진흥원 OpenAPI 사용하기
* Axios로 스프링부트 RestAPI 사용하기(GET, POST, PUT, DELETE), CORS 오류 해결하기 (리액트 프록시 서버, 스프링 서버 CrossOrigin, 스프링 서버 WebMvcConfigurer 설정)
* Axios로 RestAPI 게시판 만들기 (FRONT : 리액트, BACK : 스프링 서버)


### 9. react8
* 중첩 컴포넌트를 통한 데이터 전달
* Context API를 통한 데이터 전달
* Context 파일을 import하여 Provider로 데이터 전달
* zustand
* react-router-dom을 이용한 페이지 라우팅 및 URL 파라미터 처리


### 10. backend
* 리액트 프로젝트를 스프링부트 프로젝트에 포함하기


### 11. jwtReact
* JWT를 사용한 인증 및 권한 관리 처리
* 회원가입, 로그인, 로그아웃, 게시판
<br>

###### (소플의 처음 만난 리액트, 2023)을 학습하고 개인 학습용으로 정리한 내용입니다.


---
<br>

### ※ 참고사항
- IntelliJ로 리액트 프로젝트 생성 후 사용 시 프로젝트 폴더가 보이지 않는 현상이 발생할 수 있음
- 보통 github에 업로드 후 다운받아 사용할 때 해당 현상이 발생함
- IntelliJ에서 사용하는 프로젝트 파일('프로젝트명.iml', 'modules.xml')이 없어서 발생하는 현상임
  
** 해결방법 **
- '프로젝트명.iml' 파일을 프로젝트 폴더나 프로젝트 폴더 밖에 생성하고 아래의 코드를 입력
- 프로젝트명은 주로 폴더명과 같으니 폴더명을 사용
```프로젝트명.iml
<?xml version="1.0" encoding="UTF-8"?>
<module type="WEB_MODULE" version="4">
  <component name="NewModuleRootManager" inherit-compiler-output="true">
    <exclude-output />
    <content url="file://$MODULE_DIR$/프로젝트명" />
    <orderEntry type="sourceFolder" forTests="false" />
  </component>
</module>
```
  
- 'modules.xml' 파일을 프로젝트 폴더의 '.idea' 폴더 안에 생성하고 아래의 코드를 입력
- iml 파일의 위치를 원하는 위치로 설정
```modules.xml
<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="ProjectModuleManager">
    <modules>
      <module fileurl="file://$PROJECT_DIR$/../프로젝트명.iml" filepath="$PROJECT_DIR$/../프로젝트명.iml" />
    </modules>
  </component>
</project>
```
