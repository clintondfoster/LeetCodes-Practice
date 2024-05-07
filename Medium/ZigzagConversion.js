// Zigzag Conversion
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000
// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */

 //notice the pattern of zigzag. add characters to different rows, creating strings horizontally. Create array where each element represents a row, determine variable to track curr row and the direction moving (either up or down).
 //iterate over the characters of the strings, adding each characer to the appropriate row based on the curr direction of movement and change the direction when you hit the top or bottom of the zigzag (when the index is either 0 or 3).
 //Once characters in the string have all been placed, concatonate them reading from index 0, resulting in the final string.
 var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }
    let currRow = 0;
    let goingDown = false;
    const rows = new Array(numRows).fill().map(() => []);
    for (let char of s) {
        rows[currRow] += char;
        if (currRow === 0 || currRow === numRows - 1) {
            goingDown = !goingDown;
        }
        currRow += goingDown ? 1: -1;
    }
    return rows.join('');
};