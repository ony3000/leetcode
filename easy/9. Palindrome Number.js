/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const original = String(x);
    const reversed = original.split('').reverse().join('');

    return original === reversed;
};
