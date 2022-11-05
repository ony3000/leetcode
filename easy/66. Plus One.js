/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let number = BigInt(digits.join(''));

    if (number === 0n) {
        digits[digits.length - 1] = '1';

        return digits;
    }

    number += 1n;

    return String(number).split('');
};
