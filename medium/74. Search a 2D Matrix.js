/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const LAST_ROW_INDEX = matrix.length - 1;

    const binarySearch = (ascendingOrderedArray, targetValue, matchExactly = true) => {
        let beginIndex = 0;
        let endIndex = ascendingOrderedArray.length - 1;

        if (matchExactly) {
            while (beginIndex <= endIndex) {
                const midIndex = Math.floor((beginIndex + endIndex) / 2);
                const midNumber = ascendingOrderedArray[midIndex];

                if (midNumber < targetValue) {
                    beginIndex = midIndex + 1;
                }
                else if (midNumber > targetValue) {
                    endIndex = midIndex - 1;
                }
                else {
                    return midIndex;
                }
            }

            return -1;
        }
        else {
            while (beginIndex < endIndex) {
                const midIndex = Math.floor((beginIndex + endIndex) / 2);
                const midNumber = ascendingOrderedArray[midIndex];

                if (midNumber < targetValue) {
                    beginIndex = midIndex + 1;
                }
                else if (midNumber > targetValue) {
                    endIndex = midIndex;
                }
                else {
                    return midIndex;
                }
            }

            return targetValue <= ascendingOrderedArray[endIndex] ? endIndex : endIndex + 1;
        }
    };

    const rowIndex = binarySearch(matrix.map((row) => row[row.length - 1]), target, false);

    if (rowIndex > LAST_ROW_INDEX) {
        return false;
    }

    const colIndex = binarySearch(matrix[rowIndex], target);

    return (colIndex !== -1);
};
