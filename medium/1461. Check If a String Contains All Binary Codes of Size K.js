/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    for (let index = 0; index < 2 ** k; index += 1) {
        const binary = index.toString(2).padStart(k, 0);

        if (s.indexOf(binary) === -1) {
            return false;
        }
    }

    return true;
};
