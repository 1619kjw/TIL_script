//데스크탑 메뉴 복제 -> 모바일 메뉴 붙여넣기
const mNavOpen = document.querySelector('.m_nav_open'); //붙여넣을 위치
const gnb = document.querySelector('.gnb'); //복제할 대상(nav또는gnb둘다가능)
const gnbClone = gnb.cloneNode(true); //자식자손포함해서 복제
console.log(gnb, mNavOpen, gnbClone);
mNavOpen.appendChild(gnbClone); //붙여넣기

//데스크탑 nav-lnb 숨기기
//모바일 m_nav_wrap 숨기기
const navLnb = document.querySelectorAll('nav .lnb');//모바일 lnb안잡히고 데스크탑만 잡히게 nav부모표시
const mNavWrap = document.querySelector('.m_nav_wrap');
console.log(navLnb, mNavWrap);
//반복문으로 모든 lnb숨기기
//navLnb 5개이고 5번 똑같은 값 반복해서 작성하지 않으려면 반복문 사용
//navLnb 5개니까 0,1,2,3,4 인덱스 생각하고 0으로 시작해서 4까지 커지는 반복문 제작
for (let i=0; i<=4; i++){
    navLnb[i].style.display = 'none';
}
// mNavWrap.style.display = 'none';//1개 DOM으로 반복문 없이 바로 사용
mNavWrap.style.overflow = 'hidden';
mNavWrap.style.height = '0';


//마우스 올렸을 때 lnb(navLnb), lnb_bg 보이기
const nav = document.querySelector('nav');
const lnbBg = document.querySelector('.lnb_bg');
console.log(nav, lnbBg);
lnbBg.style.display = 'none';//마우스 이벤트 전 숨기기
nav.addEventListener('mouseover', ()=>{
    lnbBg.style.display = 'block';
    // navLnb.style.display = 'block'; //다수를 1개방식으로 작성 시 에러
    for(let i=0; i<navLnb.length; i++){
        navLnb[i].style.display = 'block';
    }
});
//nav 마우스를 나가면 lnb(navLnb), lnb_bg 숨기기
nav.addEventListener('mouseout', ()=>{
    lnbBg.style.display = 'none';
    for (let i=0; i<navLnb.length; i++){
        navLnb[i].style.display = 'none';
    }
})

//모바일 메뉴 클릭 시 m_nav_wrap(mNavWrap) 보이기
const mNav = document.querySelector('.m_nav'); //모바일메뉴
const mNavClose = document.querySelector('.m_nav_wrap .close');
//(위) 태그 중에서 그나마 알만한 태그를 부모에 써줌
console.log(mNav, mNavClose);

mNavWrap.style.transition = 'height 0.3s linear'; //나올때 부드럽게 나올려면 이런걸 써줄수있다
mNav.addEventListener('click', ()=>{
    // mNavWrap.style.display = 'block';
    mNavWrap.style.height = '500px';
})
//X클릭하면 m_nav_wrap 숨기기
mNavClose.addEventListener('click', ()=>{
    // mNavWrap.style.display = 'none';
    mNavWrap.style.height = 0;
})