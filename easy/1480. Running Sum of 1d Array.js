/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0;

    return nums.map((value) => {
        sum += value;

        return sum;
    });
};
