/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function(n) {
    const smallerN = String(BigInt(n) - 1n);
    const largerN = String(BigInt(n) + 1n);

    if (BigInt(n) < 11n) {
        return smallerN;
    }
    else if (BigInt(n) === 11n) {
        return '9';
    }

    const prefix = n.slice(0, Math.ceil(n.length / 2));
    const reverseOfPrefix = prefix.split('').reverse().join('');

    const palindromeWithOddLength = prefix.slice(0, -1) + reverseOfPrefix;
    const palindromeWithEvenLength = prefix + reverseOfPrefix;

    let smallerPrefix = String(Number(prefix) - 1);
    if (smallerN.length < n.length) {
        smallerPrefix = smallerN.slice(0, Math.ceil(smallerN.length / 2));
    }
    const reverseOfSmallerPrefix = smallerPrefix.split('').reverse().join('');

    const smallerPalindromeWithOddLength = smallerPrefix.slice(0, -1) + reverseOfSmallerPrefix;
    const smallerPalindromeWithEvenLength = smallerPrefix + reverseOfSmallerPrefix;

    let largerPrefix = String(Number(prefix) + 1);
    if (largerN.length > n.length) {
        largerPrefix = largerN.slice(0, Math.ceil(largerN.length / 2));
    }
    const reverseOfLargerPrefix = largerPrefix.split('').reverse().join('');

    const largerPalindromeWithOddLength = largerPrefix.slice(0, -1) + reverseOfLargerPrefix;
    const largerPalindromeWithEvenLength = largerPrefix + reverseOfLargerPrefix;

    const palindromes = [
        smallerPalindromeWithOddLength,
        smallerPalindromeWithEvenLength,
        palindromeWithOddLength,
        palindromeWithEvenLength,
        largerPalindromeWithOddLength,
        largerPalindromeWithEvenLength,
    ];

    let minDifference = null;
    let palindromeIndex = null;

    palindromes.forEach((palindrome, index) => {
        const num = BigInt(n);
        const another = BigInt(palindrome);
        const difference = Math.abs(Number(num - another));

        if (difference > 0) {
            if (minDifference === null || minDifference > difference) {
                minDifference = difference;
                palindromeIndex = index;
            }
        }
    });

    return palindromes[palindromeIndex];
};
