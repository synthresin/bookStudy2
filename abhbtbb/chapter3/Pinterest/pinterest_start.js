// 데이터, 경로, 띄울 아이디 외부로 부터 입력

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


// 템플릿도 외부 입력 받기
// 각각의 스택 객체로부터 템플릿을 받고 그리고 띄울수 있어야 한다.
