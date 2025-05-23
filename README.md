# 자바스크립트 공부시작 25/05/12~
* 자바스크립트 관련 파일은 `scripts/` 폴더에 저장하기
## vs code 터미널로 js 실행테스트하기
* 터미널 마지막 폴더 경로가 js 파일이 들어있는 위치인지 확인하기
* `cd 하위폴더명` 또는 `cd..`
* `node 자바스크립트파일명.js`
* (위)nodeJS 이용 자바스크립트 파일 실행 명령어 작성하고 확인하기
(실행 함수가 있어야 결과 테스트 가능)
* `node -v` 노드 설치 확인 명령(nodeJS 설치해야 위 테스트가능)
## 객체, 속성, 함수(메서드), 이벤트에 따른 작성법
* 객체.속성
* 객체.함수()
* **객체** : 자바스크립트에서 제어하려는 대상(보통 데이터를 담은 변수가 객체 대상이 되는 경우가 많음)
* **속성** : 객체가 가진 고유한 속성(객체가 img라면 src, alt가 속성)
* **함수** : 객체를 이용한 자바스크립트의 실행결과, 뒤에 소괄호()가 붙음.
----------------
## 자바스크립트 DOM 지정규칙
* HTML태그의 class, name, id, value 등의 이름 규칙 : 영어소문자_영어소문자 (예) `user_id`
* Javascript의 함수 및 변수 이름 규칙 : Camel 표기법 (예) `userId`
### 변수 등록 시 순서
* `const 의미있는변수명 = document.querySelector('HTML요소 또는 클래스, 아이디, 속성선택자 등')`
* `const userId = document.querySelector('.user_id');` 
* -> html에서 user_id라는 클래스를 찾아서 userId에 저장해라.
* `let liActive = document.querySelector('li.active');` 
* -> li의 클래스가 active일때.(li의 자식이 클래스active X)
* `var pwIO = document.querySelector('input[type*=pass]');` 
* -> input의 type이 pass를 포함하고 있을 때. Input, Output이라 변수명에서 둘다 대문자로 씀.
* `let genderChk = document.querySelector('input[name=gender]');` 
* -> input의 name이 gender와 같을 때.
## a태그 기본 이벤트 동작 취소
* `a` 태그를 클릭이벤트 객체로 사용 시 대상을 터치 또는 클릭하면 화면 세로 스크롤이 최상단으로 올라가는 문제점이 발생한다.
* **해결법** : 이벤트함수 내에 익명함수 및 화살표함수를 작성하고 매개변수에 `e` 작성 후 함수 실행 내에 `e.preventDefault()`를 작성한다.
* (예) `a객체.addEventListener('click',function(e){ e.preventDefault(); })`
* (예) `a객체.addEventListener('click',(e)=>e.preventDefault())`
## 태그(DOM)에 따른 속성 값 읽기/수정/삭제 JS속성
* input 요소일 경우 값 읽기/수정/삭제는 `value` 속성 사용
* input이 아닌 다른 요소일 경우 값 읽기/수정/삭제 `textContent` 또는 `innerHTML` 속성 사용