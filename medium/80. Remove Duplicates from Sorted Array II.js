/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let lastDigit = null;
    let count = 0;

    for (let index = nums.length - 1; index >= 0; index -= 1) {
        const digit = nums[index];

        if (lastDigit !== digit) {
            if (count > 2) {
                nums.splice(index + 1, count - 2);
            }

            lastDigit = digit;
            count = 1;
        }
        else {
            count += 1;
        }
    }

    if (count > 2) {
        nums.splice(0, count - 2);
    }

    return nums.length;
};
