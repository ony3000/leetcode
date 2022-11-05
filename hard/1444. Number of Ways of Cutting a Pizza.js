/**
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */
var ways = function(pizza, k) {
    const APPLE = 'A';

    const storedResults = {};

    const recursion = (pizzaObject, pieceCount) => {
        const storedResult = storedResults[`${pizzaObject.rows}x${pizzaObject.cols}/${pieceCount}`];

        if (storedResult) {
            return storedResult;
        }

        let appleCount = 0;

        let minAppleRow = null;
        let minAppleCol = null;

        let maxAppleRow = null;
        let maxAppleCol = null;

        pizzaObject.cells.split('').forEach((cell, index) => {
            const rowIndex = Math.floor(index / pizzaObject.cols);
            const colIndex = index % pizzaObject.cols;

            if (cell === APPLE) {
                appleCount += 1;

                if (minAppleRow === null || minAppleRow > rowIndex) {
                    minAppleRow = rowIndex;
                }
                if (minAppleCol === null || minAppleCol > colIndex) {
                    minAppleCol = colIndex;
                }

                if (maxAppleRow === null || maxAppleRow < rowIndex) {
                    maxAppleRow = rowIndex;
                }
                if (maxAppleCol === null || maxAppleCol < colIndex) {
                    maxAppleCol = colIndex;
                }
            }
        });

        if (appleCount < pieceCount) {
            storedResults[`${pizzaObject.rows}x${pizzaObject.cols}/${pieceCount}`] = 0n;

            return 0n;
        }

        if (pieceCount === 1) {
            storedResults[`${pizzaObject.rows}x${pizzaObject.cols}/${pieceCount}`] = 1n;

            return 1n;
        }

        let result = 0n;

        // cut horizontally
        for (let rowIndex = minAppleRow + 1; rowIndex <= maxAppleRow; rowIndex += 1) {
            const partialCells = pizzaObject.cells.slice(rowIndex * pizzaObject.cols);

            result += recursion({
                cells: partialCells,
                rows: pizzaObject.rows - rowIndex,
                cols: pizzaObject.cols,
            }, pieceCount - 1);
        }

        // cut vertically
        for (let colIndex = minAppleCol + 1; colIndex <= maxAppleCol; colIndex += 1) {
            const partialCells = pizzaObject.cells.split('').map((cell, index) => (index % pizzaObject.cols < colIndex ? '' : cell)).join('');

            result += recursion({
                cells: partialCells,
                rows: pizzaObject.rows,
                cols: pizzaObject.cols - colIndex,
            }, pieceCount - 1);
        }

        storedResults[`${pizzaObject.rows}x${pizzaObject.cols}/${pieceCount}`] = result;

        return result;
    };

    const result = recursion({
        cells: pizza.join(''),
        rows: pizza.length,
        cols: pizza[0].length,
    }, k);

    return Number(result % (10n ** 9n + 7n));
};
