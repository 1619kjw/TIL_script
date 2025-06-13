/* 타이머함수 예제1-알림메세지 자동숨김 */
//회원가입 버튼 클릭 시 join_msg에 '가입축하합니다'메세지 출력되고
const joinBtn = document.querySelector('#join');
const joinMsg = document.querySelector('.join_msg');
console.log(joinBtn,joinMsg);
joinMsg.classList.add('hide'); //초기상태(숨기기)
joinBtn.addEventListener('click',()=>{
    joinMsg.classList.remove('hide');//초기상태해제(보이기)
    joinMsg.textContent = '가입축하합니다';
    //(메세지출력 후) 3초 후 메세지 자동 사라지기
    const hideMsg = setTimeout(()=>{
        joinMsg.classList.add('hide');//다시숨기기
    },3000);
})

/* 타이머함수 예제2-알림메세지 후 다른 페이지로 이동 */
//결제하기 버튼 클릭 시 pay_msg에 '결제완료되었습니다' 메세지 출력되고
const payBtn = document.querySelector('#pay');
const payResetBtn = document.querySelector('#pay_reset');
const payMsg = document.querySelector('.pay_msg');
let payMsgOut;
console.log(payBtn,payMsg);
payMsg.classList.add('hide');//초기 숨기기
payResetBtn.classList.add('hide');//초기 숨기기
payBtn.addEventListener('click',()=>{
    payMsg.classList.remove('hide');//숨기는 클래스 제거로 보이게 하기
    payResetBtn.classList.remove('hide');
    payMsg.textContent = '결제완료되었습니다. 5초 후 광고사이트로 이동합니다.';
    //(메세지 출력 후) 5초 뒤 timer3.html로 이동하기
    payMsgOut = setTimeout(()=>{
        window.location.href = './timer3.html';//광고
    },5000);
})
/* 결제취소버튼 클릭 시 timer3.html 이동X */
payResetBtn.addEventListener('click',()=>{
    clearTimeout(payMsgOut);
    console.log('setTimeout 이동삭제완료');
    payMsg.classList.add('hide');//메세지숨기기
    payResetBtn.classList.add('hide');//결제취소버튼숨기기
})


