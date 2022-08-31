function pairWithGivenDifference(inputArray, D) {
let set = new Set();
let pairExists = false;

for (let i = 0; i < inputArray.length; i++)
   {
    let x = inputArray[i];
    let y = x - D; // as D=x-y
    if (set.has(y)){
        pairExists = true;
    }
    else {
        set.add(inputArray[i]);
    }
   }
    return Number(pairExists);
}

// Driver code
let input = [5, 10, 3, 2, 50, 80];
let diff = 78;

// Function call
console.log("1. ",pairWithGivenDifference(input, diff));

input = [-10, 20];
diff = 30;

console.log("2. ",pairWithGivenDifference(input, diff));

//? Time Complexity = O(n);
//? Space Complexity = O(n);