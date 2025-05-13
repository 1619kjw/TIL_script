// 한줄주석
// 변수
// var 변수명 = 대입값;
// var 변수선언키워드
// = 대입연산자(오른쪽에서 왼쪽으로 값 대입)
var num; //num 변수생성
num = 1; //1을 num에 대입한다(변수에 값 대입)
var num2 = 2; //생성과 대입
//콘솔 실행 함수
// console.log(num2);
//객체.함수(실행하는값);
//콘솔창(객체)에 num2변수값(실행값)을 로그로 출력(실행함수)하겠다
// console.log(num);
//=================================2일차 25/5/13
var bowl;
bowl = '쌀';
// console.log(bowl); //쌀
bowl ='콩';
// console.log(bowl); //콩
//자바스크립트는 절차적 언어이기 때문에 css처럼 우선순위에 따라 최종결과값만 인식하는 것이 아닌 실행 함수의 작성 위치에 따라 다른 변수값을 인식할 수 있다.
var a = 1;
var b = 5;
var c = 10;
c = a;
console.log(a); //b의 값 받기 전 a의 기존 값 출력
a = b;//문자 b가 아닌 변수 b를 a에 대입한다.(o) 변수를 대입한다==변순값을 대입한다
console.log(b);
b = c;
console.log(c);
//================================자료형 구분 내장함수 typeof
// console.log(typeof a);
// console.log(typeof (b));
console.log(`=======데이터공부`)
var d;
console.log(typeof d); //값이 할당되지 않은 상태 undefined(오류점검용)
d = a;
// console.log('d의 값은', d);//'d의 값은' + d
console.log('d의 값 : '+d);//'d의 값은' + d
console.log('a의 값 => ', a);
console.log('b의 값 = ', b);
console.log('c의 값은 '+c);
console.log('---------------------');
console.log(1+1);//숫자+숫자 = 더하기결과 2
console.log('1'+1);//문자+숫자 = 연결결과 11
console.log('---------------------');
var box1 = 10;
var box2 = 'hello';
var box3 = 'javascript';
var box4;
console.log('box1='+box1+', box1은 '+typeof box1+'타입이다.');//box1=10, box1은 Number타입이다.
console.log(box2+' '+box3+'는 '+typeof(box2+box3)+'입니다!');//hello javascript는 String입니다!
console.log(box4);//undefined 정의안된상태(오류)
box4 = box2+box3;
console.log(box4);//hellojavascript
// box4 = null; //값 제거
box4 =0; //숫자 초기화(데이터 타입 유지)
box4 =''; //문자 초기화(데이터 타입 유지. 공백x)
console.log(box4);
console.log(box2.length); //hello의 문자 개수는?
console.log(box3.length); //javascript의 문자 개수는?
console.log(box4.length); //box4의 문자 개수는?
//객체.속성;
//객체.함수();
console.log(`----------------`)
var num1 = 10;
var num2 = 20;
var num3 = 0;
var total; //결과 변수(위 데이터 변수들이 최종 대입될 대상)
console.log(num1, num2, num3);//10 20 0
console.log(num1 + num2 + num3);//30
total = num1 + num2;
console.log(total); //30
console.log("she's gone")//she's gone
console.log(`----------------`);
console.log('1+1은 '+(1+1)+'입니다.'); //1+1은 2입니다. 괄호 붙인 이유:괄호 안의 것을 먼저 계산하라.
//일반 문자와 프로그래밍 식을 쉽게 작성할 수 있게 하는 템플릿문자열 활용
console.log(`1+1은 ${1+1}입니다.`); //1+1은 2입니다.
var num4 = 1;
var num5 = 2;
console.log(`변수 num4의 값은 ${num4}입니다.`);
//변수 num4의 값은 1입니다.
console.log(`num4와 num5의 더한 결과값은 ${num4+num5}입니다.`);
//num4와 num5의 더한 결과값은 3입니다.
console.log(`----------------`);
var subway = 2500;
var coffee = 3500;
var result = subway + coffee;
console.log(`오늘 총 지출액은 ${result}원입니다.`);
//오늘 총 지출액은 ?원입니다.
console.log(`----------------구구단`);
var dan99 = 2;
//2x1=2
//...
//2x9=18
//dan99 변수에 어떤 데이터가 들어오든 고정되는 부분은 정적인 데이터로 입력
//dan99 변수에 데이터가 변경될 때 함께 달라지는 결과는 ${}으로 프로그래밍식으로 처리
console.log(`${dan99}x1=${dan99*1}`);
console.log(`${dan99}x2=${dan99*2}`);
console.log(`${dan99}x3=${dan99*3}`);
console.log(`${dan99}x4=${dan99*4}`);
console.log(`${dan99}x5=${dan99*5}`);
console.log(`${dan99}x6=${dan99*6}`);
console.log(`${dan99}x7=${dan99*7}`);
console.log(`${dan99}x8=${dan99*8}`);
console.log(`${dan99}x9=${dan99*9}`);
