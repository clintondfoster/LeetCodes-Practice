//Longest Consecutive Length
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 
// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

//use a hash set to store all integers. iterate through each number, check to see if it starts a new sequence.
//check to see if the next number is consecutive. find the length when no longer true. store lengths and find max.
var longestConsecutive = function(nums) {
    if (nums.length === 0) return false;

    const numSet = new Set(nums);
    let maxLength = 0;

    for (let num of nums) {
        //check if start of sequence. no (num - 1) in set.
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;

            //find consequtive nums
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentLength +=  1;
            }
            maxLength = Math.max(maxLength, currentLength);
        }
    }
return maxLength;

};