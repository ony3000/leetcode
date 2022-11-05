/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const maxInt = 2 ** 31 - 1;
    const minInt = -(2 ** 31);
    const numericalValue = Number.parseInt(str) || 0;

    if (numericalValue > maxInt) {
        return maxInt;
    }
    else if (numericalValue < minInt) {
        return minInt;
    }
    else {
        return numericalValue;
    }
};
