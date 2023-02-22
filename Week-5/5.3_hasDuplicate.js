/**
 * Exercise 5.2
 * Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
 * 
 * Guidelines:
 * 1. JS function should have Set API implemented.
 * 2. Bonus - if space and time complexity is taken care.
 */

 function hasDuplicate(inputArray){
    const uniqueSet = new Set(inputArray);
    return (uniqueSet.size !== inputArray.length);
}

let input = [1, 5, 2, 3, 4, 5, 6];
console.log(hasDuplicate(input)); //! true

input = [1, 5, 2, 3, 4, 6];
console.log(hasDuplicate(input)); //! false

//? Time Complexity = O(n)
//? Space Complexity = O(n)