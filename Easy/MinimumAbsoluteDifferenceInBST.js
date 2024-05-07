// Minimum Absolute Difference In BST
// Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.


// Example 1:


// Input: root = [4,2,6,1,3]
// Output: 1
// Example 2:


// Input: root = [1,0,48,null,null,12,49]
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [2, 104].
// 0 <= Node.val <= 105

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 //find in order if given BST, iterate over the collection of nodes and find the min difference. Record the smallest difference during traversal.
 
 var getMinimumDifference = function(root) {
    let arr =[];

    function inOrder(node) {
        if (!node) return;

        if (node) {
            inOrder(node.left);
            arr.push(node.val);
            inOrder(node.right);
    }    
 }
 //inOrder will increasing order in BST
    inOrder(root);
    //the increasing order we find minimin diff by travelling linearly
    let minDiff = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++){
        minDiff = Math.min(minDiff, arr[i]-arr[i-1]);
    }
return minDiff;
}