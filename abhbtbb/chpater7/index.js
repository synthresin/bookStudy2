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
    }
}