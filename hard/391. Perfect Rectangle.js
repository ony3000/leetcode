/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {
    let isRectangleWithSameBottomLeftPoint = false;
    let isRectangleWithSameTopRightPoint = false;

    rectangles.sort((
        [ formerLeft, formerBottom, formerRight, formerTop ],
        [ latterLeft, latterBottom, latterRight, latterTop ]
    ) => {
        if (formerLeft !== latterLeft) {
            return formerLeft - latterLeft;
        }
        if (formerBottom !== latterBottom) {
            return formerBottom - latterBottom;
        }

        isRectangleWithSameBottomLeftPoint = true;

        if (formerTop !== latterTop) {
            return formerTop - latterTop;
        }
        if (formerRight !== latterRight) {
            return formerRight - latterRight;
        }

        isRectangleWithSameTopRightPoint = true;

        return 0;
    });

    if (isRectangleWithSameBottomLeftPoint || isRectangleWithSameTopRightPoint) {
        return false;
    }

    let leftmost = null;
    let bottommost = null;
    let rightmost = null;
    let topmost = null;

    rectangles.forEach(([ left, bottom, right, top ]) => {
        if (leftmost === null || leftmost > left) {
            leftmost = left;
        }
        if (bottommost === null || bottommost > bottom) {
            bottommost = bottom;
        }
        if (rightmost === null || rightmost < right) {
            rightmost = right;
        }
        if (topmost === null || topmost < top) {
            topmost = top;
        }
    });

    const columnIntervalsPerRow = [];

    for (let index = 0; index < rectangles.length; index += 1) {
        const [ left, bottom, right, top ] = rectangles[index];

        for (let verticalPosition = bottom; verticalPosition < top; verticalPosition += 1) {
            const rowIndex = verticalPosition - bottommost;

            if (columnIntervalsPerRow[rowIndex] === undefined) {
                columnIntervalsPerRow[rowIndex] = [left, right];
            }
            else {
                const [ storedLeft, storedRight ] = columnIntervalsPerRow[rowIndex];

                if (storedRight !== left) {
                    return false;
                }

                columnIntervalsPerRow[rowIndex] = [storedLeft, right];
            }
        }
    }

    const sumOfRectangleArea = columnIntervalsPerRow.reduce((previous, [ left, right ]) => (previous + (right - left)), 0);
    const areaOfEdgeCoordinates = (rightmost - leftmost) * (topmost - bottommost);

    return sumOfRectangleArea === areaOfEdgeCoordinates;
};
