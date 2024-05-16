//Jump Game II
// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 1000
// It's guaranteed that you can reach nums[n - 1].

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

 //Greedy approach. 
 //initilize jumps = 0, count jumps, currEnd = 0 to track the end of the range you can reach with the curr num of jumps, farthest = 0 to
 //keep track of the futherest point that can be reached with one more just beyond curr.  
 //return the minimum number of jumps to reach the end, nums[n-1].
var jump = function(nums) {
    let jumps = 0;
    let farthest = 0;
    let currEnd = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        //update the furthest point that can be reached
        farthest = Math.max(farthest, i + nums[i]);

        //if we reached the end of the range of we can cover with curr jumps
        if (i === currEnd) {
            jumps++;
            currEnd = farthest;
            if (currEnd >= nums.length - 1) {
                break;
            }
        }
    }
    return jumps;
    
};