/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const counter = {};

    s.split('').forEach((letter) => {
        counter[letter] = (counter[letter] || 0) + 1;
    });

    t.split('').forEach((letter) => {
        counter[letter] = (counter[letter] || 0) - 1;

        if (counter[letter] === 0) {
            delete counter[letter];
        }
    });

    return Object.keys(counter).length === 0;
};
