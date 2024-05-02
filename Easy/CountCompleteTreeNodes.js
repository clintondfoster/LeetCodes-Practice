/** Count Complete Tree Nodes

Given the root of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Design an algorithm that runs in less than O(n) time complexity.


Example 1:


Input: root = [1,2,3,4,5,6]
Output: 6
Example 2:

Input: root = []
Output: 0
Example 3:

Input: root = [1]
Output: 1
 
Constraints:

The number of nodes in the tree is in the range [0, 5 * 104].
0 <= Node.val <= 5 * 104
The tree is guaranteed to be complete.


 * 
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
var countNodes = function(root) {
    
    function depthLeftNode(root) {
        if (!root) return 0;
        return 1 + depthLeftNode(root.left)
    }
    function depthRightNode(root) {
        if (!root) return 0;
        return 1 + depthRightNode(root.right)
    }

    function exists(root) {
        let ldepth = depthLeftNode(root);
        let rdepth = depthRightNode(root);

        if (ldepth === rdepth) //same height for l and r sub tree
        return Math.pow(2, ldepth) - 1; //value of x raised to the power of y. Perfect tree is 2^depth - 1.
        return 1 + exists(root.left) + exists(root.right)
    }
    return exists(root);

};