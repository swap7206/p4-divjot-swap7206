/**
//? WEEK 6

//! 6.1: Max Sum Contiguous Subarray
Find the contiguous subarray within an array, A of length N which has the largest sum.
Input Format:The first and the only argument contains an integer array,A.

    Output Format: Return an integer representing the maximum possible sum of the contiguous subarray.
    Constraints: 1 <= N <= 1e6 -1000 <= A[i] <= 1000

//? For example:
    Input 1: A = [1, 2, 3, 4, -10]
    Output 1: 10 Explanation 1: The subarray [1, 2, 3, 4] has the maximum possible sum of 10.

    Input 2: A = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    Output 2: 6 Explanation 2: The subarray [4,-1,2,1] has the maximum possible sum of 6.
*/

function maxSumSubarray(inputArray) {
  let maxSum = -Infinity;
  let currentSum = 0;
  let subArrayStart = 0;
  let subArrayEnd = 0;
  for (let i = 0; i < inputArray.length; i++) {
    //compare currentSum add current number 
    //with current number and store the maximum value & subarray start index
    if (inputArray[i] > currentSum + inputArray[i]) {
      subArrayStart = i;
    }
    currentSum = Math.max(inputArray[i], currentSum + inputArray[i]);

    //compare maxSum with currentSum and store the greater value & subarray end index
    if (currentSum > maxSum) {
      subArrayEnd = i - subArrayStart + 1;
    }
    maxSum = Math.max(currentSum, maxSum);

  }
  return { max_Sum: maxSum, subArray: inputArray.splice(subArrayStart, subArrayEnd) };
}

console.log(maxSumSubarray([1, 2, 3, 4, -10]));
console.log(maxSumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//? time complexity = O(n)
//? space complexity = O(1)