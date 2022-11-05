/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    return nums.map((_, index) => {
        const targetIndex = (index % 2) * n + Math.floor(index / 2);

        return nums[targetIndex];
    });
};
