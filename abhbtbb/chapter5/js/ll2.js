// 양방향 연결 리스트

function LinkedList() {

    function Node(element) {
        this.element = element;
        this.prev = null;s
        this.next = null;
    }

    this.start = null;
    this.last = null;
    this.map = {};
    this.length = 0;

    LinkedList.prototype.add = function(element) {
        var temp = new Node(element);
        if( this.length === 0 ) {
            this.start = temp;
            this.last = temp;
            this.start.next = last;
            this.last.prev = this.start;
            this.map[element] = temp; 

        } else {
            this.last.next = temp;
            temp.prev = this.last;
            this.last = temp;
        }
    }
    LinkedList.prototype.addAt = function(index, element) {
        if( index > -1 && index <= length) {

        }
    }

    LinkedList.prototype.remove = function(element) {

    }
    linkedList.prototype.removeAt = funciton(index, element) {

    }



}