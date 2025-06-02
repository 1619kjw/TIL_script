/* 탄생화와 꽃말 JS 과제 자바스크립트 */

//test
console.log(birthday_flower[0].month); //1
console.log(birthday_flower[0].flower); //수선화
console.log(birthday_flower[0].content); //자기애, 자존심, 외로움

//알고리즘 : 월을 입력하고 '탄생화와 꽃말은?'버튼 클릭 시, 각 달에 해당하는 결과 출력

//변수
const inputNum = document.querySelector('input[name*=month]');
const resultBtn = document.querySelector('#result_btn');//'탄생화와 꽃말은?'버튼
const resultContent = document.querySelector('#result');//결과화면에 대한 변수
console.log(inputNum, resultBtn, resultContent);

//이벤트
resultBtn.addEventListener('click', userMonth);
//함수
function userMonth(){//결과화면 보이기
    //방법1. and 논리연산자
    if(inputNum.value >= 1 && inputNum.value <= 12){
        //1~12 사이에서 적용된다. 범위를 만드는 논리연산. AND연산자
        resultContent.textContent= `${birthday_flower[inputNum.value-1].month}월의 탄생화는 ${birthday_flower[inputNum.value-1].flower}, 꽃말은 ${birthday_flower[inputNum.value-1].content}입니다.`;
    }
    //방법2. or 논리연산자
    // if(inputNum.value == 1||2||3||4||5||6||7||8||9||10||11||12){
    //     //1~12 중에 하나면 참이다. OR연산자
    //     resultContent.textContent= `${birthday_flower[inputNum.value-1].month}월의 탄생화는 ${birthday_flower[inputNum.value-1].flower}, 꽃말은 ${birthday_flower[inputNum.value-1].content}입니다.`;
    // }
    //방법3. 다 작성하기
    // if(inputNum.value == 1){
    //     resultContent.textContent= `${birthday_flower[inputNum.value-1].month}월의 탄생화는 ${birthday_flower[inputNum.value-1].flower}, 꽃말은 ${birthday_flower[inputNum.value-1].content}입니다.`
    // }
    // if(inputNum.value == 2){
    //     resultContent.textContent= `${birthday_flower[inputNum.value-1].month}월의 탄생화는 ${birthday_flower[inputNum.value-1].flower}, 꽃말은 ${birthday_flower[inputNum.value-1].content}입니다.`
    // }
    // if(inputNum.value == 3){
    //     resultContent.textContent= `${birthday_flower[inputNum.value-1].month}월의 탄생화는 ${birthday_flower[inputNum.value-1].flower}, 꽃말은 ${birthday_flower[inputNum.value-1].content}입니다.`
    // }
    // if(inputNum.value == 4){
    //     resultContent.textContent= `${birthday_flower[inputNum.value-1].month}월의 탄생화는 ${birthday_flower[inputNum.value-1].flower}, 꽃말은 ${birthday_flower[inputNum.value-1].content}입니다.`
    // }
    // if(inputNum.value == 5){
    //     resultContent.textContent= `${birthday_flower[inputNum.value-1].month}월의 탄생화는 ${birthday_flower[inputNum.value-1].flower}, 꽃말은 ${birthday_flower[inputNum.value-1].content}입니다.`
    // }
    // if(inputNum.value == 6){
    //     resultContent.textContent= `${birthday_flower[inputNum.value-1].month}월의 탄생화는 ${birthday_flower[inputNum.value-1].flower}, 꽃말은 ${birthday_flower[inputNum.value-1].content}입니다.`
    // }
    // if(inputNum.value == 7){
    //     resultContent.textContent= `${birthday_flower[inputNum.value-1].month}월의 탄생화는 ${birthday_flower[inputNum.value-1].flower}, 꽃말은 ${birthday_flower[inputNum.value-1].content}입니다.`
    // }
    // if(inputNum.value == 8){
    //     resultContent.textContent= `${birthday_flower[inputNum.value-1].month}월의 탄생화는 ${birthday_flower[inputNum.value-1].flower}, 꽃말은 ${birthday_flower[inputNum.value-1].content}입니다.`
    // }
    // if(inputNum.value == 9){
    //     resultContent.textContent= `${birthday_flower[inputNum.value-1].month}월의 탄생화는 ${birthday_flower[inputNum.value-1].flower}, 꽃말은 ${birthday_flower[inputNum.value-1].content}입니다.`
    // }
    // if(inputNum.value == 10){
    //     resultContent.textContent= `${birthday_flower[inputNum.value-1].month}월의 탄생화는 ${birthday_flower[inputNum.value-1].flower}, 꽃말은 ${birthday_flower[inputNum.value-1].content}입니다.`
    // }
    // if(inputNum.value == 11){
    //     resultContent.textContent= `${birthday_flower[inputNum.value-1].month}월의 탄생화는 ${birthday_flower[inputNum.value-1].flower}, 꽃말은 ${birthday_flower[inputNum.value-1].content}입니다.`
    // }
    // if(inputNum.value == 12){
    //     resultContent.textContent= `${birthday_flower[inputNum.value-1].month}월의 탄생화는 ${birthday_flower[inputNum.value-1].flower}, 꽃말은 ${birthday_flower[inputNum.value-1].content}입니다.`
    // }
    resultContent.style.display = 'block';
}
resultContent.style.display = 'none';//초기값 : 결과화면 숨기기

