(function(module){

    /* ID 상수  */
    var TODO_LISTS_ID = 'todoLists';
    var TODO_SUBMIT_ID = 'todoSubmit';
    var TODO_DELETE_ID = 'todoDelete';
    var TODO_IMPORTANT_ID = 'todoImportant';
    var TODO_CONTENT_ID = 'todoContent';

    /* ID 객체 가져오기 */
    var todoSubmit = domId(TODO_SUBMIT_ID);
    var todoDelete = domId(TODO_DELETE_ID);
    var todoImportant = domId(TODO_IMPORTANT_ID);
    var todoContent = domId(TODO_CONTENT_ID);

    function domId(id) {
        return (typeof id === "string")? document.getElementById(id) : null;
    }

    /* 콜백 함수 */
    function todoSubmitCallback() {
        TodoList.setList(todoImportant.value, todoContent.value);
        TodoList.displayList(TODO_LISTS_ID);
    }

    function todoDeleteCallback() {
        debugger;
        var delList = TodoList.checkChecked('check');
        TodoList.delList(delList);
        TodoList.displayList(TODO_LISTS_ID);
    }

    // init은 내부 함수로 돌리는게 좋은가?
    /* 시작 함수 */
    function init() {
        todoSubmit.addEventListener('click', todoSubmitCallback);
        todoDelete.addEventListener('click', todoDeleteCallback);
        TodoList.displayList(TODO_LISTS_ID);
    }

    /* 로딩이 되면 자동 실행하기. */
    window.onload = init;

})(window);