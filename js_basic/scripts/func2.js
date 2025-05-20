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
function coffeeKiosk2(hotIce, menu, num=1){
    const msg = '잔 주문완료되었습니다.'//바뀌지 않는 문구라 const로 작성.
    const type = ['따뜻한','차가운'];//반복되는 데이터를 배열2개 만들어서 고를수있게함
    console.log(type[hotIce], menu, num, msg);
}
coffeeKiosk2(0, '카페라떼', 2);
coffeeKiosk2(1, '아메리카노');
coffeeKiosk2(0, '녹차라떼', 2);
coffeeKiosk2(1, '아메리카노');
//따뜻한 카페라떼 2 잔 주문완료되었습니다.
//차가운 아메리카노 1 잔 주문완료되었습니다.
//따뜻한 녹차라떼 2 잔 주문완료되었습니다.
//차가운 아메리카노 1 잔 주문완료되었습니다.
console.log(`----------------함수의 리턴(return)`)
//더하기 알고리즘
//함수 내부 {}는 대기장소로 호츨하지 않는한 절대 실행되지 않는다. 
//함수 외부는 {}가 끝난 위치로 함수를 호출해서 실행할 수 있는 위치다.
//함수 내에서 return을 작성하면 내부의 데이터를 함수 외부로 반환해서 실행시키거나 데이터를 전달하는 것을 말한다.
function plusFunc(num){
    let total = num+1;
    return total; //리턴으로 실행함수가 아닌 값만 보냈다면?
}
plusFunc(2);
//호출 할때 리턴이 보낸 반환값을 묶어주는 실행함수를 별도로 작성한다.
console.log(plusFunc(2));
console.log(`----------------구구단 알고리즘(리턴과 매개변수 활용)`)
let dan99 = ''; //전역변수(초기값). 앞으로 문자데이터가 들어올 예정으로 빈문자초기값
function dan99Func(num){
    dan99 = `${num}x1=${num*1} `;
    //(아래 식 풀어쓰면->) dan99 = dan99 + `${num}x2=${num*2} `
    // 기존 dan99변수에 우측데이터를 더해서 앞dan99에 대입해라.
    dan99 += `${num}x2=${num*2} `;
    dan99 += `${num}x3=${num*3} `;
    dan99 += `${num}x4=${num*4} `;
    dan99 += `${num}x5=${num*5} `;
    dan99 += `${num}x6=${num*6} `;
    dan99 += `${num}x7=${num*7} `;
    dan99 += `${num}x8=${num*8} `;
    dan99 += `${num}x9=${num*9}`;
    return dan99;
}
dan99Func(2); //구구단 2단
console.log(dan99Func(2)); //실행함수
console.log(`----------------할인율 계산기`)
// 27900원을 입력했을 때(가격은 달라질 수 있음)
// 입력한 가격에 대한 5%, 10%, 20%, 30%, 40%, 50% 할인율 동시출력
// 10% 할인율 계산법 : 가격 * 0.9
// 4% 할인율 계산법 : 100-4 = 96 -> 가격 * 0.96
// 결과예시 ) 5% 할인율 결과 : ????원
let discountResult = '';
function discount(price){
    discountResult = `5% 할인률 결과 : ${price * 0.95}원`;
    discountResult += `10% 할인률 결과 : ${price * 0.9}원`;
    discountResult += `20% 할인률 결과 : ${price * 0.8}원`;
    discountResult += `30% 할인률 결과 : ${price * 0.7}원`;
    discountResult += `40% 할인률 결과 : ${price * 0.6}원`;
    discountResult += `50% 할인률 결과 : ${price * 0.5}원`;
    return discountResult;
}
// discount(27900);
console.log(discount(27900));
console.log(`----------------익명함수`)
//익명함수란? 변수 내 function 키워드를 지정해 대입하는 함수
//함수 자체의 이름이 아닌 변수 이름에 의존해서 할당(대입)되기 때문에 익명함수라고 부른다.
//function greeting(){} //일반함수
const greeting = function(){
    console.log('hello');
} //익명함수
greeting(); //익명함수 호출은 함수명이 아닌 변수명으로 호출한다.
//익명함수는 일반함수와 다르게 함수선언보다 먼저 호출하면 오류가 발생한다.
console.log(`----------------화살표함수ES6이후`)
//화살표 함수는 일반함수가 아닌 익명함수일때 함수를 간결하게 줄이는 목적으로 사용한다.
//function을 => 기호로 바꿔서 사용한다.
//대입연산자(=)와 화살표함수(=>)를 붙여서 사용할 수 없기 때문에 매개변수와 함수선언표시 순서를 바꿔서 =()=> 로 사용한다. (대입, 매개변수, 화살표함수 순서)
//일반함수 경우
function bab(num){
    return '밥'+num+'공기 주세요';
}
console.log(bab(1)); //콘솔에 bab이라는 함수를 호출하는데 매개변수로 1을 넣음
//화살표함수(익명함수) 경우
const bab2 = (num) => {return '밥'+num+'공기 주세요'};
console.log(bab2(2)); //bab2에 num을 대입한다
//함수 호출할 때마다 아래와 같은 결과 출력하기(매개변수 활용)
//밥 주세요
//반찬 주세요
//국 주세요
//const 변수 = (매개변수) => {return 함수반환값}
//변수() //익명함수호출식
const bab3 = (data) => {return data+'주세요'};
console.log(bab3('밥')); //bab3이라는 함수의 매개변수에 '밥'을 전달하겠다
console.log(bab3('반찬'));
console.log(bab3('국'));
