(function (module){
    
    /* 모듈 및 네임 스페이스 */
    var container   = module || window,
        Fibo        = container.Fibo || {};

    /* 피보나치를 단순 계산함. */ 
    Fibo.fiboCalculate = function ( number ) {
        var result = [0,1];
        for( var i = 1; i < number; i++) {
            result[i+1] = result[i] + result[i-1];
        }
        // 제일 앞의 0은 제외
        return result.slice(1);
    }

    /* 피보나치 결과값을 입력한 id에 출력한다. */
    Fibo.fiboOutput = function ( id, array ){
        var target = document.getElementById(id),
            result = array.join(', ');

        target.innerHTML = result;
    }

    /* 버튼 클릭시마다 값을 받아서 피보나치 계산 및 출력을 실행시킨다. */
    Fibo.start = function ( id, number ) {
        var result = Fibo.fiboCalculate( number );
        Fibo.fiboOutput( id, result );
    }

    container.Fibo = Fibo;
})(window);