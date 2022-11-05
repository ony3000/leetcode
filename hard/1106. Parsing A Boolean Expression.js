/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function(expression) {
    const stacks = [
        {
            operator: null,
            values: [],
        },
    ];
    let operator = null;

    expression.split('').forEach((letter, index) => {
        switch (letter) {
            case 't':
                stacks[stacks.length - 1].values.push(true);
                break;
            case 'f':
                stacks[stacks.length - 1].values.push(false);
                break;
            case '(':
                stacks.push({
                    operator,
                    values: [],
                });
                break;
            case ')':
                const lastStack = stacks.pop();
                let partialResult = null;

                switch (lastStack.operator) {
                    case 'AND':
                        partialResult = lastStack.values.reduce((acc, current) => (acc && current), true);
                        break;
                    case 'OR':
                        partialResult = lastStack.values.reduce((acc, current) => (acc || current), false);
                        break;
                    case 'NOT':
                        partialResult = !lastStack.values[0];
                        break;
                    default:
                        break;
                }

                stacks[stacks.length - 1].values.push(partialResult);
                operator = null;
                break;
            case '&':
                operator = 'AND';
                break;
            case '|':
                operator = 'OR';
                break;
            case '!':
                operator = 'NOT';
                break;
            default:
                break;
        }
    });

    return stacks[0].values[0];
};
