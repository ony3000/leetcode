/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const symbolPerValue = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M',
    };

    let result = '';
    let exponent = 0;

    while (num > 0) {
        const lastDigit = num % 10;
        const remainder = lastDigit % 5;
        const quotient = Math.floor(lastDigit / 5);

        const onesUnit = 10 ** exponent;

        const onesSymbol = symbolPerValue[onesUnit];
        const fivesSymbol = symbolPerValue[onesUnit * 5];
        const tensSymbol = symbolPerValue[onesUnit * 10];

        let symbols = null;

        if (remainder === 4) {
            symbols = `${onesSymbol}${quotient ? tensSymbol : fivesSymbol}`;
        }
        else {
            symbols = `${quotient ? fivesSymbol : ''}${remainder ? onesSymbol.repeat(remainder) : ''}`;
        }

        result = symbols + result;

        num = Math.floor(num / 10);
        exponent += 1;
    }

    return result;
};
