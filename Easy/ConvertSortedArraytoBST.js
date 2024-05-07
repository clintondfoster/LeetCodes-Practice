// Convert Sorted Array to Binary Search Tree
// Given an integer array nums where the elements are sorted in ascending order, convert it to a
// height-balanced
//  binary search tree.

// Example 1:


// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:


// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in a strictly increasing order.
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 //take the sorted array, and create a BST so that the subtrees of every node never differ by more than one. Find the middle element of the array, assign it as the root.
 //Use recursion to construct subtrees.
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) return null;

    //helper function to create BST
    function convertList (left, right) {
        if (left > right) {
            return null;
        }
        //choose the left middle node as the root
        let mid = Math.floor((left + right) / 2);

        //create a treenode with the middle element
        let node = new TreeNode(nums[mid]);

        //Recursityly build BST
        node.left = convertList(left, mid - 1);
        node.right = convertList(mid + 1, right);
        return node;
    }
    return convertList(0, nums.length - 1);
};