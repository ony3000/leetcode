/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    if (nums.length === 1) {
        return 0;
    }

    const orderedNums = nums.map((num, index) => ({ index, value: num })).sort((former, latter) => (latter.value - former.value));

    return orderedNums[0].value >= 2 * orderedNums[1].value ? orderedNums[0].index : -1;
};
