/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const expectedSum = n * (n + 1) / 2;

    return expectedSum - sum;
};
