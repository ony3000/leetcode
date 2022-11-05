/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let increasingCount = 0;
    let decreasingCount = 0;
    let firstDecreasingStartIndex = null;
    let firstDecreasingEndIndex = null;

    for (let index = 1; index < nums.length; index += 1) {
        if (nums[index - 1] < nums[index]) {
            increasingCount += 1;
        }
        else if (nums[index - 1] > nums[index]) {
            decreasingCount += 1;

            if (firstDecreasingStartIndex === null) {
                firstDecreasingStartIndex = index - 1;
            }
            if (firstDecreasingEndIndex === null) {
                firstDecreasingEndIndex = index;
            }
        }
    }

    if (decreasingCount > 1) {
        return false;
    }
    else if (decreasingCount < 1) {
        return true;
    }
    else {
        if (firstDecreasingStartIndex === 0 || firstDecreasingEndIndex === nums.length - 1) {
            return true;
        }
        else {
            return (
                nums[firstDecreasingStartIndex - 1] <= nums[firstDecreasingEndIndex]
                    || nums[firstDecreasingStartIndex] <= nums[firstDecreasingEndIndex + 1]
            );
        }
    }
};
