// Palindrome Number
// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.


// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1
 

// Follow up: Could you solve it without converting the integer to a string?

// /**
//  * @param {number} x
// * @return {boolean}
// */
/////////////////////// Converting to a string
var isPalindrome = function(x) {
    // convert to a string. Split the string, reverse it, and check to see if reversed matches.

    if (x < 0) return false;

    const str = x.toString();
    const reversedStr = str.split('').reverse().join("");
    return str === reversedStr;
};

////////////////////////Alternate solution solving without converting interger to a string
var isPalindrome = function(x) {
    //eliminate negative numbers. negatives can not be palindromes.
    //reverse half of the number. numbers ending in 0, can not be palindromes.
    //handle odd and even legnths. 

    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    let reversedHalf = 0;
    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + x % 10;
        x = Math.floor(x/10);
    }
    //The number is a palindrome if its the same as the reversed half 
    //or the same when ignoring the middle digit (for odd length numbers)

    return x === reversedHalf || x === Math.floor(reversedHalf/10);
    
}

