(function (module) {
    var container = module || window,
        TodoList = container.TodoList || {};

    /* 할일리스트는 클로져로 처리한다. */
    var List = [
        {iNum : 3, important : 3, content : "오전 10시에 스터디가 있음"},
        {iNum : 2, important : 2, content : "함수형 자바스크립트 공부"},
        {iNum : 1, important : 3, content : "자바 공부"}
    ];

    // 각자의 고유번호
    var iNum = List.length + 1;

    /* 템플릿도 마찬가지로 처리한다. */
    var templateList = '\
            <div class="oneLine">\
            <div class="oneImportant"><input type="hidden" value="{iNum}"><input type="checkbox" class="check"></div>\
            <div class="oneImportant">{IMPORTANT}</div>\
            <div class="oneContent">{CONTENT}</div>\
            </div>';

    /* 템플릿을 내용에 반영해서 리턴 */
    function makeTemplate( one ) {
        return templateList
            .replace('{iNum}', one.iNum )
            .replace('{IMPORTANT}', one.important )
            .replace('{CONTENT}', one.content );
    };

    /* 할일리스트의 특정 값을 가져오는 함수 */
    TodoList.getList = function( number ) {
        return List[ number ];
    };

    /* 할일리스트에 할일을 추가하고 그후 전체 리스트 값 복사해서 출력 */
    TodoList.setList = function( important, content ) {
        List.unshift({'iNum': iNum++, 'important' : important, 'content' : content });
        return List.slice();
    };

    /* 할일리스트에 특정 인덱스를 삭제*/
    TodoList.delOne = function( index ) {
        List.splice( index, 1 );
    };

    /* 삭제 배열을 받아서 각각을 삭제 처리 */
    TodoList.delList = function( delArray ) {
        delArray.map( function(x) {
            for( var i = 0; i < List.length; i++) {
                if( List[i].iNum === +x ) { TodoList.delOne( i );}
            }
        });
    }

    /* 순서를 바꿈 */
    TodoList.changeList = function( target, upDown ) {

    };


    /* 웹페이지에 할일리스트를 출력 */
    TodoList.displayList = function( id ) {
        var targetContent = document.getElementById(id),
            resultContent = "";

        // innerHTML에는 최대한 값의 변경을 적게 하는게 최적화에 좋다.
        List.map( function( one ) { resultContent += makeTemplate( one ); } );
        targetContent.innerHTML = resultContent
    };

    /* 체크된 항목의 인덱스 번호를 가져오는 메소드 */
    TodoList.checkChecked = function( className ) {
        var checkList   = document.getElementsByClassName( className ),
            checkedList = Array.prototype.filter.call(checkList, function(x){return x.checked});
            
        return checkedList.map( function(x) { return x.previousSibling.value } );
    }

    /* TodoList 네임스페이스에 추가 */
    container.TodoList = TodoList;

})(window);