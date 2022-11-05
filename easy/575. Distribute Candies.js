/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const counter = {};

    candyType.forEach((type) => {
        counter[type] = (counter[type] || 0) + 1;
    });

    return Math.min(candyType.length / 2, Object.keys(counter).length);
};
