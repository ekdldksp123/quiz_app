# Hello Quiz

### 2022-02-25
- github action 으로 ci/cd 및 deploy 자동화 구축

### 2022-02-26
- 첫 퀴즈 고르기 화면 완성 (반응형 작업도 조금..)
- 카테고리 당 문제 수 api -> fetch 를 사용해 최대한 빠르게 데이터 가져오기
- 카테고리 & 난이도 별 문제수 검사 
- useRoute로 uri 다음 페이지에 넘김

### 2022-02-28
- gh-pages 브랜치로 재배포

### 2022-03-01
- 첫 화면 문제 개수 input 문제점 fix
- 퀴즈 데이터 디코딩 후 멀티 타입에 따라 렌더링(불린 아직)
- 답 선택시 결과 바로 공개(색깔로 표시) 후 나머지 선택지 readOnly
- 답 선택 후 바로 next 버튼 appear

### 2022-03-02
- next 버튼 클릭시 다음 페이지로 슬라이드
- 문제 다 풀면 result 페이지로 라우팅
- total, right, wrong 데이터 pass
- boolean 유형도 렌더링 완료
- 디코딩 에러 처리 추가 
- localStorage 사용
- 문제 풀이 결과 차트 그리기 -> 커스텀이 맘대로 안됨..

### 2022-03-03
- redux-saga로 타이머 구현 -> 문제 다 풀면 푼 시간 공개
- Chart.js(CDN)으로 정 오답 비율 custom 도넛 차트로 표기
- 다시 풀기 구현(타이머 리셋, 차트 리셋...제일 힘들었따ㅜㅡㅜ)
- 정 오답 카운팅 버그 수정




