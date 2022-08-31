/**
 //? Problem 6.6 : 3 sum
 * Given an array S of n integers, find three integers in S such that the sum is closest to agiven number,target.
 * Return the sum of the three integers.Assume that there will only be one solution.

 * Example: given array S = {-1 2 1 -4}, and target = 1. The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)
 */
function closestSum(inputArray, target) {

        // Sort the array
        inputArray.sort((a, b) => a - b);
     
        // To store the closest sum
       // overflowing condition
        let closestSum = 1000000000;
     
        // Fix the smallest number among
        // the three integers
        for (let i = 0; i < inputArray.length - 2; i++)
        {
     
            // Two pointers initially pointing at
            // the last and the element
            // next to the fixed element
            let ptr1 = i + 1, ptr2 = inputArray.length - 1;
     
            // While there could be more pairs to check
            while (ptr1 < ptr2) {
     
                // sum of the current triplet
                let sum = inputArray[i] + inputArray[ptr1] + inputArray[ptr2];
     
                // If the sum is more closer than
                // the current closest sum
                if (Math.abs(target - sum) < Math.abs(target - closestSum))
                {
                    closestSum = sum;
                }
     
                // If sum is greater then x then decrement
                // the second pointer to get a smaller sum
                if (sum > target) {
                    ptr2--;
                }
     
                // Else increment the first pointer
                // to get a larger sum
                else {
                    ptr1++;
                }
            }
        }
     
        return closestSum;
}

// Driver code
let input = [-1, 2, 1, -4];
let target = 1;

// Function call
console.log("Closest Sum = ",closestSum(input, target));

//? Time Complexity = O(n^2);
//? Space Complexity = O(1);