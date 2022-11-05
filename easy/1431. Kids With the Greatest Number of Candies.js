/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const maxCount = Math.max(...candies);

    return candies.map((count) => {
        return count + extraCandies >= maxCount;
    });
};
