// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */

 //take k, and move each element to its new position in one cyclic pattern. not requiring any extra space.
 //check that k not larger than the array length. 
 //start outer loop and run as long as not all elements have not been moved. keep count of elements moved correctly
 //inilize current position as start, while we hold in temp position, move elements to the new positions until we loop back to the start 

var rotate = function(nums, k) {
    k = k % nums.length;
    let count = 0;
    for (let start = 0; count < nums.length; start++) {
        let current = start; //index of the elem we are starting with
        let prev = nums[start]; //value of the element at this index
        do {
            const next = (current + k) % nums.length; //calculate target position
            const temp = nums[next]; //temp store elem at target
            nums[next] = prev; //move the elem from prev to target
            prev = temp; //update prev to the element it replaced
            current = next; //update current to the new position
            count++; //increment count of positioned elements
        } while (start !== current)
    }
};

//do-while loop guarentees the loop body will execute at least once even if start is in the correct position thanks to modulo operation with k.
//it handles cycles within the array, ensuring each element is moved exactly once before loop exits
//ideal for rotations because each cycle is processed completely before moving to another cycle (which would start from a different index in the outer loop)