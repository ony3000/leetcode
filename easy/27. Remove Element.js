/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    nums.forEach((num, index) => {
        if (num === val) {
            nums[index] = null;
        }
    });

    for (let index = nums.length - 1; index >= 0; index -= 1) {
        if (nums[index] === null) {
            nums.splice(index, 1);
        }
    }

    return nums.length;
};
