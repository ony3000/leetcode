/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const lines = [];

    let temp = []
    let lengthSum = 0;

    words.forEach((word) => {
        if (lengthSum + temp.length + word.length <= maxWidth) {
            temp.push(word);
            lengthSum += word.length;
        }
        else {
            lines.push(temp);
            temp = [word];
            lengthSum = word.length;
        }
    });
    lines.push(temp);

    lines.forEach((line, index) => {
        const isLastLine = (index === lines.length - 1);

        if (isLastLine || line.length === 1) {
            lines[index] = (line.join(' ') + ' '.repeat(maxWidth)).slice(0, maxWidth);
        }
        else {
            const sumOfWordLength = line.reduce((accumulator, currentValue) => accumulator + currentValue.length, 0);
            const quotient = Math.floor((maxWidth - sumOfWordLength) / (line.length - 1));
            const remainder = (maxWidth - sumOfWordLength) % (line.length - 1);

            let justifiedLine = '';

            line.forEach((word, wordIndex) => {
                const isLastWord = (wordIndex === line.length - 1);

                if (isLastWord) {
                    justifiedLine += word;
                }
                else {
                    justifiedLine += (word + ' '.repeat(quotient) + (wordIndex < remainder ? ' ' : ''));
                }
            });

            lines[index] = justifiedLine;
        }
    });

    return lines;
};
