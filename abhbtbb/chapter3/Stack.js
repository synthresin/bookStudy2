(function(module){
    var container = module || window;

    function Stack() {
        this._stack = [];
    }
    Stack.prototype.add = function(value) { this._stack.push(value); }
    Stack.prototype.out = function() { return this._stack.pop() }
    Stack.prototype.len = function() { return this._stack.length; }
    Stack.prototype.print = function() { console.log(this._stack); }
    Stack.prototype.clean = function() { this._stack = [];}

    container.Stack = Stack;
})(window);