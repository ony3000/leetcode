/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    p = p.replace(/\*+/g, '*');

    const strPatterns = p.split('*').map((str) => str.replace(/\?/g, '.'));

    const FIRST_INDEX = 0;
    const LAST_INDEX = strPatterns.length - 1;

    const regexPatterns = strPatterns.map((currentPattern, index) => {
        if (LAST_INDEX === 0) {
            return new RegExp(`^${currentPattern}$`);
        }

        if (index > FIRST_INDEX && index === LAST_INDEX) {
            return null;
        }

        const nextPattern = strPatterns[index + 1];

        if (typeof nextPattern === 'string') {
            return new RegExp(`${index === FIRST_INDEX ? '^' : ''}${currentPattern}.*${nextPattern}${index === LAST_INDEX - 1 ? '$' : ''}`);
        }
        else {
            return new RegExp(`${index === FIRST_INDEX ? '^' : ''}${currentPattern}${index === LAST_INDEX - 1 ? '$' : ''}`);
        }
    });

    let skipIndex = 0;
    for (let index = 0; index < regexPatterns.length; index += 1) {
        const regex = regexPatterns[index];

        if (regex === null) {
            continue;
        }

        const matches = s.slice(skipIndex).match(regex);

        if (matches === null) {
            return false;
        }

        const [ matchedStr ] = matches;

        if (typeof strPatterns[index + 1] === 'string') {
            skipIndex += (matches.index + Math.min(matchedStr.length, strPatterns[index].length + strPatterns[index + 1].length) - strPatterns[index + 1].length);
        }
        else {
            skipIndex += matches.index;
        }
    }

    return true;
};
