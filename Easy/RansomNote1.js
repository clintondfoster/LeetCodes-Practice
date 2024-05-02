//Ransome Note
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.



/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function (ransomNote, magazine) {
    const vocab = {};

//count each letter in magazine
    for (let letter of magazine) {
        if (vocab[letter]) {
            vocab[letter]++;
        } else {
            vocab[letter] = 1;
        }
    }
//check if the letters in randsomNote can be constructed from the magazine
    for (let letter of ransomNote) {
        if (!vocab[letter] || vocab[letter] <= 0) {
            return false;
        }
        vocab[letter]--;
}
return true;
}