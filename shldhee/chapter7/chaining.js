
function HashTable() {
    this.table = [];

    var ValuePair = function(key, value) {
        this.key = key;
        this.value = value;
    };

    ValuePair.prototype = {
        constructor : ValuePair,
        toString : function() {
            return '[' + this.key + ' - ' + this.value + ']';
            //return `[${this.key} - ${this.value}]`;
        }
    };
}

var loseloseHasCode = function (key) {
    var hash = 0;
    for (var i = 0, length = key.length; i < length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % 37;
}

HashTable.prototype = {
    constructor : HashTable,
    put : function(key, value) {
        var position = loseloseHasCode(key);
        
        console.log(`${position} - ${key}`);
        this.table[position] = value;
    },

    get : function(key) {
        return this.table[loseloseHasCode(key)];
    },

    remove : function(key) {
        this.table[loseloseHasCode(key)]  = undefined;
    },

    print : function () {
        for (var i = 0; i < this.table.length; i += 1 ) {
            if (this.table[i] !== undefined) {
                console.log(`${i}: ${this.table[i]}`);
            }
        }
    }
};

var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('Messi', 'Messi@email.com');
hash.put('dybala', 'dybala@email.com');
/*
console.log(hash.get('Gandalf'));
console.log(hash.get('Messi'));

hash.remove('Gandalf');
console.log(hash.get('Gandalf'));
*/
hash.print();