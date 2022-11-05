/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = 0;

    const indexPerLetter = {};

    s.split('').forEach((letter, index) => {
        if (indexPerLetter[letter] === undefined) {
            indexPerLetter[letter] = index;
        }
        else {
            const indices = Object.values(indexPerLetter);

            const startIndex = Math.min(...indices);
            const endIndex = Math.max(...indices);
            const length = endIndex - startIndex + 1;

            if (result < length) {
                result = length;
            }

            Object.keys(indexPerLetter).forEach((key) => {
                if (indexPerLetter[key] < indexPerLetter[letter]) {
                    delete indexPerLetter[key];
                }
            });

            indexPerLetter[letter] = index;
        }
    });

    const remainIndices = Object.values(indexPerLetter);

    const lastLength = Math.max(...remainIndices) - Math.min(...remainIndices) + 1;

    if (result < lastLength) {
        result = lastLength;
    }

    return result;
};
