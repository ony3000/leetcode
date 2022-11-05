/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const shuffled = Array(s.length).fill(null);

    indices.forEach((position, index) => {
        shuffled[position] = s[index];
    });

    return shuffled.join('');
};
