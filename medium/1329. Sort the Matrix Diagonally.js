/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    const m = mat.length;
    const n = mat[0].length;

    const diagonals = Array(m + n - 1).fill(null).map((_, diagonalIndex) => {
        const length = Math.min(m, n, diagonalIndex + 1, (m + n - 1) - diagonalIndex);

        return Array(length).fill(null).map((_, index) => {
            const rowIndex = Math.max(0, diagonalIndex - (n - 1)) + index;
            const colIndex = Math.max(0, (n - 1) - diagonalIndex) + index;

            return mat[rowIndex][colIndex];
        });
    });

    diagonals.forEach((diagonal, diagonalIndex) => {
        diagonal.sort((former, latter) => (former - latter));

        diagonal.forEach((value, index) => {
            const rowIndex = Math.max(0, diagonalIndex - (n - 1)) + index;
            const colIndex = Math.max(0, (n - 1) - diagonalIndex) + index;

            mat[rowIndex][colIndex] = value;
        });
    });

    return mat;
};
