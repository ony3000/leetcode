/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    nums.sort((former, latter) => (former - latter));

    let lastElement = null;
    let maxConsecutiveLength = 0;
    let consecutiveLength = 0;

    nums.forEach((num) => {
        if (lastElement === null) {
            consecutiveLength = 1;
        }
        else {
            if (num - lastElement === 0) {
                // nothing to do
            }
            else if (num - lastElement === 1) {
                consecutiveLength += 1;
            }
            else {
                if (maxConsecutiveLength < consecutiveLength) {
                    maxConsecutiveLength = consecutiveLength;
                }

                consecutiveLength = 1;
            }
        }

        lastElement = num;
    });

    if (maxConsecutiveLength < consecutiveLength) {
        maxConsecutiveLength = consecutiveLength;
    }

    return maxConsecutiveLength;
};
