/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const FIRST_ROW = 0;
    const LAST_ROW = n - 1;
    const FIRST_COL = 0;
    const LAST_COL = n - 1;

    const UP = 0;
    const RIGHT = 1;
    const DOWN = 2;
    const LEFT = 3;

    const matrix = Array(n).fill(null).map((_) => Array(n).fill(null));
    let rowIndex = 0;
    let colIndex = 0;
    let direction = RIGHT;

    for (let num = 1; num <= n ** 2; num += 1) {
        matrix[rowIndex][colIndex] = num;

        if (direction === RIGHT) {
            if (colIndex === LAST_COL - (FIRST_ROW + rowIndex)) {
                direction = DOWN;
                rowIndex += 1;
            }
            else {
                colIndex += 1;
            }
        }
        else if (direction === DOWN) {
            if (rowIndex === LAST_ROW - (LAST_COL - colIndex)) {
                direction = LEFT;
                colIndex -= 1;
            }
            else {
                rowIndex += 1;
            }
        }
        else if (direction === LEFT) {
            if (colIndex === FIRST_COL + (LAST_ROW - rowIndex)) {
                direction = UP;
                rowIndex -= 1;
            }
            else {
                colIndex -= 1;
            }
        }
        else if (direction === UP) {
            if (rowIndex === FIRST_ROW + 1 + (FIRST_COL + colIndex)) {
                direction = RIGHT;
                colIndex += 1;
            }
            else {
                rowIndex -= 1;
            }
        }
    }

    return matrix;
};
