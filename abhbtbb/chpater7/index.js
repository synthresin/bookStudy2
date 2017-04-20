function HashTable_basic() {

    var table = [];

    this.get = function( key ) { return table[ loseloseHashCode(key) ];};

    this.set = function( key, value ) { 
        var position = loseloseHashCode( key );
        console.log( position + ' - ' + key );
        table[ position ] = value;
    };

    this.remove = function( key ) {
        table[ loseloseHashCode( key ) ] = undefined;
    };

    this.print = function() {
        table.forEach( ( value, index )=> {
            if(value !== undefined) console.log( index + " : " + value); 
        });
    }

    var loseloseHashCode = function( key ) {
        var hash = 0;
        key.split("").map( a => hash += a.charCodeAt() );
        return hash % 37;
    };

}

// 테스트 코드
var t1 = new HashTable_basic();
t1.set('GGGG', 'gggg@gmail.com');
t1.set('YYYY', 'yyyy@gmail.com');
t1.set('cccc', 'cccc@gmail.com');
t1.set('John', 'johnsnow@email.com');
console.log(t1.get('John'));

function HashTable_chaining() {
    var table = [];

    var ValuePair = function( key, value ) {
        this.key = key;
        this.value = value;
        this.toString = function() { return `[ ${this.key} - ${this.value} ]`; };
    }

    var LHCode = function( key ) {
        var hash = 0;
        for( var i = 0; i < key.length; i++ ) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }

    this.put = function( key, value ) {
        var position = LHCode( key );

        if( table[position] === undefined ) {
            table[position] = new LinkedList();
        }
        table[position].append( new ValuePair( key, value ) );
    }

    this.get = function( key ) {
        debugger;
        var position = LHCode( key );
        if( table[position] !== undefined ) {
            var current = table[position].getHead();
            while( current !== null ) {
                if( current.element.key == key ) {
                    return current.element.value;
                }
                current = current.next;
            }
        }
    }
}

function LinkedList() {
    this.start = null,
    this.end = null,
    this.length = 0
}
LinkedList.prototype = {
    node : function( value ) {
        this.element = value;
        this.next = null;
    },
    append : function ( value ) {
        if( this.start === null ) {
            this.start = new this.node(value);
            this.end = this.start;
        } else {
            this.end.next = new this.node(value);
            this.end = this.end.next;
            this.end.next = null;
        }
        this.length++;
    },
    getHead : function() {
        return this.start;
    },

    remove : function ( number ) {
        pass;
    },
}