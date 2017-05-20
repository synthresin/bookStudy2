(function(module){

    /**@property {*} container : 외부 모듈, 윈도우 객체등을 받는다.
     * @property {*} NS : 내부 메서드들을 저장하기 위한 네임스페이스
     * @property {*} stack : Stack으로 부터 스택을 생성하고 계산에 적용한다.
     * @property {string} outNumber : 진법 변환한 이후 대응 하는 숫자 및 알파벳, 36진법까지 가능
     */
    var container = module || window;
    var NS = container.NS || {};
    var stack = new Stack();
    // 36진법
    var outNumbers = "0123456789abcdefghijklmnopqrstuvwxyz";

    /**@description 숫자인지를 체크한다. NS 네임스페이스에 저장되지는 않는다.
     * @param {*} number : 체크할 숫자를 입력한다.
     */
    function checkNum(number) {
        return ( typeof number !== "number" || !isFinite( number ) )? false : true;
    }


    /**@description 10진법 숫자를 입력한 N 값으로 진법 변환을 한다.
     * @param {number} nNumber : N진법 숫자 입력
     * @param {number} value : 진법으로 변경할 숫자값
     * @return {string} 진법 변환한 값을 반환
     */
    NS.convert10toN = function( nNumber, value ) {
        var temp = "";                                  // 반환 위한 값 저장 및 반환
        var nNumber = nNumber * 1;                      // 진법 숫자 값
        var value = value * 1;                          // 진법 변환하기 위한 10진법 값

        if( !checkNum(nNumber) || !checkNum(value) ) {throw new Error(" 10 진법 => N진법 : 숫자만 넣어주세요"); return;}
        if( nNumber > 36 ) { alert("36 진법까지만 가능합니다."); return;}

        // 스택에 나머지를 저장하고 그 이후 다시 temp로 합친다
        while( value ) {
            stack.add( value % nNumber );
            value = ~~( value / nNumber );
        }
        while( stack.len() ) {
            temp += outNumbers[stack.out()];
        }

        return temp;
    }

    /**@description N진법 숫자를 입력한 10진법 값으로 진법 변환을 한다.
     * @param {number} nNumber : N진법 숫자 입력
     * @param {number} value : 10진법으로 변경할 숫자값
     * @return {string} 진법 변환한 값을 반환
     */
    NS.convertNto10 = function ( nNumber, value ) {
        var temp = 0;                                                               // 임시저장 및 반환
        value = (value + "").toLowerCase();                                         // 대문자일 경우 소문자로.
        if( !checkNum(nNumber) ) {alert("진법에는 숫자만 넣어주세요."); return;}
        if( nNumber > 36 ) { alert("36 진법까지만 가능합니다."); return;}
        
        for( var i = value.length - 1; i > -1 ; i--) {
            stack.add(value[i]);
        }

        while(stack.len()) {
            temp = temp * nNumber;
            temp = outNumbers.indexOf(stack.out()) * 1 + temp 
        }
        return temp;
    }
    container.NS = NS;
})(window)