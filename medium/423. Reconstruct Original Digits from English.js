/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
    const digits = [];
    const matchRules = [
        { digit: '0', pattern: /z+/, word: 'zero' },
        { digit: '2', pattern: /w+/, word: 'two' },
        { digit: '4', pattern: /u+/, word: 'four' },
        { digit: '6', pattern: /x+/, word: 'six' },
        { digit: '8', pattern: /g+/, word: 'eight' },
        { digit: '1', pattern: /o+/, word: 'one' },
        { digit: '3', pattern: /h+/, word: 'three' },
        { digit: '5', pattern: /f+/, word: 'five' },
        { digit: '7', pattern: /s+/, word: 'seven' },
    ];
    let orderedLetters = s.split('').sort().join('');

    matchRules.forEach(({ digit, pattern, word }) => {
        const [ matches = '' ] = orderedLetters.match(pattern) || [];
        const matchCount = matches.length;

        if (matchCount) {
            digits.push(digit.repeat(matchCount));

            word.split('').forEach((letter) => {
                orderedLetters = orderedLetters.replace(letter.repeat(matchCount), '');
            });
        }
    });

    digits.push('9'.repeat(orderedLetters.length / 'nine'.length));

    const result = digits.sort().join('');

    return result;
};
