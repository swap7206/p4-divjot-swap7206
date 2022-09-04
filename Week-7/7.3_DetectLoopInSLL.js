/**
 //! SLL
 //? Problem 7.2: Detect loop in a linked list
 * Given a linked list of N nodes. The task is to check if the linked list has a loop. Linkedlist can contain self loop.
 * Example 1:Input: N = 3 value[] = {1,3,4} x = 2 Output: True
 * Explanation: In above test case N = 3.The linked list with nodes N = 3 is given.
 * Then value of x=2 is given which means last node is connected with xth node of linked list.
 * Therefore, there exists a loop.
 * 
 * Example 2: Input: N = 4 value[] = {1,8,3,4}
 * x = 0
 * Output: False
 * Explanation: For N = 4 ,x = 0 means then last Node->next = NULL,
 * then the Linked list does not containsany loop.
 * 
 //? Expected Time Complexity: O(N) Expected Auxiliary Space: O(1) Constraints: 1 ≤ N ≤ 104 1 ≤ Data on Node ≤ 103
 */

 const {createSLL, traverseSLL} = require("./SLL.js")

 const createLoopInList = (head, x) => {
    let pivot = head;
    while (--x > 0) {
        pivot = pivot.next;
    }

    let tail = pivot;
    while (tail.next !== null) {
        tail = tail.next;
    }
    tail.next = pivot;
 }

 const loopTraversal = (head) => {
 let k = 15; //to break out of infinite loop => traversing while loop till (--k != null)
 let curr = head;
 let list = "";

 while(--k && curr) {
    list = list === "" ? curr.value : `${list} -> ${curr.value}`; //expectation: looped values should be repeated
    curr = curr.next;
 }
 console.log(list);
 }

 const detectLoopInList = (head) => {
    let slow = head, fast = head;
    let loopExists = false;
    let culpritNode, value = null;
    
    while (fast && fast.next)
    {
        slow = slow.next;
        fast = fast.next.next;

    if (slow === fast)
    {
        loopExists = true;
        slow = head;
        let i = 0;
        while (slow !== fast)
        {
            i++;
            slow = slow.next;
            fast = fast.next;
        }

        return {
            loopExists: loopExists,
            pivot: {
                culpritNode: i,
                value: slow.value
            }
        };
    }
}

return loopExists;
 }
 
 //! 1
 console.group("example-1");
 console.log("input");
 let inputListHead = createSLL([1, 3, 4]);
 let x = 2;
 traverseSLL(inputListHead);
 createLoopInList(inputListHead, x)
 console.log("pivot=", x);
 loopTraversal(inputListHead);
 
 console.log("output");
 let detectLoop = detectLoopInList(inputListHead);
 console.log(detectLoop);
 console.groupEnd();
 

 //! 2
 console.group("example-2");
 console.log("input");
 inputListHead = createSLL([1, 8, 3, 4]);
 x = 0;
 traverseSLL(inputListHead);
 createLoopInList(inputListHead, x)
 console.log("pivot=", x);
 loopTraversal(inputListHead);
 
 console.log("output");
 detectLoop = detectLoopInList(inputListHead);
 console.log(detectLoop);
 console.groupEnd();

 //! 3
 console.group("example-2");
 console.log("input");
 inputListHead = createSLL([1, 8, 3, 4]);
 traverseSLL(inputListHead);
 
 console.log("output");
 detectLoop = detectLoopInList(inputListHead);
 console.log(detectLoop);

 /**

example-1
  input
  1 -> 3 -> 4
  pivot= 2
  1 -> 3 -> 4 -> 3 -> 4 -> 3 -> 4 -> 3 -> 4 -> 3 -> 4 -> 3 -> 4 -> 3
  output
  { loopExists: true, pivot: { culpritNode: 1, value: 3 } }


example-2
  input
  1 -> 8 -> 3 -> 4
  pivot= 0
  1 -> 8 -> 3 -> 4 -> 1 -> 8 -> 3 -> 4 -> 1 -> 8 -> 3 -> 4 -> 1 -> 8
  output
  { loopExists: true, pivot: { culpritNode: 0, value: 1 } }


example-2
  input
  1 -> 8 -> 3 -> 4
  output
  false

  */
 
 //? Time Complexity = O(n)
 //? space Complexity = O(1)
 