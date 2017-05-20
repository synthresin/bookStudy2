
/* * * * * * * * * * * * * * * * * *  Pstack 모듈 * * * * * * * * * * * * * * * * * * */
(function(module){
    var module = module || window;
    var Pstack = module.Pstack || {};


    /* 스택을 상속한 변형 스택 ============================================================================== */
    // 스팩을 만들때, 하나의 스팩을 생성하고 그것을 html 코드상에 넣고 그 내부 객체를 부여해줘야 한다.
    // 그 내부 객체에 추가하는 식으로 스택을 쌓아나가야 한다.

    /**
     * Stack을 상속해서 일부 기능 추가 및 오버라이드 실행.
     * @param {*} className
     * @param {*} targetId 
     */
    function Pstack (targetId, className) {
        this._targetId = targetId;
        this._stack = [];
        this._totalHeight = 0;
        this._one =  document.createElement('ul'); 
        this._one.className = className;
    }
    // Stack으로 부터 상속
    Pstack.prototype = new Stack();

    Pstack.prototype.add = function(DOM){
        this._one.appendChild(DOM);
        this._stack.push(DOM);
    }
    Pstack.prototype.makeView = function() {
        document.getElementById(this._targetId).appendChild(this._one);
    }
    Pstack.prototype.constructor = Pstack;
    PIN.Pstack = Pstack;



    module.Pstack = Pstack;
})(window);



/* * * * * * * * * * * * * * * * * *  PINTER 모듈 * * * * * * * * * * * * * * * * * * */
(function(module){
    var module = module || window;
    var PINTER = module.PINTER || {};


    // 경로, 뛰워줄 영역 ID, 그리드 숫자, 그리드 담을 배열
    var IMG_PATH = "./img/";
    var targetId = "cardContainer";



    var displayWidth = "1200px";
    var gridNumber = 4;
    var grids = [];
    var cardContainer = "";

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


    function makeGrids(number, targetId) {
        var temp = [];
        for(var i = 0; i < number; i++) {
            temp.push(new Pstack(targetId));
        }
        return temp;
    }

    /* 실행 관련 ============================================================================== */

    grids = makeGrids(4, targetId);
    cardContainer = makeView(cardData, targetId);
    var cardChildren = cardContainer.children;

    var num1 = 0;
    while( cardChildren.length > 0 ) {
        grids[num1%4].addDom(cardChildren[0]);
        num1++;
    }
    num1 = 0;

    grids.map( x => x.makeView());







    module.PINTER = PINTER;

})(window);
