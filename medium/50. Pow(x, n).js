/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // Assume that Math.something(...) and ** operator cannot be used.

    if (n === 0) {
        return 1;
    }

    let isNegativeExponent = (n < 0);
    let answer = 1;

    if (isNegativeExponent) {
        n = -n;
    }

    n.toString(2).split('').forEach((binary) => {
        const digit = Number(binary);

        answer *= answer;
        answer *= (digit ? x : 1);
    });

    if (isNegativeExponent) {
        answer = 1 / answer;
    }

    return answer;
};
