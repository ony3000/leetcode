/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const temp = [];
    const brackets = s.split('');

    for (let index = 0; index < brackets.length; index += 1) {
        const bracket = brackets[index];

        switch (bracket) {
            case '(':
            case '{':
            case '[':
                temp.push(bracket);
                continue;
            default:
                break;
        }

        const lastInserted = temp.pop();

        switch (lastInserted) {
            case '(':
                if (bracket !== ')') {
                    return false;
                }
                break;
            case '{':
                if (bracket !== '}') {
                    return false;
                }
                break;
            case '[':
                if (bracket !== ']') {
                    return false;
                }
                break;
            case undefined:
                return false;
        }
    }

    return (temp.length === 0);
};
