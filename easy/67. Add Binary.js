/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const binaryToBigInt = (bin) => {
        return bin
            .split('')
            .reverse()
            .map((digit, index) => BigInt(digit) * (2n ** BigInt(index)))
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0n);
    };

    const numberA = binaryToBigInt(a);
    const numberB = binaryToBigInt(b);

    if (numberA === 0n) {
        return b;
    }
    else if (numberB === 0n) {
        return a;
    }

    const sum = numberA + numberB;

    const bigIntToBinary = (num) => {
        const reversedDigits = [];

        while (num > 0n) {
            reversedDigits.push(num % 2n);
            num /= 2n;
        }

        return reversedDigits.reverse().join('');
    };

    return bigIntToBinary(sum);
};
