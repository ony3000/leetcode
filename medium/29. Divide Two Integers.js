/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const INT_MAX = 2 ** 31 - 1;

    let absoluteDividend = Math.abs(dividend);
    const absoluteDivisor = Math.abs(divisor);
    let quotient = 0;

    if (absoluteDivisor === 1) {
        quotient = absoluteDividend;
    }
    else {
        while (absoluteDividend >= absoluteDivisor) {
            absoluteDividend -= absoluteDivisor;
            quotient += 1;
        }
    }

    if (dividend < 0) {
        quotient = -quotient;
    }
    if (divisor < 0) {
        quotient = -quotient;
    }
    if (quotient > INT_MAX) {
        quotient = INT_MAX;
    }

    return quotient;
};
