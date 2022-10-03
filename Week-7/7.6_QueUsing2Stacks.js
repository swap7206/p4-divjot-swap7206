/**
 //! STACK AND QUE
 //? Problem 7.6: Implement a Queue using 2 stacks 
 * Implement a Queue using 2 stacks s1 and s2 . A Query Q is of 2 Types
 * (i) 1 x (a queryof this type means pushing 'x' into the queue)
 * (ii) 2 (a query of this type means to popelement from queue and print the poped element)
 * 
 * Example 1:
 * Input: 5 
 * 1 2 1 3 2 1 4 2
 * Output: 2 3
 * 
 * Explanation:
 * In the first test case
 * 1 2 the queue will be {2}
 * 
 * 1 3 the queue will be {2 3}
 * 2  poped element will be 2 the queue will be {3}
 * 1 4 the queue will be {3 4}
 * 2  poped element will be 3.
 * 
 * Example 2:
 * Input: 41 2 2 2 1 4
 * Output: 2 -1
 * 
 * Explanation:
 * In the second testcase
 * 1 2 the queue will be {2}
 * 2  poped element will be 2 and then the queue will be empty 2 the queue is empty and hence -1
 * 1 4 the queue will be {4}.
 * 
 //? Expected Time Complexity : O(1) for push() and O(N) for pop() or O(N) for push() and O(1) for pop()
 //? Expected Auxilliary Space : O(1).
* Constraints: 1 <= Q <= 100 1 <= x <= 100
 */

  class Queue {
    constructor() 
    {
        this.stack1 = [];
        this.stack2 = [];
    }
    
    enqueue(data)
    {
        while(this.stack1.length !== 0)
        {
            this.stack2.push(this.stack1.pop());
        }

        this.stack1.push(data);
        while(this.stack2.length !== 0)
        {
            this.stack1.push(this.stack2.pop());
        }
    }

    dequeue()
    {
        if (this.stack1.length === 0)
        {
            console.log("queue underflow");
            return;
        }
        return this.stack1.pop();
    }
  }

  let queue = new Queue();

  let arr = [18, 44, 23, 1, 67];
  for (let val of arr)
  {
    queue.enqueue(val);
  }

  console.log(queue.dequeue());
  console.log(queue.dequeue());

 //? Expected Time Complexity : O(N) for push() and O(1) for pop()
 //! Expected Auxilliary Space : creating Queue O(N) | push O(1) | pop O(1)
