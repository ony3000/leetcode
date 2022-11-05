/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let sequence = '1';

    for (let num = 2; num <= n; num += 1) {
        let temp = '';
        let lastDigit = null;
        let count = 0;

        for (let index = 0; index < sequence.length; index += 1) {
            const digit = sequence[index];

            if (lastDigit === null) {
                lastDigit = digit;
                count = 1;
            }
            else {
                if (digit === lastDigit) {
                    count += 1;
                }
                else {
                    temp += `${count}${lastDigit}`;
                    lastDigit = digit;
                    count = 1;
                }
            }
        }

        temp += `${count}${lastDigit}`;

        sequence = temp;
    }

    return sequence;
};
