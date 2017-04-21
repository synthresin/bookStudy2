function Dictionary() {
    var items = {};

    this.has = function(key) {
        return key in items;
    }

    this.set = function(key, value) {
        items[key] = value;
    };

    this.remove = function(key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    }

    this.get = function(key) {
        return this.has(key) ? items[key] : undefined;
    }

    this.values = function() {
        var values = [];
        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    }
    this.clear = function() {
        items = {};
    };

    // size 메소드는 구하는법
    // 1. add, remov 메소드에 length변수를 넣어 실행될때마다 값을 변경
    // 2. Object 클래스에 내장된 함수이용 IE9 이상 (Object.keys(obj) 객체의 모든 프로퍼티의 키값을 배열로 변환한다.)
    /*
    var a = {
            name: "LEE",
            age: 13,
            city: "Seoul"
        }
    a; //Object {name: "LEE", age: 13, city: "Seoul"}
    Object.keys(a); // ["name", "age", "city"]
    */
    this.size = function () {
        return Object.keys(items).length;
    }
    this.sizeLegacy = function() {
        var count = 0;
        for (var prop in items) {
            if(items.hasOwnProperty(prop))
                count++;
        }
        return count;
    };

    this.keys = function () {
        return Object.keys(items);
    };

    this.getItems = function() {
        return items;
    }
}

var dictionary = new Dictionary();
var a = dictionary.set('LEE', 'lee@gmail.com');
var b = dictionary.set('KIM', 'kim@gmail.com');

console.log(dictionary.has('LEE'));
console.log(dictionary.has('KIM'));
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('LEE'));

dictionary.remove('LEE');

console.log(dictionary.keys());
console.log(dictionary.values());
console.log('get',dictionary.getItems());