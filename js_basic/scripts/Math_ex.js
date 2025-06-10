//반려동물 생년월일 선택하고 계산버튼 누를 시, 경과날짜/경과시간/현재나이 표시되기
const birthDate = document.querySelector('#birthdate');
const birthBtn = document.querySelector('#birth_btn');
const resultDate = document.querySelector('.date em');
const resultTime = document.querySelector('.time em');
const resultAge = document.querySelector('.age em');
//반려동물 이름 입력시 결과 화면에 표시되기
const petName = document.querySelector('#pet_name');
const resultTotal = document.querySelector('.result span');
console.log(birthDate,birthBtn,resultDate,resultTime,resultAge,petName,resultTotal);

birthBtn.addEventListener('click',birthFunc);
function birthFunc(){
    // console.log(new Date(birthDate.value));
    // console.log(new Date());
    const birth = new Date(birthDate.value);
    const today = new Date();
    console.log(birth,today);
    //오늘날짜 - 생년월일
    const birthToday = today.getTime() - birth.getTime();
    console.log(birthToday);
    //나이 계산식
    //today.getFullYear() - birth.getFullYear()
    const age = today.getFullYear() - birth.getFullYear();
    //흐른날짜, 흐른시간, 나이
    const dateFlow = Math.floor(birthToday / (1000*60*60*24));
    const timeFlow = Math.floor(birthToday / (1000*60*60));
    const ageFlow = Math.floor(age);
    //계산 결과 출력
    resultDate.textContent = dateFlow;
    resultTime.textContent = timeFlow;
    resultAge.textContent = ageFlow;
    //최종 결과 문장 출력
    resultTotal.innerHTML = `${petName.value}가 세상에 태어난지 ${dateFlow}일, ${timeFlow}시간째!<br>${ageFlow}살 ${petName.value}를 앞으로도 아껴주세요♥`;
}
