/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const M = grid.length;
    const N = grid[0].length;

    const linearNumbers = grid.reduce((acc, curr) => [...acc, ...curr], []);

    k %= (M * N);

    const shiftedNumbers = linearNumbers.slice(-k).concat(linearNumbers.slice(0, -k));

    return Array(M).fill(null).map((_, index) => shiftedNumbers.slice(index * N, (index + 1) * N));
};
