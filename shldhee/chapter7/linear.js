
function HashTable() {
    this.table = [];
}

// valuePair

function ValuePair(key, value) {
    this.key = key;
    this.value = value;
}
ValuePair.prototype.toString = function() {
        return `[${this.key} - ${this.value}]`;
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
        if (this.table[position] == undefined) {
            this.table[position] = new ValuePair(key, value);
        } else {
            var index = ++position;
            while (this.table[index] != undefined) {
                index++;
            }
            this.table[index] = new ValuePair(key, value);
        }
    },

    get : function(key) {
        var position = loseloseHasCode(key);
        if (this.table[position] !== undefined) {
            if (this.table[position].key === key) {
                return this.table[position].value;
            } else {
                var index = ++position;
                while (this.table[index] === undefined || this.table[index].key !== key) {
                    index++;
                }
                if (this.table[index].key === key) {
                    return this.table[index].value;
                }
            }
        }
        return undefined;
    },

    remove : function(key) {
        var position = loseloseHasCode(key);

        if (this.table[position] !== undefined) {
            if (this.table[position].key === key) {
                this.table[index] = undefined;
            } else {
                var index = ++position;
                while (this.table[index] === undefined || this.table[index].key !== key) {
                    index++;
                }
                if (this.table[index].key === key) {
                    this.table[index] = undefined;
                }
            }
        }
        return undefined;
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
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'aaron@email.com');
hash.put('Donnie', 'donnie@email.com');
hash.put('Ana', 'ana@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Mindy', 'mindy@email.com');
hash.put('Paul', 'paul@email.com');
hash.put('Nathan', 'nathan@email.com');
hash.get("John");
hash.get("Paul");
