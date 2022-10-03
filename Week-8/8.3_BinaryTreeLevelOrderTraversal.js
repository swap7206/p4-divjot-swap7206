class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function insertIntoTree(i, arr) {
    let curr = null;
    if (i < arr.length) {
        curr = new TreeNode(arr[i]);
        curr.left = insertIntoTree(2 * i + 1, arr);
        curr.right = insertIntoTree(2 * i + 2, arr);
    }
    return curr;
}

function createTree(arr) {
    return insertIntoTree(0, arr);
}

function inorder(root) {
    try {
        if (root !== null) {
            inorder(root.left);
            process.stdout.write(" " + (root.value?.toString() || null) + ' ');
            inorder(root.right);
        }
    }
    catch (err) {
        console.log("root", root, "error", err)
    }
}


function levelorder(root) {
    if (root === null) {
        return [];
    }

    let result = [[root.value]];
    let levelArr = [];
    let subQueue = [];
    let queue = [];

    queue.push(root);

    while (queue.length !== 0) {
        let node = queue.shift();
        if (node.left !== null) {
            subQueue.push(node.left);
            node.left.value && levelArr.push(node.left.value);
        }
        if (node.right !== null) {
            subQueue.push(node.right);
            node.right.value && levelArr.push(node.right.value);
        }
        if (queue.length === 0 ) {
            queue = subQueue;
            if (levelArr.length !== 0) {
                result.push(levelArr);
            }
            subQueue = [];
            levelArr = [];
        }
    }

    return result;
}


let arr = [3, 9, 20, null, null, 15, 7];
root = createTree(arr);

console.group("Example 1");
console.log("input", arr);
console.log("inorder traversal");
inorder(root)

console.log();
console.log("Binary Tree level Order traversal => ");
console.info(levelorder(root));
console.groupEnd("Example 1");

arr = [1];
root = createTree(arr);

console.group("Example 2");
console.log("input", arr);
console.log("inorder traversal");
inorder(root);

console.log();
console.log("Binary Tree level Order traversal => ");
console.log(levelorder(root));
console.groupEnd("Example 2");

arr = [];
root = createTree(arr);

console.group("Example 2");
console.log("input", arr);
console.log("inorder traversal");
inorder(root);

console.log();
console.log("Binary Tree level Order traversal => ");
console.log(levelorder(root));
console.groupEnd("Example 2");

/**
Example 1
  input [ 3, 9, 20, null, null, 15, 7 ]
  inorder traversal
 null  9  null  3  15  20  7
  Binary Tree level Order traversal =>
  [ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]
Example 2
  input [ 1 ]
  inorder traversal
 1
  Binary Tree level Order traversal =>
  [ [ 1 ] ]
Example 2
  input []
  inorder traversal

  Binary Tree level Order traversal =>
  []
 */