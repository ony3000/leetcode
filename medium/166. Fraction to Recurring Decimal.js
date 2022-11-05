/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    const calculatePowers = (number, prime) => {
        let result = 0;

        while (number % prime === 0) {
            number = Math.floor(number / prime);
            result += 1;
        }

        return result;
    };
    const calculateGcd = (larger, smaller) => {
        if (larger < 0) {
            larger = -larger;
        }
        if (smaller < 0) {
            smaller = -smaller;
        }

        if (larger < smaller) {
            [larger, smaller] = [smaller, larger];
        }

        while (smaller) {
            [larger, smaller] = [smaller, larger % smaller];
        }

        return larger;
    };

    const sign = (Math.sign(numerator) * Math.sign(denominator)) || 1;
    const gcd = calculateGcd(numerator, denominator);
    const unitNumerator = Math.abs(numerator) / gcd;
    const unitDenominator = Math.abs(denominator) / gcd;

    const powerOfTwo = calculatePowers(unitDenominator, 2);
    const powerOfFive = calculatePowers(unitDenominator, 5);
    const hasRepeatingPart = (2 ** powerOfTwo) * (5 ** powerOfFive) < unitDenominator;

    let representation = '';

    let tempNumerator = unitNumerator;
    let tempDenominator = unitDenominator;
    let quotient = Math.floor(tempNumerator / tempDenominator);

    representation += quotient;
    tempNumerator -= (quotient * tempDenominator);

    if (hasRepeatingPart) {
        representation += '.';

        const prefixLength = Math.max(powerOfTwo, powerOfFive);
        let limitLength = prefixLength + 1;
        while ((10n ** BigInt(limitLength) - 10n ** BigInt(prefixLength)) % BigInt(tempDenominator)) {
            limitLength += 1;
        }
        const repeatingLength = limitLength - prefixLength;

        let prefixCount = 0;
        let repeatingCount = 0;
        let trailingRepresentation = '';

        while (tempNumerator) {
            if (prefixCount < prefixLength) {
                prefixCount += 1;
            }
            else if (repeatingCount < repeatingLength) {
                repeatingCount += 1;
            }
            else {
                break;
            }

            tempNumerator *= 10;
            quotient = Math.floor(tempNumerator / tempDenominator);
            trailingRepresentation += quotient;
            tempNumerator -= (quotient * tempDenominator);
        }

        trailingRepresentation = trailingRepresentation.slice(0, limitLength) + ')' + trailingRepresentation.slice(limitLength);
        trailingRepresentation = trailingRepresentation.slice(0, prefixLength) + '(' + trailingRepresentation.slice(prefixLength);

        representation += trailingRepresentation;
    }
    else {
        if (tempNumerator) {
            representation += '.';

            while (tempNumerator) {
                tempNumerator *= 10;
                quotient = Math.floor(tempNumerator / tempDenominator);
                representation += quotient;
                tempNumerator -= (quotient * tempDenominator);
            }
        }
    }

    return `${sign < 0 ? '-' : ''}${representation}`;
};
