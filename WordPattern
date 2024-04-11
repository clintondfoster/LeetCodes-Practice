//Word Patter
// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
 

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.


/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    //split the pattern and s into an array of characters and words
    //check length to make sure both match, if not then false
    //create a map to store the correspondence between the characters in the pattern and words in s
    //iterate through. if the char exists in the map and it is different than the word at i, return false
    //otherwise the mapping for char to word at i, is true

    const words = s.split(' ');
        if (pattern.length !== words.length) {
            return false;
    };

    let charToWord = {};
    let wordToChar = {};

    for (let i=0; i < pattern.length; i++) {
        let char = pattern[i];
        let word = words[i];
    
    if ((charToWord[char] && charToWord[char] !== word) || 
      (wordToChar[word] && wordToChar[word] !== char)) {
        return false;
    }

    charToWord[char] = word;
    wordToChar[word] = char;
    
}
return true;
}