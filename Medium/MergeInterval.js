//Merge Intervals
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2

function merge(intervals) {
    // Sort intervals based on the start time
    intervals.sort((a, b) => a[0] - b[0]);

    // Initialize the result with the first interval
    const merged = [intervals[0]];

    // Iterate through intervals
    for (let i = 1; i < intervals.length; i++) {
        const [currentStart, currentEnd] = intervals[i];
        const [lastStart, lastEnd] = merged[merged.length - 1];

        // Check if the current interval overlaps with the last one in the merged list
        if (currentStart <= lastEnd) {
            // If it overlaps, merge the current interval with the last one merged
            merged[merged.length - 1][1] = Math.max(lastEnd, currentEnd);
        } else {
            // If not, just add the current interval to merged
            merged.push(intervals[i]);
        }
    }

    return merged;
}
