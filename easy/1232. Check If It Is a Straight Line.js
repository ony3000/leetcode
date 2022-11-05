/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let slope = null;

    for (let index = 0; index < coordinates.length; index += 1) {
        const [ x1, y1 ] = coordinates[index];

        for (let anotherIndex = index + 1; anotherIndex < coordinates.length; anotherIndex += 1) {
            const [ x2, y2 ] = coordinates[anotherIndex];

            let ratio = (y2 - y1) / (x2 - x1);

            if (!Number.isFinite(ratio)) {
                ratio = Infinity;
            }

            if (slope === null) {
                slope = ratio;
            }
            else if (slope !== ratio) {
                return false;
            }
        }
    }

    return true;
};
