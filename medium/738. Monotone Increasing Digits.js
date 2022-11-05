/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
    const digits = String(N).split('').map(digit => Number(digit));
    const LAST_INDEX = digits.length - 1;

    let isMonotoneIncreasing = null;

    do {
        isMonotoneIncreasing = true;

        for (let index = 0; index < LAST_INDEX; index += 1) {
            if (digits[index] > digits[index + 1]) {
                isMonotoneIncreasing = false;

                digits[index] -= 1;

                for (let anotherIndex = index + 1; anotherIndex <= LAST_INDEX; anotherIndex += 1) {
                    digits[anotherIndex] = 9;
                }

                break;
            }
        }
    } while (!isMonotoneIncreasing);

    return Number(digits.join(''));
};
