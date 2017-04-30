<<<<<<< HEAD

function HashTableChaining() {
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

=======
>>>>>>> ff227bcd4bfb51241f84570932113c241e1f714c
var loseloseHasCode = function (key) {
    var hash = 0;
    for (var i = 0, length = key.length; i < length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % 37;
}

<<<<<<< HEAD
HashTableChaining.prototype = {
    constructor : HashTableChaining,
    put : function(key, value) {
        var position = loseloseHasCode(key);
        
        if (this.table[position] == undefined) {
            this.table[position] == new LinkedList();
=======
function HashTable() {
    this.table = [];
}

HashTable.prototype = {
    constructor : HashTable,
    put : function(key, value) {
        var position = loseloseHasCode(key);

        if (this.table[position] == undefined) {
            this.table[position] = new LinkedList();
>>>>>>> ff227bcd4bfb51241f84570932113c241e1f714c
        }
        this.table[position].append(new ValuePair(key, value));
    },

    get : function(key) {
        var position = loseloseHasCode(key);

<<<<<<< HEAD
        if(this.table[position] !== undefeind) {
=======
        if (this.table[position] !== undefined) {
>>>>>>> ff227bcd4bfb51241f84570932113c241e1f714c
            var current = this.table[position].getHead();

            while(current.next) {
                if(current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }

            if (current.element.key === key) {
                return current.element.value;
            }
        }
        return undefined;
    },

    remove : function(key) {
        var position = loseloseHasCode(key);

<<<<<<< HEAD
        if (this.table[position] !== undefined) {
            var current = this.table[position].getHead();
            while(current.next) {
                if (current.element.key === key) {
                    table[position].remove(current.element);
                    if(table[position].isEmpty()) {
                        table[position] = undefined;
                    }
                    return true;
                }
                current = current.next
            }

            if (current.element.key === key) {
                this.table[position].remove(current.element);
                if (this.table[position].isEmpty()) {
                    this.table[position] = undefined;
                }
                return ture;
=======
        if (table[position] !== undefined) {

            var current = table[position].getHead();
            while(current.next) {
                if (current.element.key === key) {
                    this.table[position].remove(current.element);
                    if (this.table[position].isEmpty()) {
                        this.table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }

            if (current.element.key === key) {
                table[position].remove(current.element);
                if (table[position].isEmpty()) {
                    table[position] = undefined;
                }
                return true;
>>>>>>> ff227bcd4bfb51241f84570932113c241e1f714c
            }
        }
        return false;
    },

    print : function () {
        for (var i = 0; i < this.table.length; i += 1 ) {
            if (this.table[i] !== undefined) {
                console.log(`${i}: ${this.table[i]}`);
            }
        }
    }
};

<<<<<<< HEAD

function LinkedList() {

    var Node = function(element) {
        this.element = element;
        this.next = null;
    };

    var length = 0;
    var head = null;

    this.append = function(element) {
        var node = new Node(element), // Node함수를 이용해 node 객체 생성
                        current;

        if (head === null) { // 리스트가 비어 있으면
            head = node; // head에 새 노드를 추가
        } else { // 이미 노드가 있으면
            current = head; // 끝에 새 원소를 할려면 마지막 원소를 찾아야 한다. 첫 번째 원소를 가리키고 있는 참조 변수
=======
// valuePair

function ValuePair(key, value) {
    this.key = key;
    this.value = value;
}
ValuePair.prototype.toString = function() {
        return `[${this.key} - ${this.value}]`;
    }

// LinkedList
function LinkedList() {
    this.length = 0;
    this.head = null;
};

function Node(element) {
    this.element = element;
    this.next = null;
};

LinkedList.prototype = {
    constructor : LinkedList,

    append : function(element) {
        var node = new Node(element), // Node함수를 이용해 node 객체 생성
                        current;

        if (this.head === null) { // 리스트가 비어 있으면
            this.head = node; // head에 새 노드를 추가
        } else { // 이미 노드가 있으면
            current = this.head; // 끝에 새 원소를 할려면 마지막 원소를 찾아야 한다. 첫 번째 원소를 가리키고 있는 참조 변수
>>>>>>> ff227bcd4bfb51241f84570932113c241e1f714c
            while(current.next){ // current.next === null 될때까지 이때 current가 마지막 원소
                current = current.next;
            }

            current.next = node; // 마지막 원소를 새로 추가한 원소(node)를 가리키게 한다.
        }
        //추가한 Node는 마지막 원소이므로 next는 당연히 null
<<<<<<< HEAD
        length++; // 추후 리스트 크기 참조할 수 있으므로 하나 증가
    };
    this.insert = function(position, element) { //임의의 위치에 원소를 삽입
        if (position >=0 && position <= length) {

            var node = new Node(element),
                current = head,
=======
        this.length++; // 추후 리스트 크기 참조할 수 있으므로 하나 증가
    },

    insert : function(position, element) {
        if (position >=0 && position <= length) {

            var node = new Node(element),
                current = this.head,
>>>>>>> ff227bcd4bfb51241f84570932113c241e1f714c
                previous,
                index = 0;

            if (position === 0) { // 첫번째로 추가

                node.text = current; // 첫번째였던 current를 node.text에 추가해서 2번째로 보냄
<<<<<<< HEAD
                head = node; // head에 node를 할당해 첫번째로 추가
=======
                this.head = node; // head에 node를 할당해 첫번째로 추가
>>>>>>> ff227bcd4bfb51241f84570932113c241e1f714c

            } else {
                while (index++ < position) {
                    previous = current;  // 그 이전의 원소
                    current = current.next; // 삽입할 위치 바로 다음의 원소
                }
                node.next = current; // p107
                previous.next = node;
            }

<<<<<<< HEAD
            length++;
=======
            this.length++;
>>>>>>> ff227bcd4bfb51241f84570932113c241e1f714c

            return true;
        } else {
            return false;
        }
<<<<<<< HEAD
    };
    this.removeAt = function(position) {

        if(position > -1 && position < length) { // 0보다 크거나 length보다 작아야 된다.
            var current = head,
=======
    },

    removeAt : function(position) {
        if(position > -1 && position < this.length) { // 0보다 크거나 length보다 작아야 된다.
            var current = this.head,
>>>>>>> ff227bcd4bfb51241f84570932113c241e1f714c
                previous,
                index = 0;

            if (position === 0) {
<<<<<<< HEAD
                head = current.next; // 첫 번째 원소라면 현재 current === head 이므로 head = current.next 하여 두 번째 원소로 간다.
=======
                this.head = current.next; // 첫 번째 원소라면 현재 current === head 이므로 head = current.next 하여 두 번째 원소로 간다.
>>>>>>> ff227bcd4bfb51241f84570932113c241e1f714c
            } else {

                while (index++ < position) { // 원하는 위치(position)까지 루프를 돌림
                    // previous는 current,
                    previous = current; // 현재 (삭제할??)원소의 바로 이전 원소는 previous
                    current = current.next; // 루프문 내에서는 current는 항상 리스트의 현재 (삭제할??)원소를 가리키는 변수???? 그 다음 아니고?
                }

            previous.next = current.next; // p104 그림 참조 [previous,previous.next]. [current, current.next] , []
            }

<<<<<<< HEAD
            length--;
=======
            this.length--;
>>>>>>> ff227bcd4bfb51241f84570932113c241e1f714c

            return current.element;

        } else {
            return null;
        }
<<<<<<< HEAD
    };

    this.remove = function(element) {
        var index = this.indexOf(element);
        console.log('index', index);
        return this.removeAt(index);
    };
    this.indexOf = function(element) {

        var current = head,
            index = 0;

        while(current) {
            /*console.log('element', element);
            console.log('current.element', current.element);*/
=======
    },

    remove : function(element) {
        var index = this.indexOf(element);
        console.log('index', index);
        return this.removeAt(index);
    },

    indexOf : function(element) {
        var current = this.head,
            index = 0;

        while(current) {
>>>>>>> ff227bcd4bfb51241f84570932113c241e1f714c
            if (element === current.element) {
                return index;
            }
            index+=1;
            current = current.next;
        }

        return -1;
<<<<<<< HEAD
    };
    this.isEmpty = function() {
        return length === 0;
    };
    this.size = function() {
        return length;
    };
    this.toString = function() {

        var current = head, // 리스트의 모든 원소를 순회하기 위해 head를 시작점, current변수를 인덱스 삼아 루프문을 실행
=======
    },

    isEmpty : function () {
        return this.length === 0;
    },

    size : function () {
        return this.length;
    },

    toString : function () {
        var current = this.head, // 리스트의 모든 원소를 순회하기 위해 head를 시작점, current변수를 인덱스 삼아 루프문을 실행
>>>>>>> ff227bcd4bfb51241f84570932113c241e1f714c
            string = '';

        while(current) {
            string += current.element + ','; // 루프 값 이어 붙히기
            current = current.next;
        }
        return string;
<<<<<<< HEAD
    };
    this.print = function() {}

    this.getHead = function () {
        return head;
    };
};

var hash = new HashTableChaining();
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
=======
    },

    print : function() {
        console.log(this.toString());
    },

    getHead : function() {
        return this.head;
    }
}
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
hash.print();
>>>>>>> ff227bcd4bfb51241f84570932113c241e1f714c
