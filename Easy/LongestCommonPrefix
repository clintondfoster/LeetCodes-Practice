//Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

// /**
//  * @param {string[]} strs
//  * @return {string}
//  */

 //Loop through each char of first string. Then vertical scan through each string starting at index[0] and see if they match. 
 //If true, add that index to the output array until it is no longer true.
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    if (strs.length === 1) return strs[0];
    
    for (let i = 0; i < strs[0].length; i++) {
        let prefix = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            //check if this char matches the char at the same position in each string or if weve reached the length of any string
            if (i === strs[j].length || strs[j][i] !== prefix) {
                return strs[0].substring(0, i); //return common prefix
            }
        }
    }
return strs[0];
};