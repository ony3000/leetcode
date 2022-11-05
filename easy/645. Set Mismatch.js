/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const n = nums.length;
    const counter = {};
    let duplicated = null;
    let sum = 0;

    nums.forEach((num) => {
        if (duplicated === null) {
            counter[num] = (counter[num] || 0) + 1;

            if (counter[num] > 1) {
                duplicated = num;
            }
        }

        sum += num;
    });

    const expectedSum = n * (n + 1) / 2;
    const lostNum = expectedSum - (sum - duplicated);

    return [duplicated, lostNum];
};
