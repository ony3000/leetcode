/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    const nonDuplicatedEnvelopes = [
        ...new Set(envelopes.map(([width, height]) => `${width},${height}`))
    ].map((str) => str.split(',').map((value) => Number(value)));

    nonDuplicatedEnvelopes.sort(([formerWidth, formerHeight], [latterWidth, latterHeight]) => {
        if (formerWidth < latterWidth && formerHeight < latterHeight) {
            return -1;
        }
        else if (formerWidth > latterWidth && formerHeight > latterHeight) {
            return 1;
        }
        else {
            const formerSum = formerWidth + formerHeight;
            const latterSum = latterWidth + latterHeight;

            if (formerSum !== latterSum) {
                return formerSum - latterSum;
            }
            else {
                const formerArea = formerWidth * formerHeight;
                const latterArea = latterWidth * latterHeight;

                if (formerArea !== latterArea) {
                    return formerArea - latterArea;
                }
                else {
                    return formerWidth - latterWidth;
                }
            }
        }
    });

    const LAST_INDEX = nonDuplicatedEnvelopes.length - 1;

    const storedResult = Array(nonDuplicatedEnvelopes.length).fill(null);

    const recursion = (index) => {
        if (storedResult[index] !== null) {
            return storedResult[index];
        }
        else if (index === LAST_INDEX) {
            storedResult[index] = 1;

            return 1;
        }

        const [ currentWidth, currentHeight ] = nonDuplicatedEnvelopes[index];
        let result = 0;

        for (let nextIndex = index + 1; nextIndex <= LAST_INDEX; nextIndex += 1) {
            const [ nextWidth, nextHeight ] = nonDuplicatedEnvelopes[nextIndex];

            if (currentWidth < nextWidth && currentHeight < nextHeight) {
                const partialResult = recursion(nextIndex);

                if (result < partialResult) {
                    result = partialResult;
                }
            }
        }

        storedResult[index] = 1 + result;

        return 1 + result;
    };

    let result = 0;

    for (let index = 0; index <= LAST_INDEX; index += 1) {
        const recursionResult = recursion(index);

        if (result < recursionResult) {
            result = recursionResult;
        }
    }

    return result;
};
