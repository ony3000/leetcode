/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const FIRST_INDEX = 0;
    const LAST_INDEX = s.length - 1;
    let result = 0;

    for (let startIndex = FIRST_INDEX; startIndex <= LAST_INDEX; startIndex += 1) {
        for (let endIndex = startIndex; endIndex <= LAST_INDEX; endIndex += 1) {
            const substringLength = endIndex - startIndex + 1;
            const limit = Math.ceil(substringLength / 2);
            let isPalindrome = true;

            for (let extra = 0; extra < limit; extra += 1) {
                if (s[startIndex + extra] !== s[endIndex - extra]) {
                    isPalindrome = false;
                    break;
                }
            }

            if (isPalindrome) {
                result += 1;
            }
        }
    }

    return result;
};
