//Valid Palindrone
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.


var isPalindrome = function(s) {
    s = s.toLowerCase()
    let newStr=''

for(let i=0; i<s.length;i++){
    var ascii = s[i].charCodeAt(0);
    if((ascii >= 97 && ascii <= 122) || (ascii>= 48 && ascii<=57)){
        newStr = newStr+s[i]
    }

}
    s = newStr
    let left = 0
    let right = s.length-1
    while(left<=right){
        if(s[left]!==s[right]){
            return false
        }
        left++
        right--
    }
    return true
};
