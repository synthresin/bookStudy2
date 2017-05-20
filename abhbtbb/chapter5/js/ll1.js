 // 기본적인 연결 리스트
 
 function LinkedList() {

        // 헬퍼 클래스, 연결 리스트에 추가되는 원소이다.
        var Node = function (element) {
            this.element = element;     // 해당 원소 값
            this.next = null;           // 다음 노드 주소 저장
        }

        var _length = 0;                // private 원소 개수
        var _head = null;               // 연결 시작 지점

        // 리스트 맨 끝에 원소 추가
        this.append = function (element) {
            // 비어있는지 아닌지를 구별한다.
            var node = new Node(element);
            var current;

            if (_head === null) {
                _head = node;
            } else {
                current = _head;
                while (current.next !== null) {
                    current = current.next;
                }
                current.next = node;
            }
            _length++;
        };
        // 해당 위치에 원소 삽입
        this.insert = function (position, element) {
            var node = new Node(element);
            var previous;
            var current = _head;
            var index = 0;

            if (position > -1 && position <= _length) {
                // 첫번째 항목에 추가할 경우
                if (position < 1) {
                    _head = node;
                    node.next = current;

                } else {
                    while (index++ < position) {
                        previous = current;
                        current = current.next;
                    }
                    previous.next = node;
                    node.next = current;

                }
                _length++;
                return true;
            }
            return false;
        };
        // 해당위치에 있는 원소 삭제
        this.removeAt = function (position) {
            //해당값이 범위 내인지를 체크
            if (position > -1 && position < _length) {
                var current = _head;
                var previous, index = 0;

                if (position * 1 === 0) {
                    _head = current.next;
                } else {
                    while (index++ < position) {
                        previous = current;
                        current = current.next;
                    }
                    previous.next = current.next;
                }
                _length--;
                // 삭제된 대상을 반환해준다.
                return current.element;
            } else {
                return null;
            }
        };
        // 원소 삭제
        this.remove = function (element) {
            var current = _head;
            var previous = null;
            do {
                if (element === current.element) {
                    if(previous === null) {
                        _head = current.next;
                    } else {
                        previous.next = current.next;
                    }
                    return current.element;
                }
                previous = current;
                current = current.next;
            } while (current !== null);

            return null;
        };
        // 해당 원소의 인덱스 반환, 존재 하지 않을 경우 -1 반환
        this.indexOf = function (element) {
            var current = _head;
            var index = 0;
            while(current !== null) {
                if(current.element === element) {
                    return index;
                }
                current = current.next;
                index++;
            }
        };
        // 원소 개수를 반환
        this.size = function () { 
            var current = _head;
            var count = 0;
            while(current !== null) {
                current = current.next;
                count++;
            }
            return count;
        };
        // 원소 값 출력하기 위해서 toString 메소드를 오버라이드 한다.
        this.toString = function () { 
            var temp = "";
            var current = _head;
            while( current !== null) {
                temp += current.element + " ";
                current = current.next;
            }
            return temp;
        };
        // 프린트 한다.
        this.print = function () {
            var temp = "";
            var current = _head;
            while (current !== null) {
                temp += current.element + " ";
                current = current.next;
            }
            console.log(temp)
        };

        this.popData = function () {
            var temp = [];
            var current = _head;
            while (current !== null) {
                temp.push(current.element);
                current = current.next;
            }
            return temp;
        }
    }
