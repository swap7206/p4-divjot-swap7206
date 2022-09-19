
class TreeNode
{
  constructor(value)
  {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function insertIntoTree(i, arr)
{
  let curr = null;
  if(i < arr.length)
  {
    curr = new TreeNode(arr[i]);
    curr.left = insertIntoTree(2*i + 1, arr);
    curr.right = insertIntoTree(2*i + 2, arr);
  }
  return curr;
}

function createTree(arr)
{
  return insertIntoTree(0, arr);
}

function calculateDepth(root)
{
  if(root === null)
  {
    return 0;
  }

  let leftDepth = calculateDepth(root.left);
  let rightDepth = calculateDepth(root.right);

  if(leftDepth > rightDepth)
    return leftDepth + 1;
  else
    return rightDepth + 1;
}

let arr = [5,3,6,2,4];
let root = createTree(arr);

console.group("Example 1");
console.log("input", arr)
console.log("Max Depth =", calculateDepth(root));
console.groupEnd("Example 1");

arr = [3,9,20,null,null,15,7];
root = createTree(arr);

console.group("Example 2");
console.log("input", arr);
console.log("Max Depth =", calculateDepth(root));
console.groupEnd("Example 2");


arr = [1,null,2];
root = createTree(arr);

console.group("Example 3");
console.log("input", arr);
console.log("Max Depth =", calculateDepth(root));
console.groupEnd("Example 3");

/**
Example 1
  input [ 5, 3, 6, 2, 4 ]
  Max Depth = 3
Example 2
  input [ 3, 9, 20, null, null, 15, 7]
  Max Depth = 3
Example 3
  input [ 1, null, 2 ]
  Max Depth = 2
 */