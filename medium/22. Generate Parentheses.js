/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const parenthesesCombinations = {
        1: ['(x)'],
    };

    const combineParentheses = (target, injectable) => {
        const combined = [];

        const injected = target.replace('x', injectable);
        combined.push(injected);

        const plainTarget = target.replace('x', '');
        combined.push(plainTarget + injectable);
        combined.push(injectable + plainTarget);

        return combined;
    };

    const recursiveClosure = (num) => {
        if (num === 1) {
            return parenthesesCombinations[num];
        }

        const half = Math.ceil(num / 2);
        const result = [];

        for (let part = num - 1; part >= half; part -= 1) {
            const combinations = parenthesesCombinations[part] || recursiveClosure(part);
            const anotherCombinations = parenthesesCombinations[num - part] || recursiveClosure(num - part);

            combinations.forEach((wellFormed) => {
                anotherCombinations.forEach((anotherWellFormed) => {
                    result.push(...combineParentheses(wellFormed, anotherWellFormed));
                    result.push(...combineParentheses(anotherWellFormed, wellFormed));
                });
            });
        }

        const uniqueCombinations = [...new Set(result)];

        parenthesesCombinations[num] = uniqueCombinations;

        return uniqueCombinations;
    };

    let generated = recursiveClosure(n);

    generated = generated.map((wellFormed) => wellFormed.replace('x', ''));

    return [...new Set(generated)];
};
