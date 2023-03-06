Css-in-JS

Styled Components
styled 임포트가 필요함

3rd party

npm 마켓어세 패키지를 가져옴
yarn add styled-components

<!-- jsx 파일 기본 코드 생성 명령어
rfce -->

조건부 스타일링
props로 css 일부를 부모>자식에게 전달

switch문

GlobalStyles
Sass
css reset : default style 제거
font-family
human error

<!-- <span>태그 -->

React Hooks
-useState : 가장 기본적인 hook, 함수형 컴포넌트 내에서 가변적인 상태를 갖게 함
-useEffect
의존성 배열(dependency array)
화면이 렌더링 될 때 어떤 작업을 하고 싶다.
-useRef

index.js에 StrictMode 제거하면,
console.log 한줄씩만 뜸

current
함수형 업데이트

1-5 강의 좀 더 들어보기

입문주차에 배운 업데이트는 배치성으로 처리됨 > 한꺼번 변경된 내용들을 모아서 한번만 반영

렌더링이 잦다 > 성능 이슈
리액트의 배치 업데이트

props drilling의 대표적인 문제점 : props가 어디서 내려왔는지 파악하기 어려움 = 오류 찾기 어려움 = 대체 늦음

context API : 전역 데이터 관리

- createContext
- Consumer
- Provider

fontWeight

useContext

1-6 강의 어지러움 더 들어보기

@@@.Provider 제공하다

★메모이제이션★

리-렌더링의 발생 조건

memo(React.memo) > 부모 컴포넌트가 리-렌더링 시 자식 컴포넌트의 변화가 없음에도 리-렌더링 되는 상황을 막아주는 도구
컴포넌트를 메모리에 저장함(캐싱) 부모 컴포넌트의 props가 바뀌지 않는 이상 리-렌더링이 이루어지지 않도록 함 이것이 '메모이제이션'

useCallback > 인자로 들어오는 함수 자체를 메모이제이션 한다. 의존성 배열 필요

useMemo : 함수가 리턴하는 값or 값 자체를 기억

// 스스로 정리
useState : 내가 가지고 있는 다이나믹한 데이터를 화면에 반영시키고 싶을 때
useEffect :
userRef :
useCallback :
useMemo :

DOM = 세션 + 돔을 깨우치다(책)

컴포넌트 디자인패턴 - 아토믹패턴, 디자인 패턴을 쓸 때,
그게 왜 좋은지 (왜 사용했는지)를 설명할 수 있어야 한다

<nav> 태그

DOM(Document Object Model)은 엘리먼트(element)를 트리 형태로 표현한 것(Dom Tree)

API = HTML 요소에 접근해서 수정할 수 있는 함수

<form> 태그

가상 DOM(Virtual Dom)은 실제 DOM과 구조가 완벽하게 동일한 복사본 형태
DOM : 돔 요소를 족작
가상 DOM : 객체 상태로 메모리에 저장 더 빠르게 조작 가능

클릭 한 번으로 엘리먼트가 5개 바뀌어야 한다면,
DOM : 5번의 리-렌더링 필요
가상DOM : Batch Update로 한 번의 갱신만 필요
가장 오래 걸리는 painting 작업이 줄어듬

Redux(중앙 state 관리소) > 접근&제어 가능(Redux는 패키지임)

local state
global state

<1-13>

yarn add redux
yarn add react-redux
= yarn add redux react-redux

src 하위 redux 폴더 그 하위 config 생성 그 아래 configStore.js 생성(중앙 state 관리소)
redux 하위에 modules 폴더 생성

redux : 리덕스 관련 코드를 모두 몰아넣음
config : 리덕스 설정 관련 파일 전부
configStore : 중앙 state 관리소 > 설정코드(.js)
modules : 중앙 state 관리소의 관리하는 state의 그룹

이해하기가 어렵다면 과감하게 받아들이자 방법만 익히기

중앙 데이터 관리소(store) 설정 방법
import createStore
import combineReducer

const rootReducer = combineReducers({
// (reducer들을 모아서 한개로 만든 기본 reducer)
객체 형태의 변수가 들어옴
});

const store = createStore(rootReducer);
// 스토어 생성

export default store;

import store
// configStore 에서 가져와야 함
// './redux/config/configStore';

index.js > render 아래
<Provider store={store}>
<App />
<Provider>
// 생성한 스토어를 기반으로 지배권을 행사 App컴포넌트 하부
// 즉 App컴포넌트 전체에서 store 사용 가능

해당 과정까지 마치면 기본 셋팅 완료

<1-14>

초기 상태값 initialState(이렇게 많이 지음)

// 리듀서 : state에 변화를 일으키는 함수(state를 action에 type에 따라 변경하는 함수)
// input : state와 action 를 인자로 받음 redux 하면서 계속 나올 예정
const counter = (state = initialState, action) => {

}

// action = state를 어떻게 할 것인지 정하는 객체

useSelector

<1-15>

dispatch

<1-16>
휴먼에러를 방지하고자 타이핑 내용을 변수에 할당해 관리
action creator

<1-17>
payload : 전달되는 어떠한 실체
payload 만큼을 타입에 맞게 처리한다
action 객체를 store로 dispatch가 던진다

<1-18>
ducks 패턴

1. Reducer 함수를 export default 한다.
2. Action creator 함수들을 export 한다.

<1-19>
react router dom

yarn add react-router-dom

import {BrowserRouter, Route, Routes}
<BrowserRouter>
<Routes>
<Route>
</Routse>
</BrowserRouter>

위 형태로 감싸는 것이 기본(== 보일러 플레이트)

외우자!

App.jsx에 불러올 때 경로를 잘 확인하기(react 제공이 아닌 만든 것을 가져와야 함)

useNavigate 페이지 전환하는 react router dome hook 활용도 높음

useLocation

Link : hook은 아님 꼭 알아야할 API임 / a태그를 대체함 / useNavigate와 유사하지만 목적이 다르다

useParams

<1-20>
<1-19>는 정적 라우팅

동적라우팅 Dynamic Route

&nbsp;

파라미터를 사용한다 :value
이때 useParams 를 사용한다

<1-21> > 정신이 나가버림
다시 돌아온 동기, 비동기

Promise

ES6 then~catch
ES7 async / await

<1-22> > 정신을 잃음
REST API

<1-23> > 혼수 상태
JSON : JS 객체 문법에 토대를 둔 문자 기반 데이터 교환 방식
JSON은 ""만 허용됨

stringify() : JS 객체 > JSON 문자열로 변환(스트링 화를 시킨다.)

parse() : JSON 문자열을 JS 객체로 변환

JSON placeholder : 프론트 엔드를 테스트 해보기 위한 가짜서버

toolkit

React 쿼리
