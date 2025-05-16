//자바스크립트 내장함수
//log(), typeof() 등
//자바스크립트 사용자정의 함수
//function 함수명(){재사용문법}
//기본 속성과 함수 작성 문법
//객체.속성;
//객체.함수();  ex) console.log
// window객체는  최상위객체로 생략가능하다.
// const msg1 = window.alert(`이 웹페이지는 포트폴리오입니다.`)
// const msg2 = window.prompt(`1+1은?`)
//prompt에서 사용자가 입력한 값이 최종 변수에 대입된다.
//prompt에서 값을 적지 않으면 null(빈값)이 출력된다.
// console.log(msg2);
// console.log(typeof msg2); //prompt값은 문자열로 인식한다.
//==============사용자 정의 함수
// func1();//함수밖이면 생성 위에서 호출도 가능!
function func1(){
    console.log(`반복내용`)
    console.log(`1234`)
}
//함수는 생성과 호출이 별개로 취급된다.
//생성만으로는 실행결과를 볼 수 없고 반드시 함수밖에서 호출을 별도로 해야한다!
// func1();//호출은 함수밖에서!
// func1();//호출 개수는 프로그래밍 실행 개수만큼 제한없음
function func2(){//생성
    let a = 10; //함수 내 변수 생성 가능(지역변수)
    let b = a++;
    console.log(a+b);
} //생성 함수 종료 위치
func2(); //호출