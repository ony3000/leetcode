/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    const factorial = (n) => {
        if (n === 0 || n === 1) {
            return 1;
        }

        return n * factorial(n - 1);
    };

    const N = tiles.length;

    const recursion = (availableLetters, letterCount, caseCount, index) => {
        if (letterCount === 0) {
            return '';
        }

        const caseCountExceptOneLetter = caseCount / availableLetters.length;
        const quotient = Math.floor(index / caseCountExceptOneLetter);
        const remainder = index % caseCountExceptOneLetter;

        const sliced = availableLetters.slice(0, quotient) + availableLetters.slice(quotient + 1);

        return availableLetters[quotient] + recursion(sliced, letterCount - 1, caseCountExceptOneLetter, remainder);
    };

    let result = 0;

    for (let sequenceLength = 1; sequenceLength <= N; sequenceLength += 1) {
        const sequences = {};

        const numberOfCases = factorial(N) / factorial(N - sequenceLength);

        for (let index = 0; index < numberOfCases; index += 1) {
            const sequence = recursion(tiles, sequenceLength, numberOfCases, index);

            sequences[sequence] = true;
        }

        result += Object.keys(sequences).length;
    }

    return result;
};
