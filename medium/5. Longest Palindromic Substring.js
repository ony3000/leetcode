/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) {
        return s;
    }

    const baseSubstrings = [];

    s.split('').forEach((letter, index) => {
        // base palindromic substring with even length
        if (index >= 1) {
            const startIndex = index - 1;

            if (letter === s[startIndex]) {
                baseSubstrings.push({
                    startIndex,
                    length: 2,
                });
            }
        }

        // base palindromic substring with odd length
        if (index >= 2) {
            const startIndex = index - 2;

            if (letter === s[startIndex]) {
                baseSubstrings.push({
                    startIndex,
                    length: 3,
                });
            }
        }
    });

    let result = '';

    baseSubstrings.forEach((info) => {
        let leftIndex = info.startIndex - 1;
        let rightIndex = info.startIndex + info.length;

        while (leftIndex >= 0 && rightIndex < s.length) {
            if (s[leftIndex] !== s[rightIndex]) {
                break;
            }

            leftIndex -= 1;
            rightIndex += 1;
        }

        const extendedLength = rightIndex - leftIndex - 1;

        if (result.length < extendedLength) {
            result = s.slice(leftIndex + 1, rightIndex);
        }
    });

    return (result ? result : s[0]);
};
