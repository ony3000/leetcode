/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
    const storedPowerValue = {};

    const powerValue = (starter) => {
        let num = starter;
        let count = 0;

        if (num in storedPowerValue) {
            return storedPowerValue[num];
        }

        while (num > 1) {
            if (num % 2) {
                num = 3 * num + 1;
            }
            else {
                num /= 2;
            }

            count += 1;

            if (num in storedPowerValue) {
                count += storedPowerValue[num];
                break;
            }
        }

        storedPowerValue[starter] = count;

        return count;
    };

    const interval = Array(hi - lo + 1).fill(null).map((_, index) => (lo + index));

    interval.sort((former, latter) => {
        return (powerValue(former) - powerValue(latter)) || (former - latter);
    });

    return interval[k - 1];
};
