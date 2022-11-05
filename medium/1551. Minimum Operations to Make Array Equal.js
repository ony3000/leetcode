/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
    const half = Math.floor(n / 2);
    const meanValue = half * 2 + 1 - (n % 2 === 0 ? 1 : 0);

    return meanValue * half - half ** 2;
};
