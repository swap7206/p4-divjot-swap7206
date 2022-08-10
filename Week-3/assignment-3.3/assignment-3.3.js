/**
* ?Pesto-p4 | WEEK3-JS | Exercise 3.3 | Swapnil Akolkar

* !Question
* *What is the output of the below problem and why?

* Guidelines:
*   1.The candidate should be able to explain the code with the desired output.

* Outcome:
*   1.The candidates will understand how ‘closure’ works in JS.
*   2.The candidates will understand how ‘encapsulation’ works in JS.Exercise 
*/
function createIncrement(){
    let count=0;
    function increment(){
     count ++;
   }
    let message=`Count is ${count}`;
    function log(){
     console.log(message);
   }
    return[increment,log];
   }
   const[increment,log]=createIncrement();
   increment();
   increment();
   increment();
   log();// What is logged? //? Count is 0

/**
* !Answer
* *`increment()`* increases the counter but message is defined outside log function and is executed only once
* *when `createIncrement()` is called at line no 25.
* *thus, irrespective of how many times increment function is called `message` variable has fixed value "Count is 0"
*/
