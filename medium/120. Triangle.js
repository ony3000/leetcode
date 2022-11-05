/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const LARGE_NUM = 1e+5;
    let partialPathSums = [0, 0];

    triangle.forEach((row) => {
        row.forEach((num, index) => {
            const leftPathSum = num + partialPathSums[index];
            const rightPathSum = num + partialPathSums[index + 1];

            row[index] = Math.min(leftPathSum, rightPathSum);
        });

        partialPathSums = [LARGE_NUM, ...row, LARGE_NUM];
    });

    return Math.min(...partialPathSums);
};
