/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const counter = {};

    for (let index = 0; index < nums.length; index += 1) {
        if (index > k) {
            const oldIndex = index - (k + 1);

            delete counter[nums[oldIndex]];
        }

        const num = nums[index];

        if (counter[num]) {
            return true;
        }

        counter[num] = 1;
    }

    return false;
};
