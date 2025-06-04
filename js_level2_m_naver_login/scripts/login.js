//main .lang_group 기준 알고리즘
//초기설정 : .lang_open 한국어~중국어 옵션 숨기기
//#lang_select 클릭 시 .lang_open보이기
//.lang_open이 보이는 상태라면 #lang_select 클릭 시 .lang_open 숨기기
//변수생성 -> 이벤트 제작 -> 이벤트 만족 시 실행함수 (중간중간 콘솔 자주 체크)

const langSelect = document.querySelector('#lang_select');
const langOpen = document.querySelector('.lang_open');
console.log(langSelect,langOpen);
langOpen.style.display = 'none'; //초기 숨기기

//이벤트
//참(보이기), 거짓(숨기기) 상태
let openif = false; //초기 거짓(숨겨진)상태
langSelect.addEventListener('click',()=>{
    if(openif == false){
        //langOpen 숨겨진 상태면 보이기
        langOpen.style.display = 'flex';
        openif = true;//상태값 변경
    }else if(openif == true){
        //langOpen 보이는 상태면 숨기기
        langOpen.style.display = 'none';
        openif = false;//상태값 변경
    }
})
//네이버 로그인 에러 메세지 알고리즘

/* 
조건1) 아이디와 비밀번호를 모두 입력하지 않고 로그인 클릭 시
조건1 결과) 아이디 또는 전화번호를 입력해 주세요
조건2) 아이디를 입력하고 비밀번호를 입력하지 않고 로그인 클릭 시
조건2 결과) 비밀번호를 입력해 주세요.
조건3) 아이디, 비밀번호를 모두 입력하고 로그인 클릭 시 정보가 틀렸을 때
조건3 결과) 아이디, 비밀번호 입력정보가 잘못되었습니다. 다시 입력해주세요.
조건4) 조건3 상황에서 로그인실패가 3회 이상일때
조건4 결과) 영수증 퀴즈와 '아이디(로그인 전화번호, 로그인 전용 아이디), 비밀번호 또는 자동입력 방지 문자를 잘못 입력했습니다. 입력하신 내용을 다시 확인해 주세요.'메세지 출력되는 창으로 이동
*/

//조건1) 아이디와 비밀번호를 모두 입력하지 않고 로그인 클릭 시
//조건1 결과) 아이디 또는 전화번호를 입력해 주세요
const userId = document.querySelector('input[name$=id]'); //로그인 입력칸
const userPw = document.querySelector('input[name$=pw]'); //비밀번호 입력칸
const errorMsg = document.querySelector('.error_msg'); //에러메세지 출력
const loginBtn = document.querySelector('#login_btn'); //로그인버튼
console.log(userId, userPw, errorMsg, loginBtn);

loginBtn.addEventListener('click', ()=>{
    /* if(userId.value == '' && userPw.value == ''){
        errorMsg.textContent = '아이디 또는 전화번호를 입력해 주세요';
    }  */
    //삼항조건 활용 조건1
    //조건식 ? 조건식참결과 : 조건식거짓결과
    //조건결과대입변수 = 조건식 ? 조건식참결과 : 조건식거짓결과
    errorMsg.textContent = userId.value == '' && userPw.value == '' ? '아이디 또는 전화번호를 입력해 주세요' : '';
})
