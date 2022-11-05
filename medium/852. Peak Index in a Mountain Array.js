/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let lastDiff = null;

    for (let index = 0; index < arr.length; index += 1) {
        if (index > 0) {
            const diff = arr[index] - arr[index - 1];

            if (lastDiff !== null && Math.sign(diff) !== Math.sign(lastDiff)) {
                return index - 1;
            }

            lastDiff = diff;
        }
    }
};
