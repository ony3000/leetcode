/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function(A, B) {
    const orderedA = A.slice().sort((former, latter) => (latter - former));
    const orderedB = B.map((value, index) => ({
        value,
        index,
    })).sort((former, latter) => (latter.value - former.value));

    orderedB.forEach((item) => {
        for (let index = 0; index < orderedA.length; index += 1) {
            if (item.value < orderedA[index]) {
                item.corresponding = orderedA[index];
                orderedA[index] = null;
                break;
            }
        }
    });

    orderedB.forEach((item) => {
        if (item.corresponding === undefined) {
            for (let index = 0; index < orderedA.length; index += 1) {
                if (orderedA[index] !== null) {
                    item.corresponding = orderedA[index];
                    orderedA[index] = null;
                    break;
                }
            }
        }
    });

    const result = orderedB.map(({ index, corresponding }) => ({
        index,
        value: corresponding,
    })).sort((former, latter) => (former.index - latter.index)).map(({ value }) => value);

    return result;
};
