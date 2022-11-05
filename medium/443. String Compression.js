/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let lastChar = null;
    let charCount = 0;
    let compressList = [];

    chars.forEach((char, index) => {
        if (lastChar === char) {
            charCount += 1;
        }
        else {
            if (lastChar !== null && charCount > 1) {
                compressList.unshift({
                    startIndex: index - charCount,
                    charCount,
                });
            }

            lastChar = char;
            charCount = 1;
        }
    });

    if (charCount > 1) {
        compressList.unshift({
            startIndex: chars.length - charCount,
            charCount,
        });
    }

    compressList.forEach((info) => {
        chars.splice(info.startIndex + 1, info.charCount - 1, ...String(info.charCount).split(''));
    });
};
