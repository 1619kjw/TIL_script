/* 25/05/15 배열공부 */
//=======요일배열=======
/* const yoil = ['월','화','수'] *//* 변하지않는 값이니까 const */
const yoil = new Array('월','화','수','목','금','토','일')/* new : 새로만들것이다. new Array가 자바스크립트의 함수를 불러오는 내장함수라서 배열이지만 대괄호가 아니라 함수에 가까워서 소괄호를 쓴다. */
// console.log(yoil[0]);대괄호 작성하고, 불러오고 싶은 인덱스번호작성
// console.log(yoil[1]); 
// console.log(yoil[2]); 
//=======색상배열=======
// const colorArray = ['빨강','주황','노랑','파랑','보라','검정','초록'];
// console.log(colorArray[0], colorArray[2],colorArray[4],colorArray[6]);
// console.log(`제가 좋아하는 색상은 ${colorArray[1]}, ${colorArray[3]}, ${colorArray[4]}색입니다.`);
//=====과일 역순으로 출력하기=====
// const fruitArray = ['바나나','딸기','망고','사과','귤'];
// console.log(fruitArray[4],fruitArray[3],fruitArray[2],fruitArray[1],fruitArray[0]);/* 출력-> 귤 사과 망고 딸기 바나나 */
//====(위)요일배열과 새로운 날씨카드배열 활용 문자출력하기====
const weatherCard = ['비','눈','맑음','흐림'];
console.log(`${yoil[3]}요일 날씨 : ${weatherCard[0]}`);//목요일 날씨 : 비
console.log(`${yoil[4]}요일 날씨 : ${weatherCard[2]}`);//금요일 날씨 :맑음
//=======객체와 배열=======
const movieInfo = {
    name:'미션임파서블',
    director:'크리스토퍼 맥쿼리',
    genre:'액션',
    rating:169,
    actor:['톰 크루즈','헤일리 앳웰','빙 라메스'],
    releaseDate:'2025.27.17',
    age:15,
    story:'전 세계 국가와 조직의 기능이 마비되고...',
}
const movieInfo_v2 = {
    name:'릴로 & 스티치',
    director:'딘 플레이셔-캠프',
    genre:'애니메이션',
    rating:107,
    actor:['크리스 샌더스','마이아 케알로하','시드니 엘리자베스 아구동'],
    releaseDate:'2025.05.21',
    age:'전체',
    story:'보송보송한 파란 솜털, 호기심 가득한 큰 눈, 장난기 가득한 웃음을 가졌지만..!',
}
//동일한 분류의 객체가 많을 경우 묶는 방법
const movieAll = [
    {
        name:'미션임파서블',
        director:'크리스토퍼 맥쿼리',
        genre:'액션',
        rating:169,
        actor:['톰 크루즈','헤일리 앳웰','빙 라메스'],
        releaseDate:'2025.27.17',
        age:15,
        story:'전 세계 국가와 조직의 기능이 마비되고...',
    },{
        name:'릴로 & 스티치',
        director:'딘 플레이셔-캠프',
        genre:'애니메이션',
        rating:107,
        actor:['크리스 샌더스','마이아 케알로하','시드니 엘리자베스 아구동'],
        releaseDate:'2025.05.21',
        age:'전체',
        story:'보송보송한 파란 솜털, 호기심 가득한 큰 눈, 장난기 가득한 웃음을 가졌지만..!',
    },
]
console.log(movieAll[0].name);//미션임파서블
console.log(movieAll[1].genre);//애니메이션
//감독 : 크리스토퍼 맥쿼리
console.log(`감독 : ${movieAll[0].director}`);
//장르 : 액션 / 169분
console.log(`장르 : ${movieAll[0].genre} / ${movieAll[0].rating}분`);
//등급 : 15세 이상 관람가
console.log(`등급 : ${movieAll[0].age}세 이상 관람가`);
//========산술 연산자=======
const greeting = 'hello';
const lang = ['figma','html','css'];/* 모아놓는 배열을 만들기 */
console.log(greeting+lang[0]);/* 서로 다른 변수에 들어있어서 한번에 쓸 수 없다. 특정 데이터를 쓰고 싶을 댄 자바스크립트에서는 항상 변수로 쓴다. */
console.log(greeting+lang[1]);
console.log(greeting+lang[2]);
const num1 = 1;
const num7 = 7;
console.log(num1+num7);
const global = 'world';
console.log((num1+num7)+global);
//========빼기, 곱하기, 나누기 등 연산은 숫자가 문자로 따옴표가 묶여 있을 시 자동으로 숫자로 형변환시킨다.======
const data1 = 1;
const data7 = "7";
console.log(data1+data7); //17(일칠)
console.log(data1-data7); //-6
console.log(data1*data7);//7
console.log(data1/data7); //0.14285714285714285
console.log(data1%data7);//1
console.log(data1**data7);//1
console.log(typeof data7);//string(문자)
console.log(typeof (data1+data7));//string(문자)
console.log(typeof (data1-data7));//number(숫자)
