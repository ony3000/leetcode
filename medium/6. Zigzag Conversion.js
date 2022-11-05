/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }

    const subsequences = Array(numRows).fill('');

    let index = 0;
    let isDirectionForward = true;

    s.split('').forEach((letter) => {
        subsequences[index] += letter;

        if (index === 0) {
            isDirectionForward = true;
        }
        else if (index === numRows - 1) {
            isDirectionForward = false;
        }

        if (isDirectionForward) {
            index += 1;
        }
        else {
            index -= 1;
        }
    });

    return subsequences.join('');
};
