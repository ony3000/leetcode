/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const orderedUniqueNums = [...new Set(nums)].sort((former, latter) => (Number(latter) - Number(former)));

    return orderedUniqueNums.length >= 3 ? orderedUniqueNums[2] : orderedUniqueNums[0];
};
