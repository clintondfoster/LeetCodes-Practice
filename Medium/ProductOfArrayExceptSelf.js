// //Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.


// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
 //without division we would use prefix and suffix method by creating two auxiliary arrays. //left[i] and right[i], and inilize left to left[i] = 1,
 //and right to right[n-1] = 1. fill both arrays, create answer[i] which is a product of both left and right arrays.

var productExceptSelf = function(nums) {
    const n = nums.length;
    let left = new Array(n).fill(1);
    let right = new Array(n).fill(1);
    let answer = new Array(n)

    //Build out the prefix 
    for (let i = 1; i < n; i++) {
        left[i] = left[i-1] * nums[i - 1];
    }

    //build out the suffix
    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1]
    }

    //build the answer array
    for (let i = 0; i < n; i++) {
        answer[i] = left[i] * right[i];
    }
    return answer;

};