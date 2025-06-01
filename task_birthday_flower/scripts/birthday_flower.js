/* 탄생화와 꽃말 JS 과제 자바스크립트 */
const birthday_flower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손, 양보',
    },{
        month:3,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:4,
        flower:'스위트피',
        content:'추억, 즐거움'
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함'
    },{
        month:6,
        flower:'백합',
        content:'순결'
    },{
        month:7,
        flower:'미나리아재비',
        content:'아름다움, 인격'
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀, 상상, 견고함'
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑'
    },{
        month:10,
        flower:'금잔화',
        content:'실망, 비애'
    },{
        month:11,
        flower:'국화',
        content:'성실, 진실'
    },{
        month:12,
        flower:'포인세티아',
        content:'축하, 감사'
    }
]
console.log(birthday_flower);
console.log(birthday_flower[0].flower);//수선화

//월을 입력하고 '탄생화와 꽃말은?'버튼 클릭 시, 각 달에 해당하는 결과 출력

//초기 설정
const inputNum = document.querySelector('input[name*=month]');
console.log(inputNum);
let num = 1; //초기 월
inputNum.value = num;

//'탄생화와 꽃말은?'버튼에 대한 변수
const resultBtn = document.querySelector('#result_btn');
console.log(resultBtn);
resultBtn.addEventListener('click', resultFunc);
function resultFunc(){//결과화면 보이기
    resultContent.style.display = 'block';
    num;
    inputNum.value = num;
    return resultContent.textContent= `${birthday_flower[num].month}월의 탄생화는 ${birthday_flower[num].flower}, 꽃말은 ${birthday_flower[num].content}입니다.`;
}
//결과화면에 대한 변수
const resultContent = document.querySelector('#result');
console.log(resultContent);
resultContent.style.display = 'none';//초기값 : 결과화면 숨기기
