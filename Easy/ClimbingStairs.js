//Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 
// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 

// Constraints:

// 1 <= n <= 45

/**
 * @param {number} n
 * @return {number}
 */
 //either climb by 1 or 2 steps. the numbers of ways to reach step 'n' is the sum of the ways to reach step 'n-1' (taking one step)and step 'n-2' (taking two steps)
 //if you are on step 'n' you got there by taking a single step 'n-1' or taking two steps 'n-2'
 var climbStairs = function(n) {
    if (n === 1) {
        return 1;
    }
    let first = 1;
    let second = 1;

    for (let i = 2; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }
    return second;

};