// 1. 작은 썸네일 이미지 마우스 올렸을 시 큰 이미지 변경
const thum = document.querySelectorAll('.small a');
// const thum = document.querySelectorAll('.small a img');
const bigThum = document.querySelector('.big img');
console.log(thum, bigThum); //5개 모두 출력
// //콘솔 확인 시 1개의 DOM요소가 아닌 [index]표시된 여러개 DOM요소로 출력될때는 실제 사용 시 요소[index]를 붙여서 사용해야 한다.
// //thum2에 마우스 올렸을 시 big 이미지가 big2로 변경
// thum[0].addEventListener('mouseover',function(){bigThumSrc(1)});
// thum[1].addEventListener('mouseover',function(){bigThumSrc(2)});
// thum[2].addEventListener('mouseover',function(){bigThumSrc(3)});
// thum[3].addEventListener('mouseover',function(){bigThumSrc(4)});
// thum[4].addEventListener('mouseover',function(){bigThumSrc(5)});
// function bigThumSrc(num){
//     // 둘다가능! return bigThum.src = "./images/big"+num+".jpg";
//     return bigThum.src = `./images/big${num}.jpg`;
// }

// 테두리 활성화 추가ver
// 첫번째 썸네일 활성화 디자인
thum[0].style.border = '3px solid #0aa5ff';
thum[0].addEventListener('mouseover', function(){ bigThumSrcBorder(1, this)});
thum[1].addEventListener('mouseover', function(){ bigThumSrcBorder(2, this)});
thum[2].addEventListener('mouseover', function(){ bigThumSrcBorder(3, this)});
thum[3].addEventListener('mouseover', function(){ bigThumSrcBorder(4, this)});
thum[4].addEventListener('mouseover', function(){ bigThumSrcBorder(5, this)});
function bigThumSrcBorder(num, target){
    //사용자가 마우스 올리는 순서를 정의할 수 없기 때문에 전부 초기화 기준으로 설정
    thum[0].style.border = '0'; //none이라고 써도 됨
    thum[1].style.border = '0';
    thum[2].style.border = '0';
    thum[3].style.border = '0';
    thum[4].style.border = '0';
    //현재 마우스 올린 작은썸변수에 테두리 생성(this(현재이벤트대상)활용)
    target.style.border = '3px solid #0aa5ff';
    return bigThum.src = `./images/big${num}.jpg`;
}//bigThum의 Src도 바꾸고 Border도 바꿀 함수

//this
// * 특정 DOM요소 이벤트(click, mouseover 등...) 내에서 작성하는 키워드
// 이벤트 요소가 달라도 this는 이벤트 내에서 해당 요소를 가리키는 통합명칭으로 사용할 수 있기 때문에 쉬운 선언이 가능하다.
// 주의점1) 화살표함수에서는 사용이 안되며 익명함수에서만 사용가능하다.
// DOM.이벤트리스너(이벤트, ()=>{ this }) //X
// DOM.이벤트리스너(이벤트, function(){this}) //O
// 주의점2) 이벤트 내에 호출하는 함수라 해도 함수 내부에 this를 직접적으로 작성해선 안되며 이벤트 익명함수 내에서 작성해야 한다.
// DOM.이벤트리스너(이벤트, 익명함수(){ 함수호출(this) }) //O
// function 호출한함수명(){ this } //X