//Symmetric Tree 
//Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 
// Example 1:


// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:


// Input: root = [1,2,2,null,3,null,3]
// Output: false
 

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100
 

// Follow up: Could you solve it both recursively and iteratively?


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
 //Recursive approach. both nodes null is true. one node is null return false. check left.left with right.right and left.right with right.left
 var isSymmetric = function(root) {
    if (!root) return true;
    //return recursion function
    return isMirror(root.left, root.right);
};

var isMirror = function(leftTree, rightTree) {
    if (!leftTree && !rightTree) return true;
    if (!leftTree || !rightTree) return false;
    //return true if values of root nodes are the same as well as left and righht values are symetrical 
    return (leftTree.val === rightTree.val) && isMirror(leftTree.left, rightTree.right) && isMirror (leftTree.right, rightTree.left)
    };

    
    //Iterative Approach. start with a queue containing two entries, (tree with itself). when not empty, dequeue two nodes and compare.
    //If both not-null and values match, queue their children (left with right) and (right with left)

    // var isSymmetrical = function(root) {
    //     let queue = [];
    //     queue.push(root, root) {
    //         let t1 = queue.shift();
    //         let t2 = queue.shift();
    //         if (!t1 && !t2) continue;
    //         if(!t1 || !t2) return false;
    //         if (t1.val !== t2.val) return false;
    //         queue.push(t1.left, t2.right);
    //         queue.push(t1.right, t2.left);
    //     }
    //     return true;
    // };