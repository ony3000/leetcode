/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    return Boolean(s.match(new RegExp(`^${p}$`)));
};
