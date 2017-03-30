//var imageFiles = [br_conllection.jpg,br_shop_01.jpg,br_shop_02.jpg,br_shop_03.jpg,img_case_type_02.jpg,img_case_type_04.jpg,img_filter_01.jpg,img_filter_07.jpg];
var imgPath = "./img/";
var displayWidth = "1200px";
var displayAreaId = "cardContainer";
var gridNumber = 4;
var grids = [];

function makeGrids( gridNumber ){
    

}

// 그리드 라는 스택들을 만든다.
// 

// 보통 데이터는 JSON형태로 많이 받아오므로 JSON형태로 함.
var cardData = [
    {imageSrc : imgPath+"br_collection.jpg" , title : "제목을 정해봅시다." , content : "내용이 들어갈 자리입니다." , userId : "agbtbb12"},
    {imageSrc : imgPath+"br_shop_01.jpg" , title : "제목은 어떤 것이 좋을까." , content : "내용이 들어갈 자리입니다." , userId : "asdf33"},
    {imageSrc : imgPath+"br_shop_02.jpg" , title : "룰루루루루루랄랄." , content : "내용이 들어갈 자리입니다." , userId : "agbtbb12"},
    {imageSrc : imgPath+"br_shop_03.jpg" , title : "가나다라를 정해봅시다." , content : "내용이 들어갈 자리입니다." , userId : "eweczc124"},
    {imageSrc : imgPath+"img_case_type_02.jpg" , title : "제목을 정해봅시다." , content : "내용이 들어갈 자리입니다." , userId : "dfdccs"},
    {imageSrc : imgPath+"img_case_type_04.jpg" , title : "카나타나 일본어." , content : "내용이 들어갈 자리입니다." , userId : "agbtbb12"},
    {imageSrc : imgPath+"img_filter_01.jpg" , title : "이치니싼쓰." , content : "내용이 들어갈 자리입니다." , userId : "agbtbb12"},
    {imageSrc : imgPath+"img_filter_07.jpg" , title : "제목을 정해봅시다." , content : "내용이 들어갈 자리입니다." , userId : "dfe55a"},
    {imageSrc : imgPath+"br_shop_01.jpg" , title : "으아아아아아아앙." , content : "내용이 들어갈 자리입니다." , userId : "agbtbb12"},
    {imageSrc : imgPath+"br_shop_02.jpg" , title : "제목을 정해봅시다." , content : "내용이 들어갈 자리입니다." , userId : "adfnggd"},
    {imageSrc : imgPath+"br_shop_03.jpg" , title : "릴리스리랑카." , content : "내용이 들어갈 자리입니다." , userId : "agbtbb12"},
    {imageSrc : imgPath+"img_case_type_02.jpg" , title : "제목을 정해봅시다." , content : "내용이 들어갈 자리입니다." , userId : "agbtbb12"},
    {imageSrc : imgPath+"img_case_type_04.jpg" , title : "제목을 정해봅시다." , content : "내용이 들어갈 자리입니다." , userId : "drgg232"},
    {imageSrc : imgPath+"img_filter_01.jpg" , title : "제목을 정해봅시다." , content : "내용이 들어갈 자리입니다." , userId : "agbtbb12"},
    {imageSrc : imgPath+"img_filter_07.jpg" , title : "제목을 정해봅시다." , content : "내용이 들어갈 자리입니다." , userId : "23323df"},
    {imageSrc : imgPath+"br_collection.jpg" , title : "제목을 정해봅시다." , content : "내용이 들어갈 자리입니다." , userId : "asdf"}  
];

var itemTemplate = '<li class="card">\
                        <img class="image" src="{{imageSrc}}">\
                        <dl>\
                            <dt class="title">{{title}}</dt>\
                            <dd class="content">{{content}}</dd>\
                            <dd class="user_id">{{userId}}</dd>\
                        </dl>\
                    </li>';

var cardName = ["imageSrc","title","content","userId"]

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
}

makeView(cardData, displayAreaId);