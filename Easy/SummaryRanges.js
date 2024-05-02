// Summary Ranges
// You are given a sorted unique integer array nums.

// A range [a,b] is the set of all integers from a to b (inclusive).

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b
 

// Example 1:

// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
// Example 2:

// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"
 

// Constraints:

// 0 <= nums.length <= 20
// -231 <= nums[i] <= 231 - 1
// All the values of nums are unique.
// nums is sorted in ascending order.

// /**
//  * @param {number[]} nums
//  * @return {string[]}
//  */

/////////////////////
 //Starter pointer and an empty results list
 //For each element, check if the current element and the next element are consecutive, if not, then end range
 //Check if start and end elements are the same, it results in only one element, which is a single number
 //Update the start to point to the next element, beginning a new range
 var summaryRanges = function(nums) {
    if (nums.length === 0) return [];

    const result = [];
    let start = nums[0];

    for (let i=0; i < nums.length; i++) {
        //check if current element is not the last and if the next element is not consecutive
        if (i + 1 < nums.length && nums[i + 1] !== nums[i] + 1) {
            if (start === nums[i]) {
                result.push(`${start}`);
            } else {
                result.push(`${start}->${nums[i]}`);
            }
            start = nums[i + 1];
            }
        }

        //handle the last range
        if (start === nums[nums.length -1]) {
            result.push(`${start}`);
        } else {
            result.push(`${start}->${nums[nums.length -1]}`);
        }
        return result;
    }