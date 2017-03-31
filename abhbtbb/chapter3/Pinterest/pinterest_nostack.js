

// 경로, 뛰워줄 영역 ID, 그리드 숫자, 그리드 담을 배열
var IMG_PATH = "./img/";
var DISPLAY_ID = "cardContainer";

// 보통 데이터는 JSON형태로 많이 받아오므로 JSON형태로 함.
var cardData = [
    {imageSrc : IMG_PATH+"br_collection.jpg" , title : "1제목을 정해봅시다" , content : "내용이 들어갈 자리입니다." , userId : "agbtbb12"},
    {imageSrc : IMG_PATH+"br_shop_01.jpg" , title : "2제목은 어떤 것이 좋을까." , content : "내용이 들어갈 자리입니다." , userId : "asdf33"},
    {imageSrc : IMG_PATH+"br_shop_02.jpg" , title : "3룰루루루루루랄랄." , content : "내용이 들어갈 자리입니다." , userId : "agbtbb12"},
    {imageSrc : IMG_PATH+"br_shop_03.jpg" , title : "4가나다라를 정해봅시다." , content : "내용이 들어갈 자리입니다." , userId : "eweczc124"},
    {imageSrc : IMG_PATH+"img_case_type_02.jpg" , title : "5제목을 정해봅시다." , content : "내용이 들어갈 자리입니다." , userId : "dfdccs"},
    {imageSrc : IMG_PATH+"img_case_type_04.jpg" , title : "6카나타나 일본어." , content : "내용이 들어갈 자리입니다." , userId : "agbtbb12"},
    {imageSrc : IMG_PATH+"img_filter_01.jpg" , title : "7이치니싼쓰." , content : "내용이 들어갈 자리입니다." , userId : "agbtbb12"},
    {imageSrc : IMG_PATH+"img_filter_07.jpg" , title : "8제목을 정해봅시다." , content : "내용이 들어갈 자리입니다." , userId : "dfe55a"},
    {imageSrc : IMG_PATH+"br_shop_01.jpg" , title : "9으아아아아아아앙." , content : "내용이 들어갈 자리입니다." , userId : "agbtbb12"},
    {imageSrc : IMG_PATH+"br_shop_02.jpg" , title : "10제목을 정해봅시다." , content : "내용이 들어갈 자리입니다." , userId : "adfnggd"},
    {imageSrc : IMG_PATH+"br_shop_03.jpg" , title : "11릴리스리랑카." , content : "내용이 들어갈 자리입니다." , userId : "agbtbb12"},
    {imageSrc : IMG_PATH+"img_case_type_02.jpg" , title : "12제목을 정해봅시다." , content : "내용이 들어갈 자리입니다." , userId : "agbtbb12"},
    {imageSrc : IMG_PATH+"img_case_type_04.jpg" , title : "13제목을 정해봅시다." , content : "내용이 들어갈 자리입니다." , userId : "drgg232"},
    {imageSrc : IMG_PATH+"img_filter_01.jpg" , title : "14제목을 정해봅시다." , content : "내용이 들어갈 자리입니다." , userId : "agbtbb12"},
    {imageSrc : IMG_PATH+"img_filter_07.jpg" , title : "15제목을 정해봅시다." , content : "내용이 들어갈 자리입니다." , userId : "23323df"},
    {imageSrc : IMG_PATH+"br_collection.jpg" , title : "16제목을 정해봅시다." , content : "내용이 들어갈 자리입니다." , userId : "asdf"}  
];


var displayWidth = "1200px";
var gridNumber = 4;
var grids = [];
var cardContainer = "";

/* 스택을 상속한 변형 스택 ============================================================================== */
// 스팩을 만들때, 하나의 스팩을 생성하고 그것을 html 코드상에 넣고 그 내부 객체를 부여해줘야 한다.
// 그 내부 객체에 추가하는 식으로 스택을 쌓아나가야 한다.
function Pstack (DISPLAY_ID) {
    this._DISPLAY_ID = DISPLAY_ID;
    this._stack = [];
    this._totalHeight = 0;
    this._one =  document.createElement('ul'); 
    this._one.className = "gridOne";
}
Pstack.prototype = new Stack();

Pstack.prototype.addDom = function(DOM){
    this._one.appendChild(DOM);
    this.add(DOM);
}
Pstack.prototype.makeView = function() {
    document.getElementById(this._DISPLAY_ID).appendChild(this._one);
}
Pstack.prototype.constructor = Pstack;

/* 템플릿 관련 ============================================================================== */

var cardName = ["imageSrc","title","content","userId"]
var itemTemplate = '<li class="card">\
                        <img class="image" src="{{imageSrc}}">\
                        <dl>\
                            <dt class="title">{{title}}</dt>\
                            <dd class="content">{{content}}</dd>\
                            <dd class="user_id">{{userId}}</dd>\
                        </dl>\
                    </li>';


function makeTemplate(data) {
    var temp = itemTemplate;
    for( var i = 0; i < cardName.length; i++) {
        temp = temp.replace("{{"+cardName[i]+"}}", data[cardName[i]]);
    }
    return temp;
}

function makeView(datas, id) {
    var templates = datas.map( x => makeTemplate(x)).join('\n');
    var cardContainer = document.getElementById(id);
    cardContainer.innerHTML = templates;
    return cardContainer;
}


function makeGrids(number, DISPLAY_ID) {
    var temp = [];
    for(var i = 0; i < number; i++) {
        temp.push(new Pstack(DISPLAY_ID));
    }
    return temp;
}

/* 실행 관련 ============================================================================== */

grids = makeGrids(4, DISPLAY_ID);
cardContainer = makeView(cardData, DISPLAY_ID);
var cardChildren = cardContainer.children;

var num1 = 0;
while( cardChildren.length > 0 ) {
    grids[num1%4].addDom(cardChildren[0]);
    num1++;
}
num1 = 0;

grids.map( x => x.makeView());