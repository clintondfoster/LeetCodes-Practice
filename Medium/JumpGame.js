//Jump Game
// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105

// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */

 //The greedy algorithm, global optimum arrived by selecting local optimum.  
 //initalize maxReach, start at nums[0], iterate through the array updating maxReach at each index, and sum the current index and its value nums[i].
 //check: if maxReach < nums[i] return false 
 var canJump = function(nums) {
    let maxReach = 0;
    for (let i = 0; i < nums.length; i++) {
        //if current is beyond maxReach return false
        if (i > maxReach) {
            return false;
        }
        maxReach = Math.max(maxReach, i + nums[i]);
        if (maxReach >= nums.length - 1)
 {
    return true;
 }    
 }
 return maxReach >= nums.length - 1;
};