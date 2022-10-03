class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let root = null;


function inorder(root) {
    try {
        if (root !== null) {
            inorder(root.left);
            process.stdout.write(root.value.toString() + ' ');
            inorder(root.right);
        }
    }
    catch (err) {
console.log("root", root, "error",err)
    }
}

function inorderBSTList(root) {
    let BSTList = []
    if (root !== null) {
        BSTList = [...BSTList, ...inorderBSTList(root.left)];
        BSTList.push(root.value);
        BSTList = [...BSTList, ...inorderBSTList(root.right)];
    }
    return BSTList;
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

function isValidBST(root) {
    const traversedTree = inorderBSTList(root);
    console.log("traversedTree", traversedTree);
    let prev = -Infinity;
    for (let val of traversedTree) {
        if (val > prev) {
            prev = val;
        } else {
            return false;
        }
    }
    return true;
}

let arr = [2, 1, 3];
root = createTree(arr);
// inorder(root)

console.group("Example 1");
console.log("input", arr)
console.log("isValidBST =", isValidBST(root));
console.groupEnd("Example 1");

arr = [5, 1, 4, null, null, 3, 6];
root = createTree(arr);

console.group("Example 2");
console.log("input", arr);
console.log("isValidBST =", isValidBST(root));
console.groupEnd("Example 2");

/**
Example 1
  input [ 2, 1, 3 ]
  traversedTree [ 1, 2, 3 ]
  isValidBST = true
Example 2
  input [ 5, 1, 4, null, null, 3, 6 ]
  traversedTree [ null, 1, null, 5, 3, 4, 6 ]
  isValidBST = false
 */

// Create BST

// function createBSTRecur(root, key) {
//     if (root === null) {
//         root = new TreeNode(key);
//         return root;
//     }

//     if (key < root.value) {
//         root.left = createBSTRecur(root.left, key);
//     }
//     else if (key > root.value) {
//         root.right = createBSTRecur(root.right, key);
//     }

//     return root;
// }

// function createBST(arr) {
//     for (let a of arr) {
//         root = createBSTRecur(root, a);
//     }
//     return root;
// }
