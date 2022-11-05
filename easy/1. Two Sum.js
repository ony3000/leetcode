/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const indexPerNum = {};
    nums.forEach((num, index) => {
        indexPerNum[num] = indexPerNum[num] || [];
        indexPerNum[num].push(index);
    });

    const orderedNums = nums.slice();
    orderedNums.sort((former, latter) => former - latter);

    const half = target / 2;

    const lowerNums = orderedNums.filter((num) => (num < half));
    const upperNums = orderedNums.filter((num) => (num > half));

    if (lowerNums.length + upperNums.length === nums.length - 2) {
        return indexPerNum[half];
    }

    for (let lowerIndex = 0; lowerIndex < lowerNums.length; lowerIndex += 1) {
        const lowerNum = lowerNums[lowerIndex];

        for (let upperIndex = 0; upperIndex < upperNums.length; upperIndex += 1) {
            const upperNum = upperNums[upperIndex];

            if (lowerNum + upperNum === target) {
                const result = [ ...indexPerNum[lowerNum], ...indexPerNum[upperNum] ];
                result.sort((former, latter) => former - latter);

                return result;
            }
        }
    }
};
