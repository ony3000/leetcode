/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const countPerNum = {};

    nums.forEach((num) => {
        countPerNum[num] = (countPerNum[num] || 0) + 1;
    });

    let result = 0;

    Object.values(countPerNum).forEach((count) => {
        result += (count - 1) * count / 2;
    });

    return result;
};
