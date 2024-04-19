//Happy Number
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.


// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false
 

// Constraints:

// 1 <= n <= 231 - 1
// /**
//  * @param {number} n
//  * @return {boolean}
//  */


 //Make sure n is positive. Take n, separate its digits, square each, them sum.
 //Floyds Cycle-Finding Algorithm (tortoise and hare.) When the sum reaches 1, then stop the loop. If the sum never reaches one, then return false.
function isHappy(n) {
    function getSum(num) {
        let sum = 0;
        while (num > 0) {
            let digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }
    let slow = n;
    let fast = getSum(n);
    //Check for cycle 
    while (fast !== 1 && slow !== fast) {
        slow = getSum(slow); // move slow by 1 step
        fast = getSum(getSum(fast)); //move fast by 2 steps
    }
    return fast === 1; //if fast is 1, then we found a happy number
};