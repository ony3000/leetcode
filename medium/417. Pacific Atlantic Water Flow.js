/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    if (matrix.length === 0) {
        return [];
    }

    const NUMBER_OF_ROWS = matrix.length;
    const NUMBER_OF_COLS = matrix[0].length;
    const FIRST_ROW_INDEX = 0;
    const FIRST_COL_INDEX = 0;
    const LAST_ROW_INDEX = NUMBER_OF_ROWS - 1;
    const LAST_COL_INDEX = NUMBER_OF_COLS - 1;

    const pacificReachable = Array(NUMBER_OF_ROWS).fill(null).map((_) => Array(NUMBER_OF_COLS).fill(null));
    const pacificVisited = Array(NUMBER_OF_ROWS).fill(null).map((_) => Array(NUMBER_OF_COLS).fill(false));
    const orderedPacificCells = [];

    const atlanticReachable = Array(NUMBER_OF_ROWS).fill(null).map((_) => Array(NUMBER_OF_COLS).fill(null));
    const atlanticVisited = Array(NUMBER_OF_ROWS).fill(null).map((_) => Array(NUMBER_OF_COLS).fill(false));
    const orderedAtlanticCells = [];

    matrix.forEach((row, rowIndex) => {
        row.forEach((currentHeight, colIndex) => {
            if (rowIndex === FIRST_ROW_INDEX || colIndex === FIRST_COL_INDEX) {
                pacificReachable[rowIndex][colIndex] = true;
                pacificVisited[rowIndex][colIndex] = true;
                orderedPacificCells.push({
                    rowIndex,
                    colIndex,
                });
            }

            if (rowIndex === LAST_ROW_INDEX || colIndex === LAST_COL_INDEX) {
                atlanticReachable[rowIndex][colIndex] = true;
                atlanticVisited[rowIndex][colIndex] = true;
                orderedAtlanticCells.push({
                    rowIndex,
                    colIndex,
                });
            }

            if (rowIndex > FIRST_ROW_INDEX && rowIndex < LAST_ROW_INDEX && colIndex > FIRST_COL_INDEX && colIndex < LAST_COL_INDEX) {
                const aroundHeights = [
                    matrix[rowIndex - 1][colIndex],
                    matrix[rowIndex][colIndex + 1],
                    matrix[rowIndex + 1][colIndex],
                    matrix[rowIndex][colIndex - 1],
                ];

                if (aroundHeights.every((height) => (height > currentHeight))) {
                    pacificReachable[rowIndex][colIndex] = false;
                    pacificVisited[rowIndex][colIndex] = true;

                    atlanticReachable[rowIndex][colIndex] = false;
                    atlanticVisited[rowIndex][colIndex] = true;
                }
            }
        });
    });

    const checkReachability = (reachArray, visitArray, rowIndex, colIndex, orderedCells) => {
        visitArray[rowIndex][colIndex] = true;

        const currentHeight = matrix[rowIndex][colIndex];

        if (
            rowIndex > FIRST_ROW_INDEX
                && matrix[rowIndex - 1][colIndex] >= currentHeight
                && !visitArray[rowIndex - 1][colIndex]
                && reachArray[rowIndex][colIndex]
        ) {
            reachArray[rowIndex - 1][colIndex] = true;
            orderedCells.push({
                rowIndex: rowIndex - 1,
                colIndex,
            });
            checkReachability(reachArray, visitArray, rowIndex - 1, colIndex, orderedCells);
        }

        if (
            colIndex < LAST_COL_INDEX
                && matrix[rowIndex][colIndex + 1] >= currentHeight
                && !visitArray[rowIndex][colIndex + 1]
                && reachArray[rowIndex][colIndex]
        ) {
            reachArray[rowIndex][colIndex + 1] = true;
            orderedCells.push({
                rowIndex,
                colIndex: colIndex + 1,
            });
            checkReachability(reachArray, visitArray, rowIndex, colIndex + 1, orderedCells);
        }

        if (
            rowIndex < LAST_ROW_INDEX
                && matrix[rowIndex + 1][colIndex] >= currentHeight
                && !visitArray[rowIndex + 1][colIndex]
                && reachArray[rowIndex][colIndex]
        ) {
            reachArray[rowIndex + 1][colIndex] = true;
            orderedCells.push({
                rowIndex: rowIndex + 1,
                colIndex,
            });
            checkReachability(reachArray, visitArray, rowIndex + 1, colIndex, orderedCells);
        }

        if (
            colIndex > FIRST_COL_INDEX
                && matrix[rowIndex][colIndex - 1] >= currentHeight
                && !visitArray[rowIndex][colIndex - 1]
                && reachArray[rowIndex][colIndex]
        ) {
            reachArray[rowIndex][colIndex - 1] = true;
            orderedCells.push({
                rowIndex,
                colIndex: colIndex - 1,
            });
            checkReachability(reachArray, visitArray, rowIndex, colIndex - 1, orderedCells);
        }
    };

    while (orderedPacificCells.length > 0) {
        const { rowIndex, colIndex } = orderedPacificCells.shift();

        checkReachability(pacificReachable, pacificVisited, rowIndex, colIndex, orderedPacificCells);
    }

    while (orderedAtlanticCells.length > 0) {
        const { rowIndex, colIndex } = orderedAtlanticCells.shift();

        checkReachability(atlanticReachable, atlanticVisited, rowIndex, colIndex, orderedAtlanticCells);
    }

    const result = [];

    for (let rowIndex = FIRST_ROW_INDEX; rowIndex <= LAST_ROW_INDEX; rowIndex += 1) {
        for (let colIndex = FIRST_COL_INDEX; colIndex <= LAST_COL_INDEX; colIndex += 1) {
            if (pacificReachable[rowIndex][colIndex] && atlanticReachable[rowIndex][colIndex]) {
                result.push([rowIndex, colIndex]);
            }
        }
    }

    return result;
};
