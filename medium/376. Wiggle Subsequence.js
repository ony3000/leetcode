/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    if (nums.length === 1) {
        return 1;
    }

    const POSITIVE = 1;
    const ZERO = 0;
    const NEGATIVE = -1;

    let prevSign = null;
    let signChangeCount = 0;

    nums.forEach((num, index) => {
        if (index > 0) {
            const sign = Math.sign(num - nums[index - 1]);

            if (sign === POSITIVE) {
                if (prevSign === NEGATIVE) {
                    signChangeCount += 1;
                }

                prevSign = sign;
            }
            else if (sign === NEGATIVE) {
                if (prevSign === POSITIVE) {
                    signChangeCount += 1;
                }

                prevSign = sign;
            }
            else {
                if (prevSign === null) {
                    prevSign = sign;
                }
            }
        }
    });

    return prevSign === ZERO ? 1 : signChangeCount + 2;
};
