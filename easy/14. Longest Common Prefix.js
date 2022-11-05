/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }

    const shortestLength = Math.min(...strs.map((str) => str.length));
    let prefixLength = 0;

    while (prefixLength < shortestLength) {
        let hasAllSameLetter = true;
        let lastLetter = null;

        for (let index = 0; index < strs.length; index += 1) {
            const currentLetter = strs[index][prefixLength];

            if (lastLetter && lastLetter !== currentLetter) {
                hasAllSameLetter = false;
                break;
            }

            lastLetter = currentLetter;
        }

        if (!hasAllSameLetter) {
            break;
        }

        prefixLength += 1;
    }

    return strs[0].slice(0, prefixLength);
};
