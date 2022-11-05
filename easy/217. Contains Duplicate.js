/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const counter = {};

    for (let index = 0; index < nums.length; index += 1) {
        const num = nums[index];

        if (counter[num]) {
            return true;
        }

        counter[num] = 1;
    }

    return false;
};
