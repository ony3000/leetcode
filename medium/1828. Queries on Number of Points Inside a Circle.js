/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    return queries.map(([ centerX, centerY, radius ]) => {
        return points.reduce((acc, [ pointX, pointY ]) => {
            return acc + (Math.sqrt((centerX - pointX) ** 2 + (centerY - pointY) ** 2) <= radius ? 1 : 0);
        }, 0);
    });
};
