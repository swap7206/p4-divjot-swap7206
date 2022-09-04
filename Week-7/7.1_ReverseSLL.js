/**
 //! SLL
 //? Problem 7.1: Reverse the Linked
 * 
 * Given a linked list of N nodes. The task is to reverse this list.
 * 
 * Example 1: Input: LinkedList: 1->2->3->4->5->6 Output: 6 5 4 3 2 1 Explanation: After reversing the list,elements are 6->5->4->3->2->1.
 * Example 2: Input: LinkedList: 2->7->8->9->10 Output: 10 9 8 7 2 Explanation: After reversing the list,elements are 10->9->8->7->2.
 * 
 //? Expected Time Complexity: O(N). Expected Auxiliary Space: O(1).Constraints: 1 <= N <= 104
 */

const {createSLL, traverseSLL} = require("./SLL.js")

const reverseSLL = (head) => {
    let prev = null, curr = head, after = null;
    while (curr.next !== null) {
        after = curr.next;
        curr.next = prev;
        prev = curr;
        curr = after;
    }
    curr.next = prev;
    head = curr;

    return head;
}

console.group("example-1");
console.log("input");
let inputListHead = createSLL([1, 2, 3, 4, 5, 6]);
traverseSLL(inputListHead);

console.log("output");
let reversedListHead = reverseSLL(inputListHead);
traverseSLL(reversedListHead);
console.groupEnd();


console.group("example-2");
console.log("input");
inputListHead = createSLL([2, 7, 8, 9, 10]);
traverseSLL(inputListHead);

console.log("output");
reversedListHead = reverseSLL(inputListHead);
traverseSLL(reversedListHead);
console.groupEnd();

/**
example-1
  input
  1 -> 2 -> 3 -> 4 -> 5 -> 6
  output
  6 -> 5 -> 4 -> 3 -> 2 -> 1
example-2
  input
  2 -> 7 -> 8 -> 9 -> 10
  output
  10 -> 9 -> 8 -> 7 -> 2
 */

 // Time Complexity = O(n)
 // space Complexity = O(1)