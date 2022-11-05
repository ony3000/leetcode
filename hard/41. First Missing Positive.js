/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const uniquePositiveNums = [...new Set(nums.filter((num) => num > 0))];

    uniquePositiveNums.sort((former, latter) => former - latter);

    if (uniquePositiveNums.length === 0) {
        return 1;
    }

    for (let index = 0; index < uniquePositiveNums.length; index += 1) {
        const expectedNumber = index + 1;

        if (uniquePositiveNums[index] !== expectedNumber) {
            return expectedNumber;
        }
    }

    return uniquePositiveNums.length + 1;
};
