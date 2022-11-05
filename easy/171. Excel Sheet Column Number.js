/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const ASCII_A = 'A'.charCodeAt(0);

    let result = 0;

    columnTitle.split('').forEach((letter) => {
        result *= 26;
        result += (letter.charCodeAt(0) - ASCII_A + 1);
    });

    return result;
};
