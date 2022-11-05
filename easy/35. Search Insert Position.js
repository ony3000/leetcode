/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index = 0;

    for (; index < nums.length; index += 1) {
        if (nums[index] >= target) {
            return index;
        }
    }

    return index;
};
