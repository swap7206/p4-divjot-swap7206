/**
 //! STACK AND QUE
 //? Problem 7.4: Parenthesis Checker
 * 
 * Given an expression string x. Examine whether the pairs and the orders of“{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
 * For example, the function should return 'true' for exp= “[()]{}{()()}” and 'false' for exp = “[(])”.
 * 
 * Example 1: Input:{([])} Output: true
 * Explanation: { ( [ ] ) }.
 * Same colored brackets can form balaced pairs, with 0 number of unbalanced bracket.
 * 
 * Example 2: Input: () Output: true
 * Explanation: () Same bracket can form balanced pairs, and here only 1 type of bracket is present and in balanced way.
 * 
 * Example 3: Input: ([] Output: false
 * Explanation:([]. Here square bracket is balanced but the small bracket is not balanced and Hence , the output will be unbalanced.
 * 
 //? Expected Time Complexity: O(|n|) Expected Auixilliary Space: O(|n|) Constraints: 1 ≤ |n| ≤ 32000
 */

const checkParanthesis = (inputStr) => {
    let inputArr = inputStr.replace(/\s/g, '').split("");
    const ParanthesisMap = new Map([
        ["(", ")"],
        ["[", "]"],
        ["{", "}"]
    ]);
    let unbalancedParanthesisStack = [];

    unbalancedParanthesisStack.push(inputArr[0]);
    for (let i = 1; i < inputArr.length; i++) {
        latestUnbalanced = unbalancedParanthesisStack[unbalancedParanthesisStack.length - 1];
        if (ParanthesisMap.get(latestUnbalanced) === inputArr[i]) {
            unbalancedParanthesisStack.pop();
        }
        else {
            unbalancedParanthesisStack.push(inputArr[i]);
        }
    }

    const isBalanced = unbalancedParanthesisStack.length === 0;

    return isBalanced ? isBalanced : { isBalanced: isBalanced, unbalancedParanthesis: unbalancedParanthesisStack };
}

let input = "{([])}";
console.log("input:", input, "output:", checkParanthesis(input)); //? input: "{([])}" output: true

input = "()";
console.log("input:", input, "output:", checkParanthesis(input)); //? input: "()" output: true

input = "([]";
console.log("input:", input, "output:", checkParanthesis(input)); //? input: "()" output: { isBalanced: false, unbalancedParanthesis: [ '(' ] }

input = "([] () [] { ({})]";
console.log("input:", input, "output:", checkParanthesis(input)); //? input: "()" output: { isBalanced: false, unbalancedParanthesis: [ '(', '{', ']' ] }

 // Time Complexity = O(n)
 // space Complexity = O(n)
