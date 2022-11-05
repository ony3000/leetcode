/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    if (n === 1) {
        return start;
    }

    let result = 0;

    for (let index = 0; index < n; index += 1) {
        const num = start + 2 * index;

        result ^= num;
    }

    return result;
};
