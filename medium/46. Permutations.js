/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];

    const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));

    const permutationCount = factorial(nums.length);

    for (let order = 1; order <= permutationCount; order += 1) {
        const digits = nums.slice();
        const temp = [];
        let index = order - 1;

        for (let count = digits.length - 1; count >= 0; count -= 1) {
            const partialPermutationCount = factorial(count);
            const quotient = Math.floor(index / partialPermutationCount);

            temp.push(digits[quotient]);
            digits.splice(quotient, 1);
            index %= partialPermutationCount;
        }

        result.push(temp);
    }

    return result;
};
