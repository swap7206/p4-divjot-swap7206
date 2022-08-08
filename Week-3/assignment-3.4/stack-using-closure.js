var createStack = (function () {
    return function Stack() {
        let items = [];
        this.push = function (item) {
            items.push(item);
        };

        this.pop = function () {
            return items.pop();
        };

        this.printStack = function () {
            return items;
        };

        //Peek top item from the Stack
        this.peek = function () {
            return items[items.length - 1];
        };

        //Is Stack empty
        this.isEmpty = function () {
            return items.length === 0;
        };

        //Clear the Stack
        this.clear = function () {
            items.length = 0;
        };

        //Size of the Stack
        this.size = function () {
            return items.length;
        };

    }
})();

const stack = new createStack();

stack.push(10);

stack.push(5);
console.log("push", stack.printStack());

stack.pop();//=>5
console.log("pop", stack.printStack());


console.log("peek  ", stack.peek());
console.log("isEmpty ", stack.isEmpty());
console.log("size ", stack.size());
console.log("pop ", stack.pop());
console.log("size ", stack.size());
stack.clear();
console.log("clear method called");
console.log("isEmpty ", stack.isEmpty());

console.log("stack.items ", stack.items, " stack.printStack() ", stack.printStack());

/**
push [ 10, 5 ]
pop [ 10 ]
peek   10
isEmpty  false
size  1
pop  10
size  0
clear method called
isEmpty  true
stack.items  undefined  stack.printStack()  []
 */