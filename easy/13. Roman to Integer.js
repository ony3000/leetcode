/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const valuePerSymbol = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;
    let lastSymbol = null;

    s.split('').reverse().forEach((symbol) => {
        if (lastSymbol && valuePerSymbol[symbol] < valuePerSymbol[lastSymbol]) {
            result -= valuePerSymbol[symbol];
        }
        else {
            result += valuePerSymbol[symbol];
        }

        lastSymbol = symbol;
    });

    return result;
};
