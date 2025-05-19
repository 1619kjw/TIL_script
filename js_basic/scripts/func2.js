/* func2.js */
let b = 20; //전역변수(블록{}밖)
let c = 30; //전역변수(블록{}밖)
function test(){//블록선언(여기부터 지역스코프 시작)
    let a = 10; //지역변수(블록{}안)
    console.log(a+b);
}//블록종료(지역 종료)
test();//함수호출(함수밖에서)
/* console.log(a); */ //지역변수는 전역에서 호출하면 에러
//console.log(a+b); //위와 동일 에러
console.log(b+c); //전역변수기 때문에 전역스코프 위치 실행 가능
console.log(`--------------------`)
let d = 5; //전역변수
let e = 15; //전역변수
let f; //전역변수 생성(값 선언 안된 상태 undefined)
let g; //전역변수 생성(값 선언 안된 상태 undefined)
scopeTest(); //호출(함수 실행)
console.log(f); //호출 후 f의 결과를 실행하는 함수기 때문에 25가 실행된다.
// 함수 대기상태는 절대 실행되지 않는다. 호출을 해야만 실행된다!
function scopeTest(){//함수 호출 전 *대기상태*의 함수 생성구조
    f = 25; //지역변수
    g = 35;  //지역변수
    console.log(d+f); //OK 5+25
    console.log(e+g); //OK 15+35
}
console.log(g+d); //40
console.log(d+e); //O 5+15
console.log(`-------------`);
let x = 1; //전역변수
let y;//전역변수.(생성을 바깥으로빼고 값을 안쪽에 남겨서, y가 func1,2에 써지도록 만듦.y를 지역변수->전역변수로 바꿈)
function func1(){ //함수 대기 상태 func1
    y = 5;// 전역변수에 값 대입
    console.log(x+y); //x는 전역이고 y는 안에 있어서 에러 안남
}
function func2(){ //함수 대기 상태 func2
    let z = 10;//지역변수 생성과 값 대입
    func1(); //func2함수대기 안 func1 함수 호출(func2대기상태로 실행되지 않음)
    // 출력값:6. (5를 받은 func1을 호출하고, y에 이어서, 그걸 또 더하기로 사용하겠다)
    console.log(x+y+z);
}
func2();//func2 함수 호출(func2 안 func1도 함께 절차에 맞게 실행) 출력값 16. 두번째 함수의 대기 상태니까, 호출해야 볼 수 있다.
console.log(`----------------헨젤과 그레텔 알고리즘`)
function storyFunc1(){//대기 상태
    let person = ['헨젤','그레텔'];//2명이니까 대괄호
    let src = '조약돌';//길찾기 재료
    //헨젤과 그레텔이 조약돌을 이용해서 집을 찾아갔습니다.
    console.log(`${person[0]}과 ${person[1]}이 ${src}을 이용해서 집을 찾아갔습니다.`);
}
function storyFunc2(){//대기 상태
    let person = ['헨젤','그레텔'];//2명이니까 대괄호
    let src = '빵부스러기';//길찾기 재료
    //헨젤과 그레텔이 빵부스러기를 이용해서 집을 찾아갔습니다.
    console.log(`${person[0]}과 ${person[1]}이 ${src}를 이용해서 집을 찾아갔습니다.`);
}
storyFunc1();//함수 호출
storyFunc2();//함수 호출
console.log(`----------------헨젤과 그레텔 알고리즘-매개변수`)
function storyFunc(src){//대기 상태
    let person = ['헨젤','그레텔'];//2명이니까 대괄호
    //let src = '빵부스러기';//길찾기 재료
    //헨젤과 그레텔이 조약돌를(을) 이용해서 집을 찾아갔습니다.
    //헨젤과 그레텔이 빵부스러기를(을) 이용해서 집을 찾아갔습니다.
    console.log(`${person[0]}과 ${person[1]}이 ${src}를(을) 이용해서 집을 찾아갔습니다.`);
}
storyFunc('조약돌');
storyFunc('빵부스러기');
console.log(`----------------커피 레시피(기본값 포함)`)
//function coffeeFunc1(){} 함수를 생성한다. 실행결과가 항상 같으므로 매개변수는 선언하지 않는다.
//function coffeeFunc1(data1){} 함수를 생성한다. 결과 실행 시 매변 달라지는 데이터가 1개 있기 때문에 매개변수를 1개 생성한다.
//function coffeeFunc1(data1, data2){} 함수를 생성한다. 결과 실행 시 매번 달라지는 데이터가 2개 있기 때문에 매개변수를 2개 생성한다.
//function coffeeFunc1(data1){}
//coffeeFunc1(10);
//(위)프로그래밍해석 : 함수를 생성 후 달라지는 데이터1개에 맞춘 매개변수1개 생성완료. 이후 함수를 호출하고 매개변수에 대입할 10값 입력.
//function coffeeFunc1(data1){ 실행함수+매개변수data1활용 }
//coffeeFunc1(10);
//매개변수를 생성하고 매개변수에 값을 대입했다면 반드시 함수 내부에 매개변수를 활용한 결과식을 만들어야 한다.
//매개변수 사용 시 호출할 때 매개변수에 전달할 대입값을 작성안해도 함수가 실행되게 하고 싶다면 매개변수 생성 시 기본값을 함께 작성해야 합니다. function 함수명(매개변수=기본값){}
function coffeeFunc1(data1=1, data2=0.5){
    let water = data1+'컵 물을 채운다.';
    let espresso = `${data2}샷 에스프레소를 넣는다.`;
    console.log(water, espresso);
}
coffeeFunc1(2, 1);//호출
coffeeFunc1(3, 0.5);
coffeeFunc1();//요청을 안해서 기본값으로 나옴.
//================커피주문 알고리즘(고객입장)
console.log(`----------------카페주문 알고리즘`)
function coffeeKiosk(menu, num=1){//구매 시 기본값은 1개
    const msg = '잔 주문완료되었습니다.'//바뀌지 않는 문구라 const로 작성.
    console.log(menu, num, msg);
}
coffeeKiosk('카페라떼');//기본값이라 두번째 매개변수 생략
coffeeKiosk('아메리카노', 2);//기본값이 아니라 매개변수 모두 작성
coffeeKiosk('녹차라떼');
coffeeKiosk('아메리카노', 4);
//카페라떼 1 잔 주문완료되었습니다.
//아메리카노 2 잔 주문완료되었습니다.
//녹차라떼 1 잔 주문완료되었습니다.
//아메리카노 4 잔 주문완료되었습니다.
// function coffeeKiosk(data1, data2=1){이렇게 해도 됨!
//     let menu = data1;
//     let num = data2;
//     console.log(`${data1} ${data2}잔 주문완료되었습니다.`);
// }
console.log(`----------------매개변수 문제 풀이`)
function coffeeKiosk2(temperature, menu, num=1){
    const msg = '잔 주문완료되었습니다.'//바뀌지 않는 문구라 const로 작성.
    console.log(temperature, menu, num, msg);
}
coffeeKiosk2('따뜻한', '카페라떼', 2);
coffeeKiosk2('차가운', '아메리카노');
coffeeKiosk2('따뜻한', '녹차라떼', 2);
coffeeKiosk2('차가운', '아메리카노');
//따뜻한 카페라떼 2 잔 주문완료되었습니다.
//차가운 아메리카노 1 잔 주문완료되었습니다.
//따뜻한 녹차라떼 2 잔 주문완료되었습니다.
//차가운 아메리카노 1 잔 주문완료되었습니다.