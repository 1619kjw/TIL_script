//for(변수초기값; 조건식; 증감식){조건이 참일때 반복구문} 반복종료(종료거짓)
for(let i=0; i<5; i++){console.log(i+1)};
const li = document.querySelectorAll('ul li');
console.log(li); //3 li
for(let i=1; i<=2; i++){ //2,3번째 li만 적용
    li[i].classList.add('list_active');
    //li[i].style.backgroudnColor = 'yellow';
    //li[i].style.textAlign = 'center';
}
//태그 2개 이상 다수를 변수로 대입할 때 querySelectorAll 선언 후 사용시 [index] 활용하기 (주로 for 반복문과 함께 활용)
//--------JS DOM 복제붙여넣기(데스크탑 내비와 모바일 내비에 주로 활용)
//붙여넣기 위치 DOM, 복제 DOM 변수 만들기!
const section = document.querySelector('section');
const ul = document.querySelector('ul'); //ul DOM 선택(원본)
const ulClone = ul.cloneNode(true); //ul 자식, 자손포함 복제(Ctrl+C)
console.log(section, ul, ulClone);

//복제한 요소 붙여넣기(대상요소의 마지막자식 위치로 붙여넣기)
section.appendChild(ulClone); //section의 마지막자식위치에 복제대상 붙여넣기(Ctrl+C)

//-----------------------------------------------------
//while 반복문 - 조건이 참일 경우 무한 반복
//while(조건){ 괄호 안 조건이 참일 경우 실행문 } 조건거짓실행

/* let htmlQ = confirm('a태그는 alt속성이 있다. 맞으면 확인, 틀리면 취소를 누르세요.');
console.log(htmlQ); *///확인(true) 취소(false)
//위 문제를 푸는 학생이 문제를 틀리면 무한반복질문
//문제를 맞추면 -> alert('정답입니다!')
/* while(htmlQ != false){
    htmlQ = confirm('a태그는 alt속성이 있다. 맞으면 확인, 틀리면 취소를 누르세요.');
}
alert('정답입니다!');
 */
/* let cssQ = confirm('배경통합속성의 작성 순서는 background: color image repeat attachment position이다. 맞으면 확인, 틀리면 취소를 누르세요.');
while(cssQ != true){
    cssQ = confirm('배경통합속성의 작성 순서는 background: color image repeat attachment position이다. 맞으면 확인, 틀리면 취소를 누르세요.');
}
alert('정답입니뿅~')

let jsQ = confirm('');
 */

let num = 1;
while(num <= 10){
    console.log(num);
    if(num == 5) break;
    num++;
}

console.log('---------------');

for(var i=1; i<=10; i++){//for밖에서도 인식할 수 있게 하려고 전역변수 개념인 var로 변경
    continue;
    console.log(i);//error? 1? 10? 11? => 11
}
console.log(i);

console.log('-------다중반복문');
//for문 안 for문이 추가로 있는 구조(2단, 3단 반복 가능)
//첫번째 for문이 한번 실행될 때 두번째(안쪽)for문은 조건이 거짓이 될때까지 모두 반복실행된다.
for(let i=1; i<3; i++){//첫번째 for문
    for(let j=0; j<2; j++){//두번째 for문
        console.log('첫번째 i값:', i, '두번째 j값', j);
    }
}
console.log('-------다중반복문 활용 구구단');
const dan99 = document.querySelector('.dan99'); //구구단출력위치
console.log(dan99);
for (let i=2; i<=9; i++){//2가 돌때
    for(let j=1; j<=9; j++){//123456789가 모두 돈다
        // console.log(`${i}X${j}=${i*j}`)
        dan99.innerHTML += `${i}X${j}=${i*j}<br>`;
    }//2단 for 조건이 거짓일때(9보다 클때) 종료위치
    dan99.innerHTML += '<hr>';
    console.log('-------');//2단 for 종료 구분선 표시
}

console.log('ES6 for~in');

const study = ['html', 'css', 'js'] //배열
const abc = 'abcdefghijklmn' //문자
const user = {name:'여름', age:20, area:'서울'} //객체
console.log(study);

for(let i of study){
    console.log(i); 
    // console.log(study[i])
}
for(let i in abc){
    // console.log(i); //1~13(단순한 문자도 개수로 인식->숫자로 출력)
    console.log(abc[i]) // abcdefghijklmn
}
for(let i in user){
    console.log(i); //name, age, area
    //(객체는 인덱스 불러올 때 속성으로 결정되기 때문에 속성이 나온다) 
    console.log(user[i]); //여름, 20, 서울
}

for(let i of li){//querySelectorAll로 생성한 다수li변수 접근
    console.log(i)
}