/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function(text) {
    let count = 0;

    while (text.length) {
        let subtextLength = 1;
        let frontPart = text.slice(0, subtextLength);
        let rearPart = text.slice(text.length - subtextLength);

        while (subtextLength <= text.length / 2 && frontPart !== rearPart) {
            subtextLength += 1;
            frontPart = text.slice(0, subtextLength);
            rearPart = text.slice(text.length - subtextLength);
        }

        if (subtextLength <= text.length / 2) {
            text = text.slice(subtextLength, text.length - subtextLength);
            count += 2;
        }
        else {
            text = '';
            count += 1;
        }
    }

    return count;
};
