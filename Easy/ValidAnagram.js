//Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */

function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const count = {};

    // Count each character in s
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (count[char] === undefined) {
            count[char] = 0;
        }
        count[char]++;
    }

    // Decrease the count for each character in t
    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        if (count[char] === undefined || count[char] === 0) {
            return false; // If a mismatch is found, return false immediately
        }
        count[char]--;
    }

    return true; // If all counts are zero, then it's an anagram
}