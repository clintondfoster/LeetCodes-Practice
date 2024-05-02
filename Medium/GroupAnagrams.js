//Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 
// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.
// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */

//group the anagrams together and return. create a map object, each sorted version of the string in strs is the key and the value is the array of anagrams
//sort each string alphabetically, sorted string will be used to check if anagram has been used. group by sorted key. extract and return array

function groupAnagrams(strs) {
    const map = new Map();

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        
        // If the key exists, push to the existing array, otherwise create a new array
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }

    // Return an array of values from the map
    return Array.from(map.values());
}