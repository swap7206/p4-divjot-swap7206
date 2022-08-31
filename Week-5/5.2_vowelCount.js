/**
 * Exercise 5.2
 * Write a function called vowelCount which accepts a string and returns a map where the keys are numbers
 * and the values are the count of the vowels in the string.
 * 
 * Guidelines:
 * 1. JS function should have Map API implemented.
 * 2. Map’s set functionality should have been used.
 * 3. Bonus - if space and time complexity is taken care.
 * 
 * Outcome: Understanding of Map API and its functionalities
 */

 function isVowel(char){
    return "aeiou".includes(char);
   }

   function vowelCount(inputString){
    const vowelMap = new Map();
    for (let char of inputString) {
     let lowerCaseChar = char.toLowerCase();
     if(isVowel(lowerCaseChar)){
      if(vowelMap.has(lowerCaseChar)){
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1 ) ;
      } else {
        vowelMap.set(lowerCaseChar, 1 ) ;
      }
     }
   }
    return vowelMap ;
}

console.log(vowelCount("this Is A random STring which Contains A,E,I,O,U"));

//? Time Complexity = O(n)
//? Space Complexity = O(n)