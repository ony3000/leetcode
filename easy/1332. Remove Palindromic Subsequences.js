/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    if (s.length === 0) {
        return 0;
    }

    const reversed = s.split('').reverse().join('');

    return s === reversed ? 1 : 2;
};
