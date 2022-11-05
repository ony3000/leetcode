/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    const string1 = word1.reduce((accumulator, currentValue) => accumulator + currentValue, '');
    const string2 = word2.reduce((accumulator, currentValue) => accumulator + currentValue, '');

    return string1 === string2;
};
