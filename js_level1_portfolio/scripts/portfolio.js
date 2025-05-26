// 프로젝트소개 팝업 알고리즘
// 1. 팝업 숨기기(popup_bg) display:none;
// 2. 썸네일 이미지(a) 클릭 시 팝업 보이기(popup_bg)
// 3. (팝업 실행 기준) 배경(popup_bg)클릭 시 팝업 숨기기(popup_bg)
// 프로젝트 팝업 실행 시 클릭한 대상의 이미지가 출력되는 알고리즘
// 1. 클릭한 대상의 이미지 경로 확인
// 2. 위 경로를 팝업 이미지의 경로에 대입

//알고리즘 기준 반복해야 하는 데이터를 변수로 생성하기
const popupBg =document.querySelector('.popup_bg');
const thumbNailA=document.querySelectorAll('.design a');
console.log(popupBg,thumbNailA);

//1. 팝업 숨기기
popupBg.style.display = 'none'; /* css문법을 js문법으로 바꿔 작성해주기 */

// 2. 썸네일 이미지(a) 클릭 시 팝업 보이기(popup_bg)
//변수로 만든 DOM요소가 여러개일 경우 이벤트를 위해 접근할때는 인덱스를 사용해서 하나씩 개별 접근해야한다.
thumbNailA[0].addEventListener('click',function(){
    console.log(0); //작동테스트
    console.log(this); //이벤트객체자동인식하는지 확인
    // console.log(this.children); //(현재객체의 자식)이미지 태그를 잡음
    console.log(this.children[0].src);
    console.log(popupBg.children[0].children[0].src); //팝업bg의 자식의 자식의 src확인
    popupShow(); //팝업출력함수 호출
    popupBg.children[0].children[0].src = this.children[0].src
});
thumbNailA[1].addEventListener('click',popupShow);
thumbNailA[2].addEventListener('click',popupShow);
function popupShow(){
    return popupBg.style.display = 'flex';
}

// 3. (팝업 실행 기준) 배경(popup_bg)클릭 시 팝업 숨기기(popup_bg)
popupBg.addEventListener('click',popupHide);
function popupHide(){
    return popupBg.style.display = 'none';
}
