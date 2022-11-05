/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }

    const answer = [];

    const letterArrayPerDigit = {
        2: 'abc'.split(''),
        3: 'def'.split(''),
        4: 'ghi'.split(''),
        5: 'jkl'.split(''),
        6: 'mno'.split(''),
        7: 'pqrs'.split(''),
        8: 'tuv'.split(''),
        9: 'wxyz'.split(''),
    };

    const letterArrays = Array(4).fill(null).map((_, index) => {
        return digits[index] ? letterArrayPerDigit[digits[index]] : null;
    }).filter((elem) => elem);

    const letterIndexs = Array(letterArrays.length).fill(0);

    do {
        const chosenLetters = letterArrays.map((arr, digitIndex) => arr[letterIndexs[digitIndex]]);

        answer.push(chosenLetters.join(''));

        for (let digitIndex = letterArrays.length - 1; digitIndex >= 0; digitIndex -= 1) {
            letterIndexs[digitIndex] += 1;

            if (letterIndexs[digitIndex] < letterArrays[digitIndex].length) {
                break;
            }

            if (digitIndex > 0) {
                letterIndexs[digitIndex] = 0;
            }
        }
    } while (letterIndexs[0] < letterArrays[0].length);

    return answer;
};
