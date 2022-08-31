## Pesto-p4 | WEEK3-JS | Exercise 3.4 | Swapnil Akolkar

*** 
Refactor  the above stack implementation, using the concept of closure, such that there is noway to access items array outside of `createStack()` function scope.
***

```
function createStack() {
    return{
     items:[],
     push(item){
      this.items.push(item);
     },
     pop(){
      return this.items.pop();
    }
    };
}
   const stack= createStack();
   stack.push(10);
   stack.push(5);
   stack.pop();//=>5
   stack.items;//=>[10]
   stack.items=[10,100,1000];// Encapsulation broken!
 ```


```
function createStack() {
    // Write your code here ...
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();//=>5
stack.items;//=>undefined
 ```

Guidelines:
1. The candidate should be able to refactor the code and get the desired output.
2. The candidate should be able to explain the code why it was not working before.
3. The candidate should be able to explain the code why it is working now.

Outcome:
1. The candidates will understand how ‘closure’ works in JS.
2. The candidates will understand how ‘encapsulation’ works in JS

### Solution

```
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
```

*[Refrence](https://learnersbucket.com/tutorials/algorithms/stack/)*