/**
 * @param {number} N
 * @return {boolean}
 */
var reorderedPowerOf2 = function(N) {
    const ascendingDigitsPowerOf2 = Array(30).fill(null).map((_, exponent) => {
        return String(2 ** exponent).split('').sort().join('');
    });

    const ascendingDigitsOfN = String(N).split('').sort().join('');

    return ascendingDigitsPowerOf2.some((digits) => (digits === ascendingDigitsOfN));
};
