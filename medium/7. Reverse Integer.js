/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const sign = Math.sign(x);
    const absolute = Math.abs(x);

    const signedReversed = Number(String(absolute).split('').reverse().join('')) * sign;

    if (signedReversed < -(2 ** 31) || signedReversed >= 2 ** 31) {
        return 0;
    }
    else {
        return signedReversed;
    }
};
