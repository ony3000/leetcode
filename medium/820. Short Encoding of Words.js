/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    let answer = '';

    words.sort((former, latter) => {
        if (former.length !== latter.length) {
            return latter.length - former.length;
        }
        else {
            return former.localeCompare(latter);
        }
    });

    words.forEach((word) => {
        if (!answer.includes(`${word}#`)) {
            answer += `${word}#`;
        }
    });

    return answer.length;
};
