/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    s = s.replace(/^\)+/, '').replace(/\(+$/, '');

    if (s.length === 0) {
        return 0;
    }

    const pattern = /(\()((?:vv)*)(\))/;

    while (s.match(pattern)) {
        s = s.replace(pattern, 'v$2v');
    }

    const maxValidLength = s.match(/v+/g).reduce((accumulator, currentValue) => Math.max(accumulator, currentValue.length), 0);

    return maxValidLength;
};
