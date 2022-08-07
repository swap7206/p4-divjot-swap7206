## Pesto-p4 | WEEK3-JS | Exercise 3.4 | Swapnil Akolkar

*** 
Refactor  the above stack implementation, using the concept of closure, such that there is noway to access items array outside of `createStack()` function scope.
***

```
function create Stack(){
  return{
   items:[],
}
   push(item){
    this.items.push(item);
   },
   pop(){
    return this.items.pop();
  }
  };
 const stack=create Stack();
 stack.push(10);
 stack.push(5);
 stack.pop();//=>5
 stack.items;//=>[10]
 stack.items=[10,100,1000];// Encapsulation broken!
 ```


```
function createStack(){
  // Write your code here ...
}
 const stack=createStack();
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