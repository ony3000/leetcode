/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const pattern = /([0-9]+)\[([a-z]+)\]/;
    let matches = s.match(pattern);

    while (matches) {
        const [ subs, repeatCount, targetString ] = matches;
        const { index } = matches;

        s = s.slice(0, index) + targetString.repeat(repeatCount) + s.slice(index + subs.length);
        matches = s.match(pattern);
    }

    return s;
};
