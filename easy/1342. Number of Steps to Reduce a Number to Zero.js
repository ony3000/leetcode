/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    if (num === 0) {
        return 0;
    }

    let count = 0;

    while (num > 1) {
        if (num % 2) {
            num = Math.floor(num / 2);
            count += 2;
        }
        else {
            num /= 2;
            count += 1;
        }
    }

    return count + 1;
};
