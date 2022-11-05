/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const FIRST_INDEX = 1;
    const LAST_INDEX = nums.length;

    nums.sort((former, latter) => (former - latter));
    nums.unshift('START');
    nums.push('END');

    for (let index = FIRST_INDEX; index <= LAST_INDEX; index += 1) {
        const prev = nums[index - 1];
        const current = nums[index];
        const next = nums[index + 1];

        if (current !== prev && current !== next) {
            return current;
        }
    }
};
