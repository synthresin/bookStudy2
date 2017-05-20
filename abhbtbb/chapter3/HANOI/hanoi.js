(function(module) {
    var module = module || window;
    var Hanoi = module.Hanoi || {};

    // 하노이 탑 푸는 재귀 알고리즘 [ 일반버전 ]
    Hanoi.hanoiFunc = function( disk, from, to) {
        if( !disk ) return ;
        var temp = 6 - from - to;  
        Hanoi.hanoiFunc( disk-1, from, temp );
        console.log(`${disk}번 디스크를 ${from} 에서 ${to}로 이동`);
        Hanoi.hanoiFunc( disk-1, temp, to);
    }

    // 하노이 탑 푸는 재귀 알고리즘 [ 스택을 이용 ] 
    function core(disk, from, to, container, callBack) {
        if( !disk ) return;
        var temp = 6 - from - to;

        // 재귀 호출
        core( disk-1, from, temp, container, callBack );
        container[to].add( container[from].out() );
        callBack(container);
        core( disk-1, temp, to, container, callBack );
    }

    // 하노이에 필요한 stack 만들기
    function makeStacks(number) {
        
        // 혼란을 줄이기 위해서 하나의 안쓰는 스택을 만들어서 1,2,3을 맞춘다.
        var stacks = [0,1,2,3].map( x=> new Stack() );
        for( var i = number; i > 0; i--) {
            stacks[1].add(i);
        }
        return stacks;
    }

    // 스택을 이용한 하노이 탑 함수 종합
    function hanoiFuncStack(stacks, callBack) {
        // 디스크 숫자
        var disks = stacks[1].len();

        // 화면 초기화, 시작상태 렌더링
        document.getElementById('result').innerHTML = "";
        callBack(stacks);

        // 하노이 재귀 알고리즘
        core( disks, 1, 3, stacks, callBack );

    }

    // 스택 상태를 화면에 뿌려주는 형태, 아쉽게도 아이디에 의존성을 가지고 있다.
    function viewStacks(stacks) {

        // 결과를 그릴 대상
        var result = document.getElementById('result');

        //템플릿
        var stackTemplates = ['{stack1}','{stack2}','{stack3}'];
        var TEMPLATE1 = '<div class="container">\
                            <div class="first">{stack1}</div>\
                            <div class="second">{stack2}</div>\
                            <div class="third">{stack3}</div>\
                        </div>';
        var TEMPLATE2 = '<div> [{{data}}] </div>';

        // 저장할 곳
        var temp1 = TEMPLATE1;
        var temp2 = "";

        // 3개의 스택 각각에서 다시 값들을 순회하면서 입력해야 하므로 2중 for 문을 쓴다.
        for( var i = 1; i < 4; i++ ) {
            for( var j = stacks[i].len() * 1 - 1; j > -1; j--) {
                temp2 += TEMPLATE2.replace('{{data}}', stacks[i]._stack[j] );
            }
            temp1 = temp1.replace( stackTemplates[i-1], temp2 );
            temp2 = "";
        }
        result.innerHTML += temp1;
    }

    // 시작함수. 여기에 원하는 디스크 숫자를 넣으면 작동이 시작된다.
    Hanoi.startHanoi = function(disks) {
        hanoiFuncStack( makeStacks(disks), viewStacks );
    }

    module.Hanoi = Hanoi;
})(window);