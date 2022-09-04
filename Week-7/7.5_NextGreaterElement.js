/**
 //! STACK AND QUE
 //? Problem 7.5: Next Greater Element
 * 
 * Given an array arr{} of size N having distinct elements,
 * the task is to find the next greater element for each element of the array in order of their appearance in the array.
 * Next greater element of an element in the array is the nearest element on the right which is greater than the current element.
 * If there does not exist next greater of currentelement, then next greater element for current element is -1.
 * For example, next greater element of the last element is always -1.
 * 
 * Example 1: Input: N = 4, arr[] = [1 3 2 4] Output: [3 4 4 -1]
 * Explanation: In the array, the next larger element to 1 is 3 , 3 is 4 , 2 is 4 and for 4 ? since it doesn't exist, it is -1.
 * 
 * Example 2: Input: N = 5, arr[] [6 8 0 1 3] Output: [8 -1 1 3 -1]
 * Explanation: In the array, the next larger element to 6 is 8, for 8 there is no larger elements hence it is -1, for 0 it is 1 ,for 1 it is 3
 * and then for 3 there is no larger element on right and hence -1.
 * 
 //? Expected Time Complexity : O(N) Expected Auxilliary Space : O(N)
 * Constraints: 1 ≤ N ≤ 106 1 ≤ Ai ≤ 1018
 */

 const nextGreaterElement = (inputArr) => {
    let indicesStack = [];
    let NGEarr = [];

    for (let i = 0;  i < inputArr.length; i++) {
        NGEarr[i] = -1;
        if (indicesStack.length === 0) {
            indicesStack.push(i);
            continue;
        }

        const index = indicesStack[indicesStack.length - 1]
        while (indicesStack.length !== 0 && inputArr[index] < inputArr[i]) {
                NGEarr[index] = inputArr[i];
                indicesStack.pop();
        }
        indicesStack.push(i);
    }

    return NGEarr;
 }

 let input = [1, 3, 2, 4];
 console.log("input:", input, "output:", nextGreaterElement(input)); //? input: [ 1, 3, 2, 4 ] output: [ 3, -1, 4, -1 ]

 input = [6, 8, 0, 1, 3];
 console.log("input:", input, "output:", nextGreaterElement(input)); //? input: [ 6, 8, 0, 1, 3 ] output: [ 8, -1, 1, 3, -1 ]

 // Time Complexity = O(n) //? each element visited at max twice
 // space Complexity = O(n)
