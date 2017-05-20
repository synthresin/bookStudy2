function Set() {
    this.items = {};
    this.length = 0;
}

Set.prototype = {
    // 원소를 추가한다.
    add : function( item ) {
        if( this.has( item ) ) {
            return false;
        }
        this.items[item] = item;
        this.length += 1;
        return true;
    },

    // 원소를 삭제한다.
    remove : function( item ) {
        if( this.has( item ) ) {
            this.length -= 1;
            return delete this.items[item];
        }
        return false;
    },

    // 어떤 원소 포함여부를 boolean으로 반환
    has : function( item ) {
        return this.items.hasOwnProperty(item);
    },

    has2 : function( item ) {
        // in을 쓸 경우에 프로토타입 체인에 있는 프로퍼티에 대해서도 적용이 되어버린다.
        // 따라서 정확하게 자기자신에 대한 프로퍼티를 체크할 때에는 in보다는 hasOwnProperty를 써야 한다.
        return item in items;
    },

    // 모든 원소를 삭제한다.
    clear : function( item ) {
        this.items = {};
        this.length = 0;
    },

    // 원소 개수를 반환한다. 배열 length 프로퍼티와 유사
    size : function () { return this.length; },
    size1 : function() { return Object.keys(this.items).length;},
    size2 : function () {
        var count = 0;
        for( item in this.items ) {
            if( this.items.hasOwnProperty(item) ) {
                count++;
            }
        }
        return count;
    },

    // 집합의 모든 원소를 배열 형태로 반환한다.
    values : function() {
        var result = [];
        for( item in this.items ) {
            if( this.items.hasOwnProperty(item) ) { result.push(item);}
        }
        return result;
    },

    values1 : function() { return Object.keys(this.items); },

    // Object.prototype.z = 'zzz' 이렇게 넣고 아래 메소드를 실행해보면 무엇이 문제인지 알수 있다.
    values2 : function() {
        var result = [];
        for( item in this.items ) {
            result.push(item);
        }
        return result;
    },

    checkSet : function( target ) {
        if( target instanceof Set) return true;
        throw Error("입력하신 " + target +"은 Set 클래스가 아닙니다.");
    },

    // 합집합
    union : function( otherSet ) {

        // Set이 맞으면 true 리턴, 아닐경우 에러 발생
        this.checkSet( otherSet );

        var unionSet = new Set();
        var values = this.values();

        for( var i = 0; i < values.length; i++ ) {
            unionSet.add( values[i] );
        }

        values = otherSet.values();

        for( var i = 0; i< values.length; i++ ) {
            unionSet.add( values[i] );
        }

        return unionSet;
    },

    // 교집합
    intersection : function( otherSet ) {

        this.checkSet( otherSet );

        var intersectionSet = new Set();
        var values = this.values();

        for( var i = 0; i < values.length; i++ ) {
            if( otherSet.has( values[i] ) ) {
                intersectionSet.add( values[i] );
            }
        }
        return intersectionSet;
    },


    // 차집합
    difference : function( otherSet ) {
        this.checkSet( otherSet );
        
        var differenceSet = new Set();
        var values = this.values();

        for( var i = 0; i < values.length; i++ ) {
            if( !otherSet.has( values[i] ) ) {
                differenceSet.add( values[i] );
            }
        }
        return differenceSet;
    },

    // 부분집합
    subSet : function( otherSet ) {
        this.checkSet( otherSet );

        if( this.size() > otherSet.size() ) {
            console.log("부분 집합이 아닙니다.");
            return false;
        } else {
            var values = this.values();
            for( var i = 0; i < values.length; i++ ) {
                if( !otherSet.has( values[i] ) ) {
                    return false;
                }
            }
            console.log("부분 집합이 맞습니다.");
            return true;
        }

    },
}

var t1 = new Set();
t1.add('aaa');t1.add('bbb');t1.add('ccc');
var t2 = new Set();
t2.add('111');t2.add('222');t2.add('ccc');