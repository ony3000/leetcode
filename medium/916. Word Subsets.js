/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function(A, B) {
    const C = A.slice().map((word) => ({
        originalWord: word,
        letterSortedWord: word.split('').sort((former, latter) => former.localeCompare(latter)).join(''),
    }));
    const D = [...new Set(
        B.slice().map((word) => word.split('').sort((former, latter) => former.localeCompare(latter)).join(''))
    )].map((word) => new RegExp(word.split('').join('.*')));

    const result = C.filter((obj) => D.every((pattern) => pattern.test(obj.letterSortedWord))).map(({ originalWord }) => originalWord);

    return result;
};
