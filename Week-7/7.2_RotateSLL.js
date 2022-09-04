/**
 //! SLL
 //? Problem 7.2: Rotate Linked List
 * Given a singly linked list of size N. The task is to left-shift the linked list by k nodes,
 * where k is a given positive integer smaller than or equal to length of the linked list.
 * Example 1: Input: N = 5 value[] = {2, 4, 7, 8, 9} k = 3 Output: 8 9 2 4 7
 * Explanation: Rotate 1: 4 -> 7 -> 8 -> 9 -> 2 Rotate 2: 7 -> 8 -> 9 -> 2 -> 4 Rotate 3: 8 -> 9 -> 2 -> 4 -> 7
 * 
 * Example 2: Input: N = 8 value[] = {1, 2, 3, 4, 5, 6, 7, 8} k = 4 Output: 5 6 7 8 1 2 3 4
 * 
 //? Expected Time Complexity: O(N). Expected Auxiliary Space: O(1).Constraints: 1 <= N <= 103 1 <= k <= N
 */

 const {createSLL, traverseSLL} = require("./SLL.js")

 const rotateListKTimes = (head, k) => {
     let tail = head, n = 1;             
     while (tail.next) {
      n++;
      tail = tail.next;
     }
     k %= n;
     if(k === 0)
     return head;

     tail.next = head;
    //  let steps = n-k;
      let newTail = tail;
      while(k--){
        newTail = newTail.next;
      }
      let newHead = newTail.next;
      newTail.next = null;
      return newHead;
 }
 
 console.group("example-1");
 console.log("input");
 let inputListHead = createSLL([2, 4, 7, 8, 9]);
 let k = 3;
 traverseSLL(inputListHead);
 console.log("k=", k);
 
 console.log("output");
 let rotatedListHead = rotateListKTimes(inputListHead, k);
 traverseSLL(rotatedListHead);
 console.groupEnd();
 
 console.group("example-2");
 console.log("input");
 inputListHead = createSLL([1, 2, 3, 4, 5, 6, 7, 8]);
 k = 4;
 traverseSLL(inputListHead);
 console.log("k=", k);
 
 console.log("output");
 rotatedListHead = rotateListKTimes(inputListHead, k);
 traverseSLL(rotatedListHead);
 console.groupEnd();
 
 /**
example-1
  input
  2 -> 4 -> 7 -> 8 -> 9
  k= 3
  output
  8 -> 9 -> 2 -> 4 -> 7
example-2
  input
  1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
  k= 4
  output
  5 -> 6 -> 7 -> 8 -> 1 -> 2 -> 3 -> 4
  */
 
 // Time Complexity = O(n)
 // space Complexity = O(1)
 